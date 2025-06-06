import pool from "../config/db.js";

async function getAllHikes() {
  const [rows] = await pool.query("SELECT * FROM hikes");
  return rows;
}

// Function to get a hike by ID
async function getHikeById(id) {
  const [rows] = await pool.query("SELECT * FROM hikes WHERE id = ?", [id]);
  return rows[0];
}

// Function to add a new hike
async function addHike(hike){
  const { name, location, distance, difficulty } = hike;
  const [result] = await pool.query(
    "INSERT INTO hikes (name, location, distance, difficulty) VALUES (?, ?, ?, ?)",
    [name, location, distance, difficulty]
  );
  return result.insertId
}

// get filtered hikes from the database
/* ------------------------------------------------------------------ */
/*  Flexible filter query                                             */
/* ------------------------------------------------------------------ */
async function getFilteredHikesFromDB(filters = {}) {
  const { location, difficulty, minLengthKm, maxLengthKm } = filters;

  let sql    = 'SELECT * FROM hikes WHERE 1=1';
  const args = [];

  if (location) {
    sql += ' AND location = ?';
    args.push(location);
  }

  if (difficulty) {
    sql += ' AND difficulty = ?';
    args.push(difficulty);
  }

  if (minLengthKm) {
    sql += ' AND length_km >= ?';
    args.push(Number(minLengthKm));
  }

  if (maxLengthKm) {
    sql += ' AND length_km <= ?';
    args.push(Number(maxLengthKm));
  }

  const [rows] = await pool.query(sql, args);
  return rows;
}

export default {
  getAllHikes,
  getHikeById,
  addHike,
  getFilteredHikesFromDB
};
