// 

import connection from './db.js';
import middleware from '@/cors.js';

export default async function(req, res) {
 
  try {
    await middleware(req, res);
    if (req.method === 'GET') {
        const{date,rollNum,courseCode}=req.query;
      const results = await new Promise((resolve, reject) => {
        connection.query(`select PorA from attendance_details where date_marked=${date} and subject_id=${courseCode} and roll_no=${rollNum};`, (error, results) => {
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
