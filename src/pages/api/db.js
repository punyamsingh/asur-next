// db.js
import mysql from 'mysql';

const connection = mysql.createConnection({
  host:"sql12.freesqldatabase.com",
  user: "sql12719142",
  password: "zv2Vuh5uLG",
  database: "sql12719142",
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  // console.log('Connected to the database');
});

export default connection;
