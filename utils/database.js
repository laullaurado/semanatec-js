const Sequelize = require('sequelize');
const {applyRelations} = require('./relations')

const sequelize = new Sequelize('semanatec', 'admin', 'contramysql', {
    dialect: 'mysql',
    host: 'database-1.c73advod0vt4.us-east-1.rds.amazonaws.com',
    define: {
        // Evitar que nos pone createdAt y updatedAt
        timestamps: false,
        // Pluralizar
        freezeTableName: true
    }
});

// Cargar modelos
const modelDefiners = [
    require('../models/persona'),
    require('../models/proyecto'),
    require('../models/proyectoPersona')
]

// Vincular el modelo con el objeto de conexión
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

// Construir relaciones
applyRelations(sequelize);

// Exportar en elemento de conexión
module.exports = sequelize;
