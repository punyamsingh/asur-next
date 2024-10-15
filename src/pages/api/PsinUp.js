import supabase from './db.js';
import middleware from '@/cors.js';

export default async function handler(req,res) {
  if (req.method === 'POST') {
    try {
      // await middleware(req, res)
      const { FirstName,LastName,dob,NetId } = req.body;

      // Insert the new student
      const { data: insertData,error: insertError } = await supabase
        .from('student')
        .insert([
          {
            first_name: FirstName,
            last_name: LastName,
            dob: dob,
            net_id: NetId,
          },
        ])
        .select('roll_no')
        .single();

      if (insertError) {
        throw insertError;
      }

      const id = insertData.roll_no;

      // Enroll the new student into all subjects
      const { data: subjects,error: subjectsError } = await supabase
        .from('subject')
        .select('subject_id');

      if (subjectsError) {
        throw subjectsError;
      }

      const enrollments = subjects.map(subject => ({
        roll_no: id,
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
        roll_no: id,
        subject_id: subject.subject_id,
        date_marked: '1000-01-01',
        pora: 'P',
        percentage: 0,
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
