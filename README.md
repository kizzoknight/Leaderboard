<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Settlers of Catan Leaderboard</title>
    <script id="leaderboard-data" type="application/json">
        {
            "game1": [
                { "name": "Alice", "score": 200 },
                { "name": "Bob", "score": 150 }
            ],
            "game2": [],
            "game3": []
        }
    </script>
    <style>
        body {
            font-family: 'Cinzel', serif;
            background-color: #f8f0e3;
            color: #5b4636;
            margin: 0;
            padding: 0;
        }
        h2 {
            font-family: 'Cinzel Decorative', serif;
            text-align: center;
            color: #7b5e57;
        }
        button, input {
            font-family: 'Cinzel', serif;
        }
        .login-container {
            max-width: 400px;
            margin: 100px auto;
            padding: 20px;
            background: #e2c090;
            border: 3px solid #8b5e34;
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .content {
            border: 2px solid #8b5e34;
            padding: 20px;
            background: #f5e5d4;
            border-radius: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            color: #5b4636;
        }
        table, th, td {
            border: 2px solid #8b5e34;
        }
        th, td {
            padding: 10px;
            text-align: left;
            background: #faf0e6;
        }
        th {
            background: #d2a679;
            color: #fff;
        }
        button {
            padding: 5px 10px;
            background: #8b5e34;
            border: none;
            cursor: pointer;
            color: #fff;
            border-radius: 5px;
        }
        button:hover {
            background: #7a4e2f;
        }
    </style>
</head>
<body>

<div id="login-page" class="active">
    <div class="login-container">
        <h2>Login</h2>
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button onclick="login()">Login</button>
    </div>
</div>

<div id="leaderboard-page" style="display: none;">
    <h2>Settlers of Catan Leaderboard</h2>
    <div class="content" id="game1">
        <h3>Game 1</h3>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="game1-tbody"></tbody>
        </table>
        <div>
            <input type="text" id="playerName1" placeholder="Player Name">
            <button onclick="addPlayer('game1')">Add Player</button>
        </div>
    </div>
    <div class="content" id="game2">
        <h3>Game 2</h3>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="game2-tbody"></tbody>
        </table>
        <div>
            <input type="text" id="playerName2" placeholder="Player Name">
            <button onclick="addPlayer('game2')">Add Player</button>
        </div>
    </div>
    <div class="content" id="game3">
        <h3>Game 3</h3>
        <table>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="game3-tbody"></tbody>
        </table>
        <div>
            <input type="text" id="playerName3" placeholder="Player Name">
            <button onclick="addPlayer('game3')">Add Player</button>
        </div>
    </div>
</div>

<script>
    const leaderboardData = JSON.parse(document.getElementById('leaderboard-data').textContent);

    function login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '1234') {
            document.getElementById('login-page').style.display = 'none';
            document.getElementById('leaderboard-page').style.display = 'block';
            loadGameData();
        } else {
            alert('Invalid login credentials');
        }
    }

    function loadGameData() {
        Object.keys(leaderboardData).forEach(gameId => {
            const tbody = document.getElementById(`${gameId}-tbody`);
            tbody.innerHTML = '';
            leaderboardData[gameId]
                .sort((a, b) => b.score - a.score)
                .forEach((player, index) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${index + 1}</td>
                        <td>${player.name}</td>
                        <td>${player.score}</td>
                        <td>
                            <button onclick="adjustScore('${gameId}', ${index}, 1)">+</button>
                            <button onclick="adjustScore('${gameId}', ${index}, -1)">-</button>
                            <button onclick="removePlayer('${gameId}', ${index})">Remove</button>
                        </td>
                    `;
                    tbody.appendChild(row);
                });
        });
    }

    function adjustScore(gameId, index, change) {
        leaderboardData[gameId][index].score += change;
        loadGameData();
    }

    function removePlayer(gameId, index) {
        leaderboardData[gameId].splice(index, 1);
        loadGameData();
    }

    function addPlayer(gameId) {
        const playerNameInput = document.getElementById(`playerName${gameId.slice(-1)}`);
        const playerName = playerNameInput.value.trim();
        if (playerName) {
            leaderboardData[gameId].push({ name: playerName, score: 0 });
            loadGameData();
            playerNameInput.value = '';
        } else {
            alert('Player name cannot be empty');
        }
    }
</script>

</body>
</html>
