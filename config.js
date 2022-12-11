module.exports = {
    app: {
        token: 'OTkzNTQ1ODc4NDAzMDM5NDEy.Geqnbq.Z4VPr4A7lmfcomGQubclgRrGRAVxnFMp5o1Sak',
        playing: 'Music ❤️',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
