const PlayerModel = require("./db/models/player");

const dotaManager = {
    getMmr: async (ids, type) => {
        const res = [];
        for (let i = 0; i < ids.length; i++) {
            let player = await PlayerModel.findOne({ where: { steamId: ids[i] } });
            console.log("player", player)
            if (!player) {
                player = await PlayerModel.create({ ["rank" + type]: 1000, steamId: ids[i] })
            }
            res.push({ id: player.steamId, rank: player["rank" + type] })
        }
        return res;
    },
    setMmr: async (data, type) => {
        const res = [];
        for (let i = 0; i < data.length; i++) {
            const player = await PlayerModel.findOne({ where: { steamId: data[i].id } });
            const updated = await player.update({ ["rank" + type]: data.value });
            res.push({ id: updated.steamId, rank: updated["rank" + type] })
        }

        return res;
    }
};

module.exports = dotaManager;