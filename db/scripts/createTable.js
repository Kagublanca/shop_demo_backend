import query from "../index.js";

const SQLString = `CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    description TEXT,
    rating INT,
    storage TEXT
    info TEXT,
    weight INT
)`;

async function createTable() {
  const res = await query(SQLString);
  console.log("Table created sucessfully.", res);
}

createTable();
