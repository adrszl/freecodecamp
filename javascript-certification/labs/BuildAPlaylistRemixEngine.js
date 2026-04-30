const playlists = [
    [
        {
            trackId: "trk101",
            artist: "Velvet Comet",
            title: "Crimson Afterglow",
            votes: 5,
            bpm: 122
        },
        {
            trackId: "trk102",
            artist: "Neon Harbor",
            title: "Static Horizon",
            votes: 2,
            bpm: 108
        },
        {
            trackId: "trk103",
            artist: "Lunar Arcade",
            title: "Midnight Frequency",
            votes: 4,
            bpm: 128
        }
    ],
    [
        {
            trackId: "trk201",
            artist: "Solar Echo",
            title: "Glass Skyline",
            votes: 3,
            bpm: 115
        },
        {
            trackId: "trk202",
            artist: "Velvet Comet",
            title: "Satellite Hearts",
            votes: 6,
            bpm: 124
        }
    ]
];

const flattenPlaylists = (playlists) => {
    if (!Array.isArray(playlists)) return [];

    const result = [];

    playlists.forEach((playlist, playlistIndex) => {
        if (!Array.isArray(playlist)) return;

        playlist.forEach((track, trackIndex) => {
            result.push({
                ...track,
                source: [playlistIndex, trackIndex]
            });
        });
    });

    return result;
}

const scoreTracks = (tracks) => {
    return tracks.map(track => ({
        ...track,
        score: track.votes * 10 - Math.abs(track.bpm - 120)
    }));
}

const dedupeTracks = (tracks) => {
    const seen = new Set();

    return tracks.filter(track => {
        if (seen.has(track.trackId)) return false;
        seen.add(track.trackId);
        return true;
    });
}

const enforceArtistQuota = (tracks, maxPerArtist) => {
    const counts = {};
    const result = [];

    for (const track of tracks) {
        const artist = track.artist;

        if (!counts[artist]) {
            counts[artist] = 0;
        }

        if (counts[artist] < maxPerArtist) {
            result.push(track);
            counts[artist]++;
        }
    }

    return result;
}

const buildSchedule = (tracks) => {
    return tracks.map((track, index) => ({
        slot: index + 1,
        trackId: track.trackId
    }));
}

const remixPlaylist = (playlists, maxPerArtist) => {
    return buildSchedule(
        enforceArtistQuota(
            dedupeTracks(
                scoreTracks(
                    flattenPlaylists(playlists)
                )
            ),
            maxPerArtist
        )
    );
}