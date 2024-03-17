const express = require("express");
const app = express();
const sequelize = require("./src/db");
const { port } = require("./src/config");
const { getMmr, setMmr } = require("./src/dataManager");

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log(`DB connection success!`);
    } catch (e) {
        console.log(`DB connection error: ${e}`);
    }

    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())

    app.post("/getMmr", async (req, res) => {
        const ids = req.body.ids || [];
        const type = req.body.type;
        const result = await getMmr(ids, type);
        console.log("RESULT: ", result)
        res.send({ data: result })
    })

    app.post("/setMmr", async (req, res) => {
        const data = req.body.data || [];
        const type = req.body.type;
        const result = await setMmr(data, type);
        console.log("RESULT: ", result)
        res.send({ data: result })
    })

    app.listen(port)
    console.log("App listening in port: ", port)
}

start();