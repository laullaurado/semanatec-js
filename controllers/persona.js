const Seq = require('sequelize');
const sequelize = require('../utils/database');
const Persona = sequelize.models.persona;

exports.postAgregarPersona = (req, res) => {
    console.log(req.body);
    Persona.create(req.body)
        .then(result => {
            console.log("Registro exitoso");
            res.send("Registro exitoso");
        })
        .catch(error => {
            console.log(error);
            res.send("Hubo un problema");
        })
}

exports.getConsultarPersonas = async (req, res) => {
    try {
        const result = await Persona.findAll();
        res.send(result);
    } catch(error) {
        console.log(error);
        res.send("Hubo un problema");
    }
}
