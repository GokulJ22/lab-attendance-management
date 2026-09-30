const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "Gokul",
    password: "gokul@2008",
    database: "lab_attendance"
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err.message);
        return;
    }

    console.log("MySQL Connected Successfully");
});

app.get("/", (req, res) => {
    res.send("Lab Attendance Backend is Running");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
