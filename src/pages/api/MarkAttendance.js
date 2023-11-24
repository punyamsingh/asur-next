import connection from './db.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { stud_id, course_id, date, attendance_status } = req.body;

      // Your SQL query
      const query = `
      insert into attendance_details values(${stud_id},"${course_id}","${date}","${attendance_status}",0)
    on duplicate key update PorA="${attendance_status}"
      `;
      
      const results = await new Promise((resolve, reject) => {
        connection.query(query, [stud_id, course_id, date, attendance_status, attendance_status], (error, results) => {
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
