const express = require("express");
const router = express.Router();

console.log("Upload route loaded!");

router.get("/", (req, res) => {
    res.send("UPLOAD ROUTE WORKING");
});

module.exports = router;