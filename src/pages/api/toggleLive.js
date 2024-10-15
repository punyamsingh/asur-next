import supabase from './db.js';
import middleware from '@/cors.js';

export default async function handler(req,res) {
  await middleware(req,res);

  if (req.method === 'POST') {

    try {
      const { course_id } = req.body;

      // Toggle the live status of the subject
      const { data: subjects,error: subjectsError } = await supabase
        .from('subject')
        .select('live')
        .eq('subject_id',course_id)
        .single();

      if (subjectsError) {
        throw subjectsError;
      }

      const currentLiveStatus = subjects.live;
      console.log("phle ye tha ",subjects);
      const { data: updateData,error: updateError } = await supabase
        .from('subject')
        .update({
          live: currentLiveStatus.trim() === 'L' ? 'NL' : 'L',
        })
        .eq('subject_id',course_id)
        .single();

   
      if (updateError) {
        throw updateError;
      }

      res.status(200).json({ message: 'Class live status updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating class live status: ' + error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
