// db.js
import mysql from 'mysql';

const connection = mysql.createConnection({
  host:"asur-db-aws.cfkka2su8evj.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "asuraws2024",
  database: "asur",
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
