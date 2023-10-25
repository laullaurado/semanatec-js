// Importar bibliotecas
const express = require("express");
const app = express();

// Traer el objeto de conexión
const sequelize = require('./utils/database')

// Middleware
app.use(express.json());

// Mala práctica
app.get('/test', (request, response) => {
    console.log("Esto no se debe hacer, pero funciona");
    response.send('<h1>Servidor funcionando</h1>')
});

// Levantar el server y escuchar peticiones
sequelize.sync()
    .then(result => {
        app.listen(8080, () => {
            console.log("Servidor escuchando");
        })
    })
    .catch(error => console.log(error));
