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
    populateSchedule();
    populateStandings();
    populateTeamFilter();
    
    // Add event listener for team filter
    const teamFilter = document.getElementById('teamFilter');
    teamFilter.addEventListener('change', function() {
        filterSchedule(this.value);
    });
});