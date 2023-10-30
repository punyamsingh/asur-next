// 

import connection from './db.js';

export default async function(req, res) {
  try {
   
    if (req.method === 'GET') {
        const {coursecode} = req.query;
        console.log(coursecode)
      const results = await new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM classroom WHERE room_id = (SELECT classroom_id FROM subject WHERE subject_id = ${coursecode})`, (error, results) => {
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
