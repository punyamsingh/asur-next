import supabase from './db.js';

export default async function handler(req,res) {
  if (req.method === 'POST') {
    try {
      const { stud_id,course_id,date,attendance_status } = req.body;

      // Insert or update attendance details
      const { data,error } = await supabase
        .from('attendance_details')
        .upsert([
          {
            Roll_No: stud_id,
            Subject_ID: course_id,
            Date_marked: date,
            PorA: attendance_status,
            Percentage: 0
          }
        ],{ onConflict: ['Roll_No','Subject_ID','Date_marked'] })
        .eq('Roll_No',stud_id)
        .eq('Subject_ID',course_id)
        .eq('Date_marked',date);

      if (error) {
        throw error;
      }

      res.status(200).json({ message: 'Attendance marked successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error marking attendance' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
