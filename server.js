const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Import Upload Route
const uploadRoute = require("./routes/upload");

// Use Upload Route
app.use("/upload", uploadRoute);

// Home Route
app.get("/", (req, res) => {
    res.send("Cloud Backup & Restore API is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});