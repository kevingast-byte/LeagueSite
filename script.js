// Sample data for the sports league
let teams = [];
let schedule = [];

// Function to get current season from URL parameter
function getCurrentSeason() {
    const urlParams = new URLSearchParams(window.location.search);
    const season = urlParams.get('season');
    return season === '2027' ? 'data/schedule-2027.csv' : 'data/schedule.csv';
}

function getSeasonYear() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('season') === '2027' ? '2027' : '2026';
}

const sharedHeaderHTML = `
<header class="bg-primary text-white text-center py-4">
    <h1>Independent Church League</h1>
    <p>Philippians 2:14... "Do all things without grumbling or disputing that you may prove ourselves to
be blameless and innocent, children of God above reproach in the midst of a crooked and perverse
generation. Among whom you appear as lights in the world."</p>
</header>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">2026 Summer Season</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="LeagueSite/index.html">Welcome</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="LeagueSite/schedule.html">Schedule</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="LeagueSite/standings.html">Standings</a>
                </li>
            </ul>
            <div class="d-flex ms-auto">
                <select id="seasonSelector" class="form-select" style="width: auto;">
                    <option value="2026">2026 Season</option>
                    <option value="2027">2027 Season</option>
                </select>
            </div>
        </div>
    </div>
</nav>
`;

function loadSharedHeader() {
    const container = document.getElementById('shared-header');
    if (container) {
        container.innerHTML = sharedHeaderHTML;
        updateSharedHeader();
    }
    return Promise.resolve();
}

function updateSharedHeader() {
    const seasonYear = getSeasonYear();
    const brand = document.querySelector('#shared-header .navbar-brand');
    if (brand) {
        brand.textContent = `${seasonYear} Summer Season`;
    }

    const navLinks = document.querySelectorAll('#shared-header .navbar-nav .nav-link');
    navLinks.forEach(link => {
        const hrefValue = link.getAttribute('href');
        const linkUrl = new URL(hrefValue, window.location.origin);
        linkUrl.searchParams.set('season', seasonYear);
        link.setAttribute('href', linkUrl.pathname + linkUrl.search);
        link.classList.remove('active');
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('?')[0];
        if ((currentPage === '' || currentPage === 'index.html') && linkPath === 'index.html') {
            link.classList.add('active');
        } else if (linkPath === currentPage) {
            link.classList.add('active');
        }
    });

    const seasonSelector = document.getElementById('seasonSelector');
    if (seasonSelector) {
        seasonSelector.value = seasonYear;
        seasonSelector.addEventListener('change', function() {
            const selectedYear = this.value;
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('season', selectedYear);
            window.location.href = newUrl.toString();
        });
    }
}

// Function to load CSV data
function loadCSV(url) {
    return fetch(url)
        .then(response => response.text())
        .then(text => {
            const lines = text.split('\n').filter(line => line.trim());
            const headers = lines[0].split(',');
            const data = lines.slice(1).map(line => {
                const values = line.split(',');
                const obj = {};
                headers.forEach((header, i) => {
                    obj[header.trim()] = values[i] ? values[i].trim() : '';
                });
                return obj;
            });
            return data;
        });
}



// Function to calculate standings from schedule
function calculateStandings() {
    const teamStats = {};

    // Initialize stats for all teams
    teams.forEach(team => {
        teamStats[team.name] = { wins: 0, losses: 0, tied: 0, rf: 0, ra: 0 };
    });

    // Process completed games
    schedule.forEach(game => {
        if (game.status === 'Completed' && game.home_score !== 'TBD' && game.away_score !== 'TBD') {
            const homeScore = Number(game.home_score);
            const awayScore = Number(game.away_score);
            const homeStats = teamStats[game.home];
            const awayStats = teamStats[game.away];

            homeStats.rf += homeScore;
            homeStats.ra += awayScore;
            awayStats.rf += awayScore;
            awayStats.ra += homeScore;

            if (homeScore > awayScore) {
                homeStats.wins++;
                awayStats.losses++;
            } else if (homeScore < awayScore) {
                awayStats.wins++;
                homeStats.losses++;
            } else {
                homeStats.tied++;
                awayStats.tied++;
            }
        }
    });

    // Convert to array and calculate win %, RD, and GB
    const standingsArray = Object.keys(teamStats).map(teamName => {
        const stats = teamStats[teamName];
        const gamesPlayed = stats.wins + stats.losses + stats.tied;
        const winPct = gamesPlayed > 0 ? (stats.wins / gamesPlayed).toFixed(3) : '0.000';
        const rd = stats.rf - stats.ra;
        return {
            team: teamName,
            wins: stats.wins,
            losses: stats.losses,
            tied: stats.tied,
            rf: stats.rf,
            ra: stats.ra,
            rd: rd,
            winPct: winPct
        };
    });

    // Sort by win % descending, then by RD descending, then by RF descending
    standingsArray.sort((a, b) => {
        const winDiff = parseFloat(b.winPct) - parseFloat(a.winPct);
        if (winDiff !== 0) return winDiff;
        if (b.rd !== a.rd) return b.rd - a.rd;
        return b.rf - a.rf;
    });

    const leader = standingsArray[0] || null;
    standingsArray.forEach(team => {
        if (!leader || (leader.wins + leader.losses) === 0) {
            team.gb = '0.0';
        } else {
            team.gb = (((leader.wins - team.wins) + (team.losses - leader.losses)) / 2).toFixed(1);
        }
    });

    return standingsArray;
}

// Function to populate upcoming games
function populateUpcomingGames() {
    const upcomingGamesDiv = document.getElementById('upcoming-games');
    upcomingGamesDiv.innerHTML = '';

    const today = new Date();
    const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const uniqueDates = [...new Set(schedule.map(game => game.date))].sort();
    const nextDate = uniqueDates.find(date => date >= localDate) || uniqueDates[0];

    if (!nextDate) {
        upcomingGamesDiv.innerHTML = '<p>No upcoming games.</p>';
        return;
    }

    const nextGames = schedule
        .filter(game => game.date === nextDate)
        .sort((a, b) => {
            const timeToMinutes = timeStr => {
                const [time, period] = timeStr.toLowerCase().split(' ');
                const [hours, minutes] = time.split(':').map(Number);
                const normalizedHours = hours % 12 + (period === 'pm' ? 12 : 0);
                return normalizedHours * 60 + minutes;
            };
            return timeToMinutes(a.time) - timeToMinutes(b.time);
        });

    if (nextGames.length === 0) {
        upcomingGamesDiv.innerHTML = '<p>No upcoming games.</p>';
        return;
    }

    // Format the date for display
    const dateObj = new Date(nextDate);
    const formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    upcomingGamesDiv.innerHTML += `<h3 class="mt-3">${formattedDate}</h3>`;

    const gamesByVenue = nextGames.reduce((groups, game) => {
        if (!groups[game.venue]) groups[game.venue] = [];
        groups[game.venue].push(game);
        return groups;
    }, {});

    Object.keys(gamesByVenue)
        .sort((a, b) => a.localeCompare(b))
        .forEach(venue => {
            upcomingGamesDiv.innerHTML += `
                <div class="col-12 mt-3">
                    <h4>${venue}</h4>
                </div>
            `;

            gamesByVenue[venue].forEach(game => {
                const gameCard = `
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${game.home} vs ${game.away}</h5>
                                <p class="card-text"><strong>${game.time}</strong></p>
                            </div>
                        </div>
                    </div>
                `;
                upcomingGamesDiv.innerHTML += gameCard;
            });
        });
}

// Function to fetch local weather
function weatherCodeToDescription(code) {
    const map = {
        0: 'Clear sky',
        1: 'Mainly clear',
        2: 'Partly cloudy',
        3: 'Overcast',
        45: 'Fog',
        48: 'Depositing rime fog',
        51: 'Light drizzle',
        53: 'Moderate drizzle',
        55: 'Dense drizzle',
        56: 'Freezing drizzle',
        57: 'Dense freezing drizzle',
        61: 'Slight rain',
        63: 'Moderate rain',
        65: 'Heavy rain',
        66: 'Freezing rain',
        67: 'Heavy freezing rain',
        71: 'Slight snow',
        73: 'Moderate snow',
        75: 'Heavy snow',
        77: 'Snow grains',
        80: 'Rain showers',
        81: 'Heavy rain showers',
        82: 'Violent rain showers',
        85: 'Snow showers',
        86: 'Heavy snow showers',
        95: 'Thunderstorm',
        96: 'Thunderstorm with hail',
        99: 'Thunderstorm with heavy hail'
    };
    return map[code] || 'Unknown weather';
}

async function fetchWeatherData(latitude, longitude) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,weathercode,windspeed_10m&timezone=America%2FChicago`);
    if (!response.ok) throw new Error('Unable to load weather data.');
    const data = await response.json();
    return data;
}

function celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9) / 5 + 32);
}

function kmhToMph(kmh) {
    return Math.round(kmh * 0.621371);
}

function formatHourLabel(isoTime) {
    const hour = parseInt(isoTime.slice(11, 13), 10);
    const suffix = hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`;
    return suffix;
}

function getHourlyForecast(hourlyData) {
    const targetHours = [6, 7, 8, 9];
    const entries = hourlyData.time.map((time, index) => ({
        time,
        temperature: hourlyData.temperature_2m[index],
        weathercode: hourlyData.weathercode[index],
        windspeed: hourlyData.windspeed_10m[index]
    }));

    return entries.filter(entry => {
        const hour = parseInt(entry.time.slice(11, 13), 10);
        return targetHours.includes(hour);
    }).slice(0, targetHours.length);
}

async function fetchLocalWeather() {
    const weatherWidget = document.getElementById('weather-widget');
    weatherWidget.innerHTML = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div> Loading weather...';

    const coords = {
        latitude: 44.1700,
        longitude: -88.4706,
        city: 'Neenah',
        region: 'WI'
    };

    try {
        const weatherData = await fetchWeatherData(coords.latitude, coords.longitude);
        const weather = weatherData.current_weather;
        const forecast = getHourlyForecast(weatherData.hourly);
        const temperatureF = celsiusToFahrenheit(weather.temperature);
        const locationName = `${coords.city}, ${coords.region}`;
        const forecastHtml = forecast.map(entry => {
            const entryWindMph = kmhToMph(entry.windspeed);
            return `
                    <div class="forecast-hour text-center px-2 py-1 rounded bg-white bg-opacity-75">
                        <div class="fw-bold">${formatHourLabel(entry.time)}</div>
                        <div>${celsiusToFahrenheit(entry.temperature)}°F</div>
                        <div class="text-muted small">${weatherCodeToDescription(entry.weathercode)}</div>
                        <div class="text-muted small">Wind ${entryWindMph} mph</div>
                    </div>
                `;
        }).join('');

        weatherWidget.innerHTML = `
            <div class="alert alert-info weather-banner" role="alert">
                <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                    <div>
                        <h5 class="mb-1">${locationName}</h5>
                    </div>
                    <div class="weather-forecast d-flex flex-wrap gap-2 mt-3 mt-md-0">
                        ${forecastHtml}
                    </div>
                </div>
            </div>
        `;
    } catch (error) {
        weatherWidget.innerHTML = `<div class="alert alert-warning">Unable to load weather data. ${error.message}</div>`;
    }
}

// Function to populate team filter dropdown
function populateTeamFilter() {
    const teamFilter = document.getElementById('teamFilter');
    const sortedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));
    sortedTeams.forEach(team => {
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
        const homeTeam = row.cells[3].textContent;
        const awayTeam = row.cells[4].textContent;
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
                <td>${game.time}</td>
                <td>${game.venue}</td>
                <td>${game.home}</td>
                <td>${game.away}</td>
                <td>${game.home_score}</td>
                <td>${game.away_score}</td>
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
                <td>${team.team}</td>
                <td>${team.wins}</td>
                <td>${team.losses}</td>
                <td>${team.tied}</td>
                <td>${team.winPct}</td>
                <td>${team.gb}</td>
                <td>${team.rf}</td>
                <td>${team.ra}</td>
                <td>${team.rd}</td>
            </tr>
        `;
        standingsBody.innerHTML += row;
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', async function() {
    try {
        await loadSharedHeader();
        teams = await loadCSV('data/teams.csv');
        schedule = await loadCSV(getCurrentSeason());

        const scheduleBody = document.getElementById('schedule-body');
        const standingsBody = document.getElementById('standings-body');
        const upcomingGamesDiv = document.getElementById('upcoming-games');
        const weatherWidget = document.getElementById('weather-widget');

        if (scheduleBody) {
            populateSchedule();
            populateTeamFilter();
            const teamFilter = document.getElementById('teamFilter');
            if (teamFilter) {
                teamFilter.addEventListener('change', function() {
                    filterSchedule(this.value);
                });
            }
        }

        if (standingsBody) {
            populateStandings();
        }

        if (upcomingGamesDiv) {
            populateUpcomingGames();
        }

        if (weatherWidget) {
            fetchLocalWeather();
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
});