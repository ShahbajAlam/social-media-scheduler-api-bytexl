const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
    res.send("Welcome to the Social Media Scheduler API!");
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
