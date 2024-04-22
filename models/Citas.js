// Importamos la conexion con la BD

import conectarBD from "../configDB/db.js";

// Importmaos Sequelize
import {DataTypes} from "sequelize";

// El citas en comillas es el nombre de la base de datos
// Luego ponemos los atributos
const Citas = conectarBD.define('citas',{
    nombre_medico:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    especialidad:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    duracion:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
})

export default Citas;