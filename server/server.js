import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = new pg.Pool({
    connectionString: process.env.DB_CONN,
});

app.get("/", (req, res) => {
    res.json({message: "Grand Guestbook"});
});

app.get("/messages", async (_req, res) => {
    const { rows } = await db.query(
    "SELECT id, msg_name, content FROM messages ORDER BY id DESC"
);
    res.json(rows);
});


app.post("/messages", async (req, res) => {
    const {msg_name, content} = req.body;
    const {rows} = await db.query(
        "INSERT INTO messages (msg_name, content) VALUES ($1, $2) RETURNING id, msg_name, content",
        [msg_name, content]
    );
    res.status(201).json(rows[0]);
});

app.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});
