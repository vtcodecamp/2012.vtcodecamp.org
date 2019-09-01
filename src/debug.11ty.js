"use strict";

module.exports = function(data) {
    var stringify = JSON.stringify({
        levels: data.levels,
        schedule: data.schedule,
        sessions: data.sessions,
        sessionsBySpace: data.sessionsBySpace,
        spaces: data.spaces,
        speakers: data.speakers,
        timePeriods: data.timePeriods,
        tracks: data.tracks,
    }, null, 2)
    return `<pre>${stringify}</pre>`;
};