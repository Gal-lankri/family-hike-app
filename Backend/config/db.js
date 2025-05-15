import mysql from 'mysql2/promise'; // Import mysql2 with promise support
import dotenv from 'dotenv'; 
dotenv.config();

// Load environment variables from .env file
// using dotenv
// Create a MySQL connection pool

const pool = mysql.createPool({
  host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Export the pool for use in other modules
export default pool;