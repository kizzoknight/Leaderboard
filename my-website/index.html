<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Settlers of Catan Leaderboard</title>
    <style>
        /* General Styles */
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
        #login-page, #leaderboard-page {
            display: none;
            padding: 20px;
        }
        #login-page.active, #leaderboard-page.active {
            display: block;
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
        .login-container h2 {
            margin-bottom: 20px;
        }
        .login-container input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 2px solid #8b5e34;
            border-radius: 5px;
            background: #f5e5d4;
            color: #5b4636;
        }
        .login-container button {
            width: 100%;
            padding: 10px;
            background: #8b5e34;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
        }
        .login-container button:hover {
            background: #7a4e2f;
        }

        /* Hamburger Menu */
        .hamburger-menu {
            background: #8b5e34;
            color: #fff;
            padding: 10px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: none;
            font-size: 16px;
            font-family: 'Cinzel', serif;
            width: 100%;
        }
        .hamburger-menu:hover {
            background: #7a4e2f;
        }
        .menu-content {
            display: none;
            background: #d2a679;
            padding: 10px;
            border: 2px solid #8b5e34;
            border-radius: 5px;
        }
        .menu-content.active {
            display: block;
        }
        .menu-item {
            padding: 10px;
            margin-bottom: 5px;
            background: #f5e5d4;
            border: 2px solid #8b5e34;
            border-radius: 5px;
            text-align: center;
            cursor: pointer;
        }
        .menu-item:hover {
            background: #e2c090;
        }

        /* Leaderboard */
        .content {
            border: 2px solid #8b5e34;
            padding: 20px;
            display: none;
            background: #f5e5d4;
            border-radius: 10px;
        }
        .content.active {
            display: block;
        }
        .table-container {
            overflow-x: auto;
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
        .logout {
            margin: 20px 0;
            padding: 10px;
            background: #8b5e34;
            color: #fff;
            border: none;
            cursor: pointer;
            border-radius: 5px;
        }
        .logout:hover {
            background: #7a4e2f;
        }
        .add-player {
            margin-top: 20px;
        }
        .add-player input {
            width: calc(100% - 90px);
            margin-bottom: 10px;
        }
    </style>
    <!-- Google Fonts for Settlers of Catan Look -->
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cinzel+Decorative:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

<!-- Login Page -->
<div id="login-page" class="active">
    <div class="login-container">
        <h2>Login</h2>
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button onclick="login()">Login</button>
    </div>
</div>

<!-- Leaderboard Page -->
<div id="leaderboard-page">
    <button class="hamburger-menu" onclick="toggleMenu()">
        Game Menu
        <span>&#9776;</span>
    </button>
    <div class="menu-content" id="menu-content">
        <div class="menu-item" data-target="game1" onclick="changeGame('game1')">Game 1</div>
        <div class="menu-item" data-target="game2" onclick="changeGame('game2')">Game 2</div>
        <div class="menu-item" data-target="game3" onclick="changeGame('game3')">Game 3</div>
    </div>

    <button class="logout" onclick="logout()">Logout</button>

    <div class="content active" id="game1">
        <h2 contenteditable="true" onblur="renameGame('game1')">Game 1 Leaderboard</h2>
        <div class="table-container">
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
        </div>
        <div class="add-player">
            <input type="text" placeholder="Player Name" id="playerName1">
            <button onclick="addPlayer('game1')">Add Player</button>
        </div>
    </div>

    <div class="content" id="game2">
        <h2 contenteditable="true" onblur="renameGame('game2')">Game 2 Leaderboard</h2>
        <div class="table-container">
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
        </div>
        <div class="add-player">
            <input type="text" placeholder="Player Name" id="playerName2">
            <button onclick="addPlayer('game2')">Add Player</button>
        </div>
    </div>

    <div class="content" id="game3">
        <h2 contenteditable="true" onblur="renameGame('game3')">Game 3 Leaderboard</h2>
        <div class="table-container">
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
        </div>
        <div class="add-player">
            <input type="text" placeholder="Player Name" id="playerName3">
            <button onclick="addPlayer('game3')">Add Player</button>
        </div>
    </div>
</div>

<script>
    const gameData = JSON.parse(localStorage.getItem('leaderboardData')) || {
        game1: [
            { name: "Alice", score: 200 },
            { name: "Bob", score: 150 }
        ],
        game2: [],
        game3: []
    };

    function login() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === 'admin' && password === '1234') {
            showLeaderboard();
        } else if (username === 'viewer' && password === '5678') {
            showLeaderboard();
            disableEditing();
        } else {
            alert('Invalid username or password');
        }
    }

    function logout() {
        location.reload();
    }

    function showLeaderboard() {
        document.getElementById('login-page').classList.remove('active');
        document.getElementById('leaderboard-page').classList.add('active');
        loadGameData();
    }

    function disableEditing() {
        document.querySelectorAll('h2[contenteditable]').forEach(h2 => {
            h2.setAttribute('contenteditable', 'false');
        });
    }

    function toggleMenu() {
        const menu = document.querySelector('.menu-content');
        menu.classList.toggle('active');
    }

    function changeGame(gameId) {
        document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
        document.getElementById(gameId).classList.add('active');
    }

    function renameGame(gameId) {
        const gameTitle = document.querySelector(`#${gameId} h2`).textContent.trim();
        const menuItem = document.querySelector(`.menu-item[data-target="${gameId}"]`);
        menuItem.textContent = gameTitle;
    }

    function loadGameData() {
        Object.keys(gameData).forEach(gameId => {
            const tbody = document.getElementById(`${gameId}-tbody`);
            tbody.innerHTML = '';
            // Sort players by score in descending order
            const sortedPlayers = [...gameData[gameId]].sort((a, b) => b.score - a.score);
            sortedPlayers.forEach((player, index) => {
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

    function adjustScore(gameId, playerIndex, change) {
        gameData[gameId][playerIndex].score += change;
        saveData();
        loadGameData();
    }

    function removePlayer(gameId, playerIndex) {
        gameData[gameId].splice(playerIndex, 1);
        saveData();
        loadGameData();
    }

    function addPlayer(gameId) {
        const playerNameInput = document.getElementById(`playerName${gameId.slice(-1)}`);
        const playerName = playerNameInput.value.trim();
        if (playerName) {
            gameData[gameId].push({ name: playerName, score: 0 });
            saveData();
            loadGameData();
            playerNameInput.value = '';
        } else {
            alert('Player name cannot be empty.');
        }
    }

    function saveData() {
        localStorage.setItem('leaderboardData', JSON.stringify(gameData));
    }
</script>

</body>
</html>
