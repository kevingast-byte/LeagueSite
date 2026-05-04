// Sample data for the sports league
const teams = [
    { name: 'XCEL #2', logo: 'https://via.placeholder.com/100?text=Team+A', description: 'A strong team with great players.' },
    { name: 'Valley Harvest', logo: 'https://via.placeholder.com/100?text=Team+B', description: 'Known for their defensive strategy.' },
    { name: 'Team C', logo: 'https://via.placeholder.com/100?text=Team+C', description: 'Rising stars in the league.' },
    { name: 'Team D', logo: 'https://via.placeholder.com/100?text=Team+D', description: 'Champions of the previous season.' }
];

const schedule = [
    { date: '2023-10-01', home: 'XCEL #2', away: 'Valley Harvest', score: '2-1', status: 'Completed' },
    { date: '2023-10-08', home: 'Team C', away: 'Team D', score: 'TBD', status: 'Upcoming' },
    { date: '2023-10-15', home: 'XCEL #2', away: 'Team C', score: 'TBD', status: 'Upcoming' },
    { date: '2023-10-22', home: 'Valley Harvest', away: 'Team D', score: 'TBD', status: 'Upcoming' }
];

// Function to calculate standings from schedule
function calculateStandings() {
    const teamStats = {};

    // Initialize stats for all teams
    teams.forEach(team => {
        teamStats[team.name] = { wins: 0, losses: 0 };
    });

    // Process completed games
    schedule.forEach(game => {
        if (game.status === 'Completed' && game.score !== 'TBD') {
            const [homeScore, awayScore] = game.score.split('-').map(Number);
            if (homeScore > awayScore) {
                teamStats[game.home].wins++;
                teamStats[game.away].losses++;
            } else if (homeScore < awayScore) {
                teamStats[game.away].wins++;
                teamStats[game.home].losses++;
            } else {
                // In baseball, ties are rare, but if tie, maybe count as half win/loss or something, but for now, skip or handle as draw
                // But since no draws, perhaps treat as no result, but to keep simple, assume no ties.
            }
        }
    });

    // Convert to array and calculate win %
    const standingsArray = Object.keys(teamStats).map(teamName => {
        const stats = teamStats[teamName];
        const gamesPlayed = stats.wins + stats.losses;
        const winPct = gamesPlayed > 0 ? (stats.wins / gamesPlayed).toFixed(3) : '0.000';
        return {
            team: teamName,
            wins: stats.wins,
            losses: stats.losses,
            winPct: winPct
        };
    });

    // Sort by win % descending, then by wins descending
    standingsArray.sort((a, b) => {
        if (parseFloat(b.winPct) !== parseFloat(a.winPct)) {
            return parseFloat(b.winPct) - parseFloat(a.winPct);
        }
        return b.wins - a.wins;
    });

    // Assign positions
    standingsArray.forEach((team, index) => {
        team.position = index + 1;
    });

    return standingsArray;
}

// Function to populate teams
function populateTeams() {
    const teamsList = document.getElementById('teams-list');
    teams.forEach(team => {
        const teamCard = `
            <div class="col-md-3 team-card">
                <div class="card">
                    <img src="${team.logo}" class="card-img-top" alt="${team.name} logo">
                    <div class="card-body">
                        <h5 class="card-title">${team.name}</h5>
                        <p class="card-text">${team.description}</p>
                    </div>
                </div>
            </div>
        `;
        teamsList.innerHTML += teamCard;
    });
}

// Function to populate team filter dropdown
function populateTeamFilter() {
    const teamFilter = document.getElementById('teamFilter');
    teams.forEach(team => {
        const option = document.createElement('option');
        option.value = team.name;
        option.textContent = team.name;
        teamFilter.appendChild(option);
    });
}

// Function to filter schedule
function filterSchedule(selectedTeam) {
    const rows = document.querySelectorAll('#schedule-body tr');
    rows.forEach(row => {
        const homeTeam = row.cells[1].textContent;
        const awayTeam = row.cells[2].textContent;
        if (selectedTeam === 'all' || homeTeam === selectedTeam || awayTeam === selectedTeam) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Function to populate schedule
function populateSchedule() {
    const scheduleBody = document.getElementById('schedule-body');
    schedule.forEach(game => {
        const row = `
            <tr>
                <td>${game.date}</td>
                <td>${game.home}</td>
                <td>${game.away}</td>
                <td>${game.score}</td>
                <td>${game.status}</td>
            </tr>
        `;
        scheduleBody.innerHTML += row;
    });
}

// Function to populate standings
function populateStandings() {
    const standingsBody = document.getElementById('standings-body');
    const standings = calculateStandings();
    standings.forEach(team => {
        const row = `
            <tr>
                <td>${team.position}</td>
                <td>${team.team}</td>
                <td>${team.wins}</td>
                <td>${team.losses}</td>
                <td>${team.winPct}</td>
            </tr>
        `;
        standingsBody.innerHTML += row;
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    populateTeams();
    populateSchedule();
    populateStandings();
    populateTeamFilter();
    
    // Add event listener for team filter
    const teamFilter = document.getElementById('teamFilter');
    teamFilter.addEventListener('change', function() {
        filterSchedule(this.value);
    });
});