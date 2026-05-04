// Sample data for the sports league
const teams = [
    { name: 'Christ the Rock', logo: 'https://via.placeholder.com/100?text=Christ+the+Rock', description: 'A strong team with great players.' },
    { name: 'Sounds of Thunder', logo: 'https://via.placeholder.com/100?text=Sounds+of+Thunder', description: 'Known for their defensive strategy.' },
    { name: 'ATC', logo: 'https://via.placeholder.com/100?text=ATC', description: 'Rising stars in the league.' },
    { name: 'Mason Street', logo: 'https://via.placeholder.com/100?text=Mason+Street', description: 'Champions of the previous season.' },
    { name: 'Community Bible #2', logo: 'https://via.placeholder.com/100?text=Community+Bible+%232', description: 'A dedicated team.' },
    { name: 'XCEL #2', logo: 'https://via.placeholder.com/100?text=XCEL+%232', description: 'Fast and furious.' },
    { name: 'Bennett and the Jets', logo: 'https://via.placeholder.com/100?text=Bennett+and+the+Jets', description: 'Dynamic players.' },
    { name: 'MILLCITY', logo: 'https://via.placeholder.com/100?text=MILLCITY', description: 'City champions.' },
    { name: 'Community Bible', logo: 'https://via.placeholder.com/100?text=Community+Bible', description: 'Bible-based team.' },
    { name: 'Calvary 3', logo: 'https://via.placeholder.com/100?text=Calvary+3', description: 'Third Calvary team.' },
    { name: 'VALLEY HARVEST', logo: 'https://via.placeholder.com/100?text=VALLEY+HARVEST', description: 'Harvesting wins.' },
    { name: 'FREEDOM FELLOWSHIP', logo: 'https://via.placeholder.com/100?text=FREEDOM+FELLOWSHIP', description: 'Fellowship of freedom.' },
    { name: 'Calvary Bible #1', logo: 'https://via.placeholder.com/100?text=Calvary+Bible+%231', description: 'First Calvary Bible.' },
    { name: 'River Valley', logo: 'https://via.placeholder.com/100?text=River+Valley', description: 'Valley vibes.' },
    { name: 'Shepherd of the Hills', logo: 'https://via.placeholder.com/100?text=Shepherd+of+the+Hills', description: 'Hill shepherds.' },
    { name: 'Appleton Gospel Church', logo: 'https://via.placeholder.com/100?text=Appleton+Gospel+Church', description: 'Gospel church team.' },
    { name: 'Brothers In Christ', logo: 'https://via.placeholder.com/100?text=Brothers+In+Christ', description: 'Brothers united.' }
];

