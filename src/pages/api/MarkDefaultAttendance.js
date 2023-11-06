import connection from './db.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const {rollNo} = req.body;

      // Your SQL query
      const query = `
      INSERT INTO attendance_details (Roll_No, Subject_ID, Date_Marked, PorA, Percentage)
      SELECT st.Roll_No, sub.Subject_ID, '1000-01-01', 'P', 0
      FROM student st, subject sub
      WHERE st.Roll_No = ${rollNo}
      `;

      const results = await new Promise((resolve, reject) => {
        connection.query(query, [rollNo], (error, results) => {
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });

      res.status(200).json({ message: 'Attendance default marked successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error marking attendance' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
