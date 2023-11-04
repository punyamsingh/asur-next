// 

import connection from './db.js';

export default async function(req, res) {
  try {
   
    if (req.method === 'GET') {
        const { rollNo,courseId} = req.query;
      const results = await new Promise((resolve, reject) => {
        connection.query(`select * from attendance_details where roll_no=${rollNo} and subject_id=${courseId}`, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      
      res.status(200).json(results);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  } finally {
    res.end();
  }
};
