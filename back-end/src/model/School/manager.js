const { getSchoolRepository, getWilderRepository } = require("../../database/utils");


async function initializeSchool() {
    const schoolRepository = await getSchoolRepository();
    const wilderRepository = await getWilderRepository();

    await wilderRepository.clear()
    await schoolRepository.clear();
    
    await schoolRepository.save({schoolName:"lyon"});
    await schoolRepository.save({schoolName:"soissons"});
    await schoolRepository.save({schoolName:"aubergenville"});
    await schoolRepository.save({schoolName:"mantes la jolie"});
}

async function getSchoolByName(name) {
    const schoolRepository = await getSchoolRepository();
    return schoolRepository.findOneBy({schoolName:name})
}

module.exports = {
    initializeSchool,
    getSchoolByName
}