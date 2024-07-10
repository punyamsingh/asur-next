import supabase from './db.js';
import middleware from '@/cors.js';

export default async function handler(req,res) {
  await middleware(req,res);
  try {
    if (req.method === 'GET') {
      const { data,error } = await supabase
        .from('subject')
        .select('*');

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
