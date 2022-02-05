import pg from "pg";

const pool = new pg.Pool({
  connectionString:
    "postgres://gzbobfuzxlvhlu:c233fee65441cb903fb7e7d01681ef73205053218d9f58f4b0b994328c9e01f7@ec2-54-220-243-77.eu-west-1.compute.amazonaws.com:5432/d4geghq2r85c3n",
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
