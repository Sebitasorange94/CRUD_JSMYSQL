import {Sequelize} from "sequelize";

// Los parametros que vamos a pasar son: Nombre de la base de datos, nombre de usuario, contraseña y el localhost
const conectarBD = new Sequelize('database_citas','root','',{
    host:'localhost',
    dialect: "mysql",
    port:3307
});

export default conectarBD;
// El usuario por default es root
// Debemos identificar los datos que vamos a utilizar 
// id
// nombre_medico
// especialidad
// FileSystemDirectoryHandleduracion
// createdAt
// updatedAt