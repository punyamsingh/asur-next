// db.js
// import mysql from 'mysql';

// const connection = mysql.createConnection({
//   host:"sql12.freesqldatabase.com",
//   user: "sql12719142",
//   password: "zv2Vuh5uLG",
//   database: "sql12719142",
// });

// const connection = mysql.createConnection({
//   host: process.env.NEXT_PUBLIC_DB_HOST,
//   user: process.env.NEXT_PUBLIC_DB_USER,
//   password: process.env.NEXT_PUBLIC_DB_PASSWORD,
//   database: process.env.NEXT_PUBLIC_DB_DATABASE,
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Database connection error: ' + err.stack);
//     return;
//   }
//   // console.log('Connected to the database');
// });

// export default connection;


import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl,supabaseKey);

export default supabase;