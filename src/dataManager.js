const PlayerModel = require("./db/models/player");

const dotaManager = {
    getMmr: async (ids, type) => {
        const res = [];
        for (let i = 0; i < ids.length; i++) {
            let player = await PlayerModel.findOne({ where: { steamId: String(ids[i]) } });
            console.log(!player)
            if (!player) {
                player = await PlayerModel.create({ ["rank" + type]: 1000, steamId: String(ids[i]) });
            }
            console.log("player: ", player);
            res.push({ id: player.steamId, rank: player["rank" + type] });
        }
        console.log("getMmr: ", res);
        return res;
    },
    setMmr: async (data, type) => {
        const res = [];
        for (let i = 0; i < data.length; i++) {
            const player = await PlayerModel.findOne({ where: { steamId: String(data[i].id) } });
            const updated = await player.update({ ["rank" + type]: data.value });
            console.log("updated: ", updated);
            res.push({ id: updated.steamId, rank: updated["rank" + type] });
        }
        console.log("setMmr: ", res);
        return res;
    }
};

module.exports = dotaManager;