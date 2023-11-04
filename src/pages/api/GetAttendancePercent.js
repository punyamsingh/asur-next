// 

import connection from './db.js';

export default async function(req, res) {
  try {
   
    if (req.method === 'GET') {
        const { rollNo } = req.query;
      const results = await new Promise((resolve, reject) => {
        connection.query(` SELECT
        ad.Subject_ID,
        (SUM(CASE WHEN ad.PorA = 'P' THEN 1 ELSE 0 END) / COUNT(DISTINCT ad.Date_marked)) * 100 AS Percentage
        FROM attendance_details AS ad
        WHERE ad.Roll_No = ${rollNo}
        GROUP BY ad.Subject_ID;`, (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
      
      res.status(200).json(results);
      // if (results.length === 0) {
      //   // Create the specific response structure with 0% for each subject
      //   const emptyResponse = [
      //     { "Subject_ID": "CCC708", "Percentage": 0 },
      //     { "Subject_ID": "CSD101", "Percentage": 0 },
      //     { "Subject_ID": "CSD102", "Percentage": 0 },
      //     { "Subject_ID": "CSD311", "Percentage": 0 },
      //     { "Subject_ID": "MAT376", "Percentage": 0 },
      //     // Add more subjects as needed
      //   ];
      //   res.status(200).json(emptyResponse);
      // } else {
      //   res.status(200).json(results);
      // }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  } finally {
    res.end();
  }
};
