import supabase from './db.js';
import middleware from '@/cors.js';

export default async function handler(req,res) {
  try {
    await middleware(req,res);
    if (req.method === 'GET') {
      const { date,rollNum,courseCode } = req.query;

      const { data,error } = await supabase
        .from('attendance_details')
        .select('PorA')
        .eq('Date_marked',date)
        .eq('subject_id',courseCode)
        .eq('Roll_No',rollNum)
        .single();

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
