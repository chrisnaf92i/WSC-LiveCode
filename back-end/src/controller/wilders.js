const { getWilders, createWilders, deleteWilders, updateWilders, addSkillToWilder } = require("../model/Wilder/manager")

async function get(req, res) {
    const wilders = await getWilders();
    res.json(wilders)

}
async function post(req, res) {
    const { firstName, lastName } = req.body;

    if (!firstName || !lastName) {
        res.status(400).json({ error: "Le nom et le prénom sont obligatoire" })
    } else {
        const newWilder = await createWilders(firstName, lastName);
        res.status(201).json(newWilder)
    }
}

async function put(req, res) {
    const { id } = req.params;
    const { firstName, lastName } = req.body;

    if(!id || !firstName || !lastName){
        res.status(400).send("information manquante")
    }else {
        try {
            const updatedWilder = await updateWilders(id, firstName, lastName)
            res.status(200).json({ updatedWilder })
    
        }
        catch (error) {
            res.status(404).json({ error: error.message })
        }
    }


}

async function del(req, res) {
    const { id } = req.params

    try {
        await deleteWilders(id)
        res.send("suppression du wilder réussie")
    }
    catch (error) {
        res.status(404).json({ error: error.message })
    }
}

const addSkill = async (req, res) => {
    const { id : wilderId } = req.params;
    const { skillId } = req.body


    if(!skillId){
        res.status(400).json({error:"SkillId est obligatoire"})
    }else {
        try {
            const wilder = await addSkillToWilder(wilderId, skillId)
            res.json({wilder})
        }
        catch (error) {
            res.status(404).json({ error: error.message })
        }
    }
}


module.exports = {
    get,
    post,
    put,
    del,
    addSkill
}