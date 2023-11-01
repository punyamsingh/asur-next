// 

import connection from './db.js';
import middleware from '@/cors.js';

export default async function(req, res) {
  await middleware(req, res);
  try {
    if (req.method === 'GET') {
        const{coursecode}=req.query;
      const results = await new Promise((resolve, reject) => {
        connection.query(`SELECT LIVE FROM subject where subject_id=${coursecode}`, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      
      //res.status(200).json(results);
       if (results.length > 0) {
        res.status(200).json(results[0]); // Return the first element as a single JSON object
      } else {
        res.status(404).json({ error: 'No matching data found' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  } finally {
    res.end();
  }
};
