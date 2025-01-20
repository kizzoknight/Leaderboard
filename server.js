const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

// HTML file path
const HTML_FILE = path.join(__dirname, 'index.html');

// Read leaderboard data from the HTML file
function getLeaderboardData() {
    const htmlContent = fs.readFileSync(HTML_FILE, 'utf8');
    const dataMatch = htmlContent.match(/<script id="leaderboard-data" type="application\/json">([\s\S]*?)<\/script>/);
    return dataMatch ? JSON.parse(dataMatch[1]) : { game1: [], game2: [], game3: [] };
}

// Write leaderboard data into the HTML file
function saveLeaderboardData(data) {
    let htmlContent = fs.readFileSync(HTML_FILE, 'utf8');
    htmlContent = htmlContent.replace(
        /<script id="leaderboard-data" type="application\/json">([\s\S]*?)<\/script>/,
        `<script id="leaderboard-data" type="application/json">${JSON.stringify(data, null, 2)}</script>`
    );
    fs.writeFileSync(HTML_FILE, htmlContent, 'utf8');
}

// API to get leaderboard data
app.get('/leaderboard', (req, res) => {
    const data = getLeaderboardData();
    res.json(data);
});

// API to update leaderboard data
app.post('/leaderboard', (req, res) => {
    const data = req.body;
    saveLeaderboardData(data);
    res.sendStatus(200);
});

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
