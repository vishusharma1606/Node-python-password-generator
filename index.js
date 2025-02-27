// Import required modules
const express = require("express");
const { spawn } = require("child_process");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// API endpoint to generate a password
app.get("/generate-password", (req, res) => {
    const length = req.query.length || 12; // Default length is 12
    
    // Spawn a Python process
    const pythonProcess = spawn("python3", ["password_generator.py", length]);

    let password = "";
    
    // Capture data from the Python script
    pythonProcess.stdout.on("data", (data) => {
        password += data.toString();
    });
    
    // Handle errors
    pythonProcess.stderr.on("data", (data) => {
        console.error(`Error: ${data}`);
    });
    
    // Send response after Python script execution
    pythonProcess.on("close", (code) => {
        if (code === 0) {
            res.json({ password: password.trim() });
        } else {
            res.status(500).json({ error: "Failed to generate password" });
        }
    });
});

// Root route to serve the HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
