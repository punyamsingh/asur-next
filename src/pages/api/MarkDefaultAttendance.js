import supabase from './db.js';

export default async function handler(req,res) {
  if (req.method === 'POST') {
    try {
      const { rollNo } = req.body;

      // Get the subject IDs
      const { data: subjects,error: subjectError } = await supabase
        .from('subject')
        .select('subject_id');

      if (subjectError) {
        throw subjectError;
      }

      // Prepare attendance records
      const attendanceRecords = subjects.map(subject => ({
        Roll_No: rollNo,
        subject_id: subject.subject_id,
        Date_marked: '2000-01-01',
        PorA: 'P',
        Percentage: 0
      }));

      // Insert attendance records
      const { data,error } = await supabase
        .from('attendance_details')
        .insert(attendanceRecords);

      if (error) {
        throw error;
      }

      res.status(200).json({ message: 'Attendance default marked successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error marking attendance' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
