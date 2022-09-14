const TypeOrm = require("typeorm");
const Wilder = require("../model/Wilder/entity");
const School = require("../model/School/entity");
const Skill = require("../model/Skill/entity");


const dataSource = new TypeOrm.DataSource({
    type:"sqlite",
    database:"wildersdb.sqlite",
    synchronize:true,
    entities:[Wilder, School, Skill],
    logging:["query", "error"]

})

let initialized = false;
async function getDatabase ( ) {
    if(!initialized) {
        await dataSource.initialize()
        console.log("Connexion a la DB réussie")
        initialized = true
    }
    return dataSource
}

async function getWilderRepository () {
    return (await getDatabase()).getRepository(Wilder)
}

async function getSchoolRepository () {
    return (await getDatabase()).getRepository(School)
}

async function getSkillRepository () {
    return (await getDatabase()).getRepository(Skill)
}


module.exports = {
    dataSource,
    getDatabase,
    getWilderRepository,
    getSchoolRepository,
    getSkillRepository
}