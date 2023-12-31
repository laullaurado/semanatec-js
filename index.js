// Importar bibliotecas
const express = require("express");
const app = express();
const personaRoutes = require('./routes/persona');
const proyectoRoutes = require('./routes/proyecto');

// Traer el objeto de conexión
const sequelize = require('./utils/database')

// Middleware
app.use(express.json());
app.use('/persona', personaRoutes);
app.use('/proyecto', proyectoRoutes);

// Mala práctica (DON'T)
app.get('/test', (request, response) => {
    console.log("Esto no se debe hacer, pero funciona");
    response.send('<h1>Servidor funcionando</h1>')
});

// Levantar el server y escuchar peticiones
sequelize.sync(/*{force:true}*/)
    .then(result => {
        app.listen(8080, () => {
            console.log("Servidor escuchando");
        })
    })
    .catch(error => console.log(error));
