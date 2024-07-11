// db.js
import mysql from 'mysql';

const connection = mysql.createConnection({
  host:process.env.NEXT_PUBLIC_AWS_DB_URL,
  user: process.env.NEXT_PUBLIC_AWS_DB_USER,
  password: process.env.NEXT_PUBLIC_AWS_DB_PASSWORD,
  database: process.env.NEXT_PUBLIC_AWS_DB_NAME,
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
  console.log('Connection Details:');
  console.log('Host:', connection.config.host);
  console.log('User:', connection.config.user);
  console.log('Database:', connection.config.database);
});

export default connection;
