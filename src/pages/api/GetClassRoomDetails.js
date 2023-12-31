import connection from './db.js';

export default async function (req, res) {
  try {
    if (req.method === 'GET') {
      const { coursecode } = req.query;
      // console.log(coursecode);
      const results = await new Promise((resolve, reject) => {
        connection.query(
          `SELECT * FROM classroom WHERE room_id = (SELECT classroom_id FROM subject WHERE Subject_ID = ${coursecode})`,
          (error, results) => {
            if (error) {
              reject(error);
            } else {
              resolve(results);
            }
          }
        );
      });

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
}
