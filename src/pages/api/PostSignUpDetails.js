import supabase from './db.js';
import middleware from '@/cors.js';

export default async function handler(req,res) {
  if (req.method === 'POST') {
    try {
      await middleware(req,res);
      const { FirstName,LastName,DOB,NetId } = req.body;

      // Insert the new student
      const { data: insertData,error: insertError } = await supabase
        .from('student')
        .insert([
          {
            First_Name: FirstName,
            Last_Name: LastName,
            DOB: DOB,
            net_id: NetId,
          },
        ])
        .select('Roll_No')
        .single();

      if (insertError) {
        throw insertError;
      }

      const id = insertData.Roll_No;

      // Enroll the new student into all subjects
      const { data: enrollData,error: enrollError } = await supabase
        .from('studenttosubject')
        .insert(
          supabase
            .from('subject')
            .select('Subject_ID')
            .then((subjects) =>
              subjects.data.map((subject) => ({
                Roll_No: id,
                Subject_ID: subject.Subject_ID,
              }))
            )
        );

      if (enrollError) {
        throw enrollError;
      }

      res.status(200).json({ message: 'Sign up details sent to DB successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error signing up' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
