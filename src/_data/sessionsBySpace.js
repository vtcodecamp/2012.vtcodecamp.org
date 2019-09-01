
module.exports = getSessionsBySpace();

function getSessionsBySpace()
{
    let sessionsBySpace = {};
    let sessions = require('./sessions.json');
    let spaces = require('./spaces.json');
    

    for (let session of Object.values(sessions)) {
        if (!session.space || session.space == 'main-hall') {
            continue;
        }
        let spaceId = session.space;
        if (!sessionsBySpace[spaceId]) {
            sessionsBySpace[spaceId] = {};
        }
        let timeCode = parseInt(session.timePeriod);
        sessionsBySpace[spaceId][timeCode] = session;
    }
    let sessionsBySpaceSorted = {};
    let spacesSorted = Object.values(spaces).sort((a, b) => a.order - b.order)
    spacesSorted.forEach(function(space) {
        sessionsBySpaceSorted[space.slug] = sessionsBySpace[space.slug];
    });    
    return sessionsBySpaceSorted;
}
