import supabase from './db.js';
import middleware from '@/cors.js';
import { app } from '../../db/firebase.js';
import { getAuth,createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';

//fake endpoint pls ignore

export default async function handler(req,res) {
  if (req.method === 'POST') {
    await middleware(req,res);
    try {
      const { FirstName,LastName,DOB,NetId,email,password } = req.body;

      // Create user in Firebase
      await createUserInFirebase(email,password,FirstName,LastName);

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
      const { data: enrollData,error: enrollError } = await supabase
        .from('studenttosubject')
        .insert(
          supabase
            .from('subject')
            .select('subject_id')
            .then((subjects) =>
              subjects.data.map((subject) => ({
                Roll_No: id,
                subject_id: subject.subject_id,
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

async function createUserInFirebase(email,password,FirstName,LastName) {
  const auth = getAuth(app);

  try {
    const userCredential = await createUserWithEmailAndPassword(auth,email,password);
    const user = userCredential.user;

    // Set display name (optional)
    await updateProfile(user,{
      displayName: `${FirstName} ${LastName}`,
    });

    // console.log('User created:', user.uid);
  } catch (error) {
    console.error('Error creating user:',error);
    throw error; // Rethrow the error to be handled in your endpoint code
  }
}
