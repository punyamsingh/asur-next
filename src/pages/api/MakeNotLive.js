import connection from './db.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const {course_id}=req.body

      // Your SQL query
      const query = `
      UPDATE subject
  SET  LIVE= "NL"
  WHERE subject_id="${course_id}"
      `;

      const results = await new Promise((resolve, reject) => {
        connection.query(query, [course_id], (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      res.status(200).json({ message: 'Attendance marked successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error marking attendance' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
