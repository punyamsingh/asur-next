import supabase from './db.js';

export default async function handler(req,res) {
  try {
    if (req.method === 'GET') {
      const { coursecode } = req.query;

      // Fetch classroom_id from the subject table
      const { data: subjectData,error: subjectError } = await supabase
        .from('subject')
        .select('classroom_id')
        .eq('subject_id',coursecode)
        .single();

      if (subjectError) {
        throw subjectError;
      }

      if (!subjectData) {
        res.status(404).json({ error: 'No matching subject found' });
        return;
      }

      const classroomId = subjectData.classroom_id;

      // Fetch classroom details from the classroom table
      const { data: classroomData,error: classroomError } = await supabase
        .from('classroom')
        .select('*')
        .eq('Room_ID',classroomId)
        .single();

      if (classroomError) {
        throw classroomError;
      }

      if (classroomData) {
        res.status(200).json(classroomData); // Return the classroom data as a single JSON object
      } else {
        res.status(404).json({ error: 'No matching classroom found' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data',details: error.message });
  } finally {
    res.end();
  }
}
