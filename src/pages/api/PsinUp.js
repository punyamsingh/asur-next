import connection from './db.js';
import middleware from '@/cors.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // await middleware(req, res)
      const { FirstName, LastName, DOB, NetId } = req.body;

      const insertQuery = `
        INSERT INTO student (First_Name, Last_Name, DOB, Net_ID) 
        VALUES ("${FirstName}", "${LastName}", "${DOB}", "${NetId}");
      `;

      const insertPromise = new Promise((resolve, reject) => {
        connection.query(insertQuery, (error, results) => {
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

      const lastIdPromise = new Promise((resolve, reject) => {
        connection.query(lastIdQuery, (error, lastIdResults) => {
          if (error) {
            reject(error);
          } else {
            resolve(lastIdResults);
          }
        });
      });

      Promise.all([insertPromise, lastIdPromise])
        .then(([insertResults, lastIdResults]) => {
          const id = lastIdResults[0].Roll_No;

          const enrollQuery = `
            INSERT INTO studenttosubject (Roll_No, Subject_Id)
            SELECT ${id}, subject_id FROM subject;
          `;

          const enrollPromise = new Promise((resolve, reject) => {
            connection.query(enrollQuery, [id], (error, enrollResults) => {
              if (error) {
                reject(error);
              } else {
                resolve(enrollResults);
              }
            });
          });

          return enrollPromise;
        })
        .then((id) => {
            console.log("mummy")
            console.log(id)
            console.log("mummy")
          const insertAttendanceQuery = `
            INSERT INTO attendance_details (Roll_No, Subject_ID, Date_Marked, PorA, Percentage)
            SELECT st.Roll_No, sub.Subject_ID, '1000-01-01', 'P', 0
            FROM student st, subject sub
            WHERE st.Roll_No = ?;
          `;

          const insertAttendancePromise = new Promise((resolve, reject) => {
            connection.query(insertAttendanceQuery, [id], (error, insertAttendanceResults) => {
              if (error) {
                reject(error);
              } else {
                resolve(insertAttendanceResults);
              }
            });
          });

          return insertAttendancePromise;
        })
        .then(() => {
          res.status(200).json({ message: 'Sign up details sent to DB successfully' });
        })
        .catch((error) => {
          res.status(500).json({ error: 'Error signing up: ' + error.message });
        });
    } catch (error) {
      res.status(500).json({ error: 'Error signing up: ' + error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
