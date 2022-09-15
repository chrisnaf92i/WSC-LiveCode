const { getWilderRepository, getSkillRepository } = require("../../database/utils");
const { getSchoolByName } = require("../School/manager");


async function initializeWilders() {
    const wilderRepository = await getWilderRepository();

    const soissonsSchool = await getSchoolByName("soissons");

    
    await wilderRepository.save({firstName:"Christopher", lastName:"Nafrere", school:soissonsSchool});
    await wilderRepository.save({firstName:"Jack", lastName:"Nafrere", school:soissonsSchool});
    await wilderRepository.save({firstName:"Manon", lastName:"Nafrere", school:soissonsSchool});
    await wilderRepository.save({firstName:"Lena", lastName:"Nafrere", school:soissonsSchool});
}


async function getWilders() {
    const wilderRepository = await getWilderRepository();
    return wilderRepository.find()
}

async function createWilders(firstName, lastName) {
    const wilderRepository = await getWilderRepository();
    const newWilder = wilderRepository.create({firstName, lastName});
    await wilderRepository.save(newWilder);
    return newWilder;
}

async function updateWilders(id, firstName, lastName) {
    const wilderRepositary = await getWilderRepository();
    const existingWilder = await wilderRepositary.findOneBy({id})
    if(!existingWilder) {
        throw Error ("Utilisateur innexistant")
    }
    return wilderRepositary.save({
        id,
        firstName,
        lastName
    })
}

async function deleteWilders(id) {
    const wilderRepository = await getWilderRepository();
    const existingWilder = await wilderRepository.findOneBy({id})
    if(!existingWilder) {
        throw Error ("Utilisateur innexistant")
    }
    return wilderRepository.remove(existingWilder)
     
}
const addSkillToWilder = async (wilderId, skillId) => {
    const wilderRepository = await getWilderRepository();
    const skillRepository = await getSkillRepository();

    const wilder = await wilderRepository.findOneBy({id:wilderId});

    if(!wilder)
    {
        throw Error ("Wilder non trouver")
    }
    const skill = await skillRepository.findOneBy({id:skillId})
    if(!skill) {
        throw Error ("Skill non trouver")
    }
    console.log(wilder)
    wilder.skills = [...wilder.skills, skill];
    return wilderRepository.save(wilder)
}


module.exports = {
    initializeWilders,
    getWilders,
    createWilders,
    updateWilders,
    deleteWilders,
    addSkillToWilder
}