const sequelize = require("../");
const { DataTypes } = require("sequelize");

const Player = sequelize.define("player", {
    id: { type: DataTypes.INTEGER, primaryKey: true, unique: true, autoIncrement: true },
    steamId: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING },
    role: { type: DataTypes.INTEGER },
    rank1: { type: DataTypes.INTEGER },
    rank2: { type: DataTypes.INTEGER },
    rank3: { type: DataTypes.INTEGER },
    rank4: { type: DataTypes.INTEGER },
    subscriptionEndDate: { type: DataTypes.STRING },
});

module.exports = Player;