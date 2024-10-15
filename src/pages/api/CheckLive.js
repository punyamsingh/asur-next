import supabase from './db.js';
import middleware from '@/cors.js';

export default async function handler(req,res) {
  await middleware(req,res);
  try {
    if (req.method === 'GET') {
      const { coursecode } = req.query;

      const { data,error } = await supabase
        .from('subject')
        .select('live')
        .eq('subject_id',coursecode)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        res.status(200).json(data); // Return the data as a JSON object
      } else {
        res.status(404).json({ error: 'No matching data found' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data',details: error.message });
  } finally {
    res.end();
  }
};
