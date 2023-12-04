const mysql = require('mysql');

const dbName="asur"
const userName="root"
const passw="RahulSQL2002"//change this when using on your local machine

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: userName,
//   password: passw,//my database password
//   database: dbName,
// });




const connection = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12657868',
  password: 'H8296G9hGs',
  database: 'sql12657868',
});


connection.connect(err => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

export default connection;