const Sequelize = require('sequelize');

const ProyectoPersona = (sequelize) => {
    sequelize.define('proyectopersona', {
        estado: Sequelize.STRING
    });
};

module.exports = ProyectoPersona;