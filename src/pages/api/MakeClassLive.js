import supabase from './db.js';
import middleware from '@/cors.js';

export default async function handler(req,res) {
  if (req.method === 'POST') {
    await middleware(req,res);
    try {
      const { course_id } = req.body;

      // Update the subject to set LIVE to 'L'
      const { data,error } = await supabase
        .from('subject')
        .update({ LIVE: 'L' })
        .eq('Subject_ID',course_id);

      if (error) {
        throw error;
      }

      res.status(200).json({ message: 'Made class Live successful' });
    } catch (error) {
      res.status(500).json({ error: 'Error marking attendance' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
