import supabase from './db.js';
import middleware from '@/cors.js';

export default async function handler(req,res) {
  if (req.method === 'POST') {
    try {
      // await middleware(req, res)
      const { FirstName,LastName,DOB,NetId } = req.body;

      // Insert the new student
      const { data: insertData,error: insertError } = await supabase
        .from('student')
        .insert([
          {
            First_Name: FirstName,
            Last_Name: LastName,
            DOB: DOB,
            Net_ID: NetId,
          },
        ])
        .select('Roll_No')
        .single();

      if (insertError) {
        throw insertError;
      }

      const id = insertData.Roll_No;

      // Enroll the new student into all subjects
      const { data: subjects,error: subjectsError } = await supabase
        .from('subject')
        .select('subject_id');

      if (subjectsError) {
        throw subjectsError;
      }

      const enrollments = subjects.map(subject => ({
        Roll_No: id,
        subject_id: subject.subject_id,
      }));

      const { error: enrollError } = await supabase
        .from('studenttosubject')
        .insert(enrollments);

      if (enrollError) {
        throw enrollError;
      }

      // Insert default attendance
      const attendance = subjects.map(subject => ({
        Roll_No: id,
        subject_id: subject.subject_id,
        Date_Marked: '1000-01-01',
        PorA: 'P',
        Percentage: 0,
      }));

      const { error: attendanceError } = await supabase
        .from('attendance_details')
        .insert(attendance);

      if (attendanceError) {
        throw attendanceError;
      }

      res.status(200).json({ message: 'Sign up details sent to DB successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error signing up: ' + error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