const schedule = [
    { date: '2026-05-04', time: '6:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Christ the Rock', away: 'Appleton Gospel Church', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-04', time: '7:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Sounds of Thunder', away: 'Appleton Gospel Church', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-04', time: '8:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'ATC', away: 'Brothers In Christ', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-04', time: '9:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Mason Street', away: 'Brothers In Christ', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-04', time: '6:00 pm', venue: 'Memorial Park South - MPS#2', home: 'Community Bible #2', away: 'Calvary Bible #1', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-04', time: '7:00 pm', venue: 'Memorial Park South - MPS#2', home: 'XCEL #2', away: 'Calvary Bible #1', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-04', time: '6:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Bennett and the Jets', away: 'River Valley', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-04', time: '7:00 pm', venue: 'Memorial Park East - MPE#1', home: 'MILLCITY', away: 'River Valley', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-04', time: '6:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Community Bible', away: 'Shepherd of the Hills', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-04', time: '7:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Community Bible', away: 'XCEL #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-04', time: '8:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Calvary 3', away: 'VALLEY HARVEST', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-04', time: '9:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Calvary 3', away: 'FREEDOM FELLOWSHIP', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-11', time: '6:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'VALLEY HARVEST', away: 'Bennett and the Jets', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-11', time: '7:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'VALLEY HARVEST', away: 'FREEDOM FELLOWSHIP', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-11', time: '8:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Christ the Rock', away: 'FREEDOM FELLOWSHIP', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-11', time: '9:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Christ the Rock', away: 'Calvary 3', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-11', time: '6:00 pm', venue: 'Memorial Park South - MPS#2', home: 'Calvary Bible #1', away: 'ATC', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-11', time: '7:00 pm', venue: 'Memorial Park South - MPS#2', home: 'Calvary Bible #1', away: 'MILLCITY', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-11', time: '6:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Community Bible', away: 'River Valley', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-11', time: '7:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Community Bible', away: 'Sounds of Thunder', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-11', time: '6:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Appleton Gospel Church', away: 'Mason Street', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-11', time: '7:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Appleton Gospel Church', away: 'XCEL #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-11', time: '8:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Community Bible #2', away: 'XCEL #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-11', time: '9:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Community Bible #2', away: 'Shepherd of the Hills', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-18', time: '6:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Christ the Rock', away: 'VALLEY HARVEST', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-18', time: '7:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'XCEL #2', away: 'FREEDOM FELLOWSHIP', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-18', time: '8:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Bennett and the Jets', away: 'FREEDOM FELLOWSHIP', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-18', time: '9:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Bennett and the Jets', away: 'Brothers In Christ', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-18', time: '6:00 pm', venue: 'Memorial Park South - MPS#2', home: 'Mason Street', away: 'Shepherd of the Hills', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-18', time: '7:00 pm', venue: 'Memorial Park South - MPS#2', home: 'Mason Street', away: 'Community Bible', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-18', time: '6:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Calvary 3', away: 'Calvary Bible #1', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-18', time: '7:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Calvary 3', away: 'ATC', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-18', time: '6:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Community Bible #2', away: 'Appleton Gospel Church', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-18', time: '7:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Community Bible #2', away: 'MILLCITY', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-18', time: '8:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Sounds of Thunder', away: 'MILLCITY', score: 'TBD', status: 'Upcoming' },
    { date: '2026-05-18', time: '9:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Sounds of Thunder', away: 'River Valley', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-01', time: '6:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'FREEDOM FELLOWSHIP', away: 'Calvary Bible #1', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-01', time: '7:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Calvary 3', away: 'Bennett and the Jets', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-01', time: '8:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Christ the Rock', away: 'Bennett and the Jets', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-01', time: '9:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Christ the Rock', away: 'XCEL #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-01', time: '6:00 pm', venue: 'Memorial Park South - MPS#2', home: 'Mason Street', away: 'MILLCITY', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-01', time: '7:00 pm', venue: 'Memorial Park South - MPS#2', home: 'Mason Street', away: 'VALLEY HARVEST', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-01', time: '6:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Shepherd of the Hills', away: 'Appleton Gospel Church', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-01', time: '7:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Shepherd of the Hills', away: 'Sounds of Thunder', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-01', time: '6:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Community Bible #2', away: 'Brothers In Christ', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-01', time: '7:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'River Valley', away: 'Brothers In Christ', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-01', time: '8:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'River Valley', away: 'ATC', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-01', time: '9:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Community Bible', away: 'ATC', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-08', time: '6:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'XCEL #2', away: 'MILLCITY', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-08', time: '7:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'XCEL #2', away: 'Shepherd of the Hills', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-08', time: '8:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'River Valley', away: 'Shepherd of the Hills', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-08', time: '9:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'River Valley', away: 'Appleton Gospel Church', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-08', time: '6:00 pm', venue: 'Memorial Park South - MPS#2', home: 'Bennett and the Jets', away: 'Sounds of Thunder', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-08', time: '7:00 pm', venue: 'Memorial Park South - MPS#2', home: 'Brothers In Christ', away: 'VALLEY HARVEST', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-08', time: '6:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Community Bible', away: 'Community Bible #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-08', time: '7:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Community Bible', away: 'Calvary 3', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-08', time: '6:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Christ the Rock', away: 'Calvary Bible #1', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-08', time: '7:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Christ the Rock', away: 'ATC', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-08', time: '8:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'FREEDOM FELLOWSHIP', away: 'ATC', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-08', time: '9:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'FREEDOM FELLOWSHIP', away: 'Mason Street', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-15', time: '6:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'FREEDOM FELLOWSHIP', away: 'River Valley', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-15', time: '7:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'FREEDOM FELLOWSHIP', away: 'Community Bible', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-15', time: '8:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Christ the Rock', away: 'Community Bible', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-15', time: '9:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'VALLEY HARVEST', away: 'Calvary Bible #1', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-15', time: '6:00 pm', venue: 'Memorial Park South - MPS#2', home: 'Calvary 3', away: 'Mason Street', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-15', time: '7:00 pm', venue: 'Memorial Park South - MPS#2', home: 'Calvary 3', away: 'Shepherd of the Hills', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-15', time: '6:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Brothers In Christ', away: 'XCEL #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-15', time: '7:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Brothers In Christ', away: 'Appleton Gospel Church', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-15', time: '6:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'ATC', away: 'MILLCITY', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-15', time: '7:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Bennett and the Jets', away: 'MILLCITY', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-15', time: '8:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Bennett and the Jets', away: 'Community Bible #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-15', time: '9:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Sounds of Thunder', away: 'Community Bible #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-22', time: '6:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Christ the Rock', away: 'River Valley', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-22', time: '7:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Christ the Rock', away: 'Brothers In Christ', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-22', time: '8:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Shepherd of the Hills', away: 'Brothers In Christ', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-22', time: '9:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Shepherd of the Hills', away: 'FREEDOM FELLOWSHIP', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-22', time: '6:00 pm', venue: 'Memorial Park South - MPS#2', home: 'VALLEY HARVEST', away: 'Appleton Gospel Church', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-22', time: '7:00 pm', venue: 'Memorial Park South - MPS#2', home: 'VALLEY HARVEST', away: 'MILLCITY', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-22', time: '6:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Calvary 3', away: 'Community Bible #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-22', time: '7:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Bennett and the Jets', away: 'ATC', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-22', time: '6:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'XCEL #2', away: 'Community Bible', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-22', time: '7:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'XCEL #2', away: 'Sounds of Thunder', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-22', time: '8:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Calvary Bible #1', away: 'Sounds of Thunder', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-22', time: '9:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Calvary Bible #1', away: 'Mason Street', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-29', time: '6:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Mason Street', away: 'Bennett and the Jets', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-29', time: '7:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Mason Street', away: 'Community Bible #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-29', time: '8:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'ATC', away: 'Community Bible #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-29', time: '9:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'ATC', away: 'Sounds of Thunder', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-29', time: '6:00 pm', venue: 'Memorial Park South - MPS#2', home: 'MILLCITY', away: 'Calvary 3', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-29', time: '7:00 pm', venue: 'Memorial Park South - MPS#2', home: 'MILLCITY', away: 'Community Bible', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-29', time: '6:00 pm', venue: 'Memorial Park East - MPE#1', home: 'VALLEY HARVEST', away: 'River Valley', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-29', time: '7:00 pm', venue: 'Memorial Park East - MPE#1', home: 'VALLEY HARVEST', away: 'XCEL #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-29', time: '6:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Appleton Gospel Church', away: 'FREEDOM FELLOWSHIP', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-29', time: '7:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Appleton Gospel Church', away: 'Calvary Bible #1', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-29', time: '8:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Shepherd of the Hills', away: 'Calvary Bible #1', score: 'TBD', status: 'Upcoming' },
    { date: '2026-06-29', time: '9:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Shepherd of the Hills', away: 'Christ the Rock', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-06', time: '6:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'VALLEY HARVEST', away: 'Community Bible #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-06', time: '7:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Brothers In Christ', away: 'Calvary Bible #1', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-06', time: '8:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Brothers In Christ', away: 'Calvary 3', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-06', time: '9:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'River Valley', away: 'Calvary 3', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-06', time: '6:00 pm', venue: 'Memorial Park South - MPS#2', home: 'Sounds of Thunder', away: 'FREEDOM FELLOWSHIP', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-06', time: '7:00 pm', venue: 'Memorial Park South - MPS#2', home: 'Sounds of Thunder', away: 'Christ the Rock', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-06', time: '6:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Mason Street', away: 'ATC', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-06', time: '7:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Mason Street', away: 'XCEL #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-06', time: '6:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'MILLCITY', away: 'Shepherd of the Hills', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-06', time: '7:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'MILLCITY', away: 'Appleton Gospel Church', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-06', time: '8:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Bennett and the Jets', away: 'Appleton Gospel Church', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-06', time: '9:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Bennett and the Jets', away: 'Community Bible', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-13', time: '6:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Calvary 3', away: 'Sounds of Thunder', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-13', time: '7:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Brothers In Christ', away: 'Sounds of Thunder', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-13', time: '8:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'Brothers In Christ', away: 'Community Bible', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-13', time: '9:00 pm', venue: 'Memorial Park Northwest - MPN#3', home: 'VALLEY HARVEST', away: 'Shepherd of the Hills', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-13', time: '6:00 pm', venue: 'Memorial Park South - MPS#2', home: 'River Valley', away: 'Calvary Bible #1', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-13', time: '7:00 pm', venue: 'Memorial Park South - MPS#2', home: 'River Valley', away: 'Mason Street', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-13', time: '6:00 pm', venue: 'Memorial Park East - MPE#1', home: 'MILLCITY', away: 'Christ the Rock', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-13', time: '7:00 pm', venue: 'Memorial Park East - MPE#1', home: 'Community Bible #2', away: 'FREEDOM FELLOWSHIP', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-13', time: '6:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'Bennett and the Jets', away: 'XCEL #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-13', time: '7:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'ATC', away: 'XCEL #2', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-13', time: '8:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'ATC', away: 'Appleton Gospel Church', score: 'TBD', status: 'Upcoming' },
    { date: '2026-07-13', time: '9:00 pm', venue: 'Jefferson Park Menasha - JPM#1', home: 'FREEDOM FELLOWSHIP', away: 'Mason Street', score: 'TBD', status: 'Upcoming' }
];

// Function to calculate standings from schedule
function calculateStandings() {
    const teamStats = {};

    // Initialize stats for all teams
    teams.forEach(team => {
        teamStats[team.name] = { wins: 0, losses: 0, tied: 0, rf: 0, ra: 0 };
    });

    // Process completed games
    schedule.forEach(game => {
        if (game.status === 'Completed' && game.score !== 'TBD') {
            const [homeScore, awayScore] = game.score.split('-').map(Number);
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
document.addEventListener('DOMContentLoaded', function() {
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
});