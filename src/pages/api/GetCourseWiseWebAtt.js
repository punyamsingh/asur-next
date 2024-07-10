import supabase from './db.js';

export default async function handler(req,res) {
  try {
    if (req.method === 'GET') {
      const { rollNo,courseId } = req.query;

      const { data,error } = await supabase
        .from('attendance_details')
        .select('*')
        .eq('Roll_No',rollNo)
        .eq('Subject_ID',courseId);

      if (error) {
        throw error;
      }

      res.status(200).json(data);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data',details: error.message });
  } finally {
    res.end();
  }
};
