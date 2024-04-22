import express from'express'
import cors from 'cors'
// import {Sequelize} from 'sequelize';  
// Importamos la conexion a la base datos
import conectarBD from './configDB/db.js ';
// Importamos nuestras rutas
import citasRoutes from './routes/Routes_Citas.js'


const app = express();
app.use(express.json());
app.use(cors());
app.use('/citas', citasRoutes);

// Verificamos la conexión con la base de datos
try{
    await conectarBD.authenticate();
    console.log('Conexión a la base de datos con éxito. ');
    }catch(error){
        console.error('Tenemos un error al conectar la base de datos: ', error);
    }

app.get('/', (req,res) =>{
    res.send('HOLA MUNDO')
})

app.listen(5000, ()=>{
    console.log("El servidor está corriendo http://localhost:5000/")
})