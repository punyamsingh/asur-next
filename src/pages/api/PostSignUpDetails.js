import connection from './db.js';
import middleware from '@/cors.js';

export default async function handler(req,res) {
  if (req.method === 'POST') {
    try {
      const { FirstName,LastName,DOB,NetId } = req.body;

      const insertQuery = `
      insert into student(First_Name,Last_Name,DOB,Net_ID) 
  values("${FirstName}","${LastName}","${DOB}","${NetId}");
      `;

      const insertPromise = new Promise((resolve,reject) => {
        connection.query(insertQuery,[FirstName,LastName,DOB,NetId],(error,results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      const lastIdQuery = `
        SELECT Roll_No
        FROM student
        ORDER BY Roll_No DESC
        LIMIT 1;
      `;

      const lastIdPromise = new Promise((resolve,reject) => {
        connection.query(lastIdQuery,(error,lastIdResults) => {
          if (error) {
            reject(error);
          } else {
            resolve(lastIdResults);
          }
        });
      });

      Promise.all([insertPromise,lastIdPromise])
        .then(([insertResults,lastIdResults]) => {
          const id = lastIdResults[0].Roll_No;
          const enrollQuery = `
          insert into studenttosubject(Roll_No,Subject_Id) select ${id},subject_id from subject;
          `;

          const enrollPromise = new Promise((resolve,reject) => {
            connection.query(enrollQuery,[id],(error,enrollResults) => {
              if (error) {
                reject(error);
              } else {
                resolve(enrollResults);
              }
            });
          });

          return enrollPromise;
        })
        .then(() => {
          res.status(200).json({ message: 'Sign up details sent to DB successfully' });
        })
        .catch((error) => {
          res.status(500).json({ error: 'Error signing up' });
        });
    } catch (error) {
      res.status(500).json({ error: 'Error signing up' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
