import supabase from './db.js';
import middleware from '@/cors.js';

export default async function handler(req,res) {
  if (req.method === 'POST') {
    await middleware(req,res);
    try {
      const { course_id } = req.body;

      // Toggle the LIVE status of the subject
      const { data: subjects,error: subjectsError } = await supabase
        .from('subject')
        .select('LIVE')
        .eq('subject_id',course_id)
        .single();

      if (subjectsError) {
        throw subjectsError;
      }

      const currentLiveStatus = subjects.LIVE;

      const { data: updateData,error: updateError } = await supabase
        .from('subject')
        .update({
          LIVE: currentLiveStatus === 'L' ? 'NL' : 'L',
        })
        .eq('subject_id',course_id);

      if (updateError) {
        throw updateError;
      }

      res.status(200).json({ message: 'Class LIVE status updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating class LIVE status: ' + error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
