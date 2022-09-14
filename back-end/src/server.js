const express = require("express");
const wildersController = require("./controller/wilders");
const { getDatabase } = require("./database/utils");
const { initializeWilders } = require("./model/Wilder/manager");
const { initializeSchool } = require("./model/School/manager");
const { initializeSkills } = require("./model/Skill/manager");



const app = express();

app.use(express.json())

const PORT = process.env.PORT || 8000;

app.get("/", (_, res) => {
    res.send("Bienvenu sur l'api de christopher nafrere pour live code wcs");
})

const wilderPath = "/wilders"

app.get(wilderPath, wildersController.get);
app.post(wilderPath, wildersController.post);
app.put(`${wilderPath}/:id`, wildersController.put);
app.delete(`${wilderPath}/:id`, wildersController.del);

app.post(`${wilderPath}/:id/skills`, wildersController.addSkill);

async function  start () {
    await getDatabase()
    await initializeSchool();
    await initializeSkills();
    await initializeWilders();
    app.listen(PORT, console.log(`Lancement du serveur sur le port ${PORT} 😎`));
}

start();
