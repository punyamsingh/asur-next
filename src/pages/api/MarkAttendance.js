import supabase from './db.js';
import middleware from '@/cors.js';

export default async function handler(req,res) {
  await middleware(req,res); // Apply CORS middleware

  if (req.method === 'POST') {
    try {
      const { stud_id,course_id,date,attendance_status } = req.body;

      // Insert or update attendance details
      const { data,error } = await supabase
        .from('attendance_details')
        .upsert(
          [
            {
              roll_no: stud_id,
              subject_id: course_id,
              date_marked: date,
              pora: attendance_status,
              percentage: 0,
            },
          ],
          { onConflict: ['roll_no','subject_id','date_marked'] }
        );

      if (error) {
        console.error('Error during upsert:',error); // Log error
        throw error;
      }

      res.status(200).json({ message: 'Attendance marked successfully' });
    } catch (error) {
      console.error('Error marking attendance:',error); // Log error
      res.status(500).json({ error: 'Error marking attendance' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
