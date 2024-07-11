import supabase from './db.js';
import middleware from '@/cors.js';

export default async function (req,res) {
  try {
    await middleware(req,res);
    if (req.method === 'GET') {
      const { rollNo } = req.query;
      const { data,error } = await supabase.rpc('get_attendance_details',{ roll_no: rollNo });

      if (error) {
        throw error;
      }
      console.log(data)
      res.status(200).json(data);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  } finally {
    res.end();
  }
};
