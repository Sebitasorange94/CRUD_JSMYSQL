// Importar el modelo 
import Citas from '../models/Citas.js';

// Crear metodos o funciones CRUD

// Funciòn mostrar todas las citas 
export const getAllCitas = async (req,res)=>{
    try{
        const citas = await Citas.findAll();
        res.json(citas);
    }catch(error){
        res.json({msg: error.message})
    }
}


//Función o metodo mostrar una cita


export const getCita = async(req,res) =>{

    try {
        const cita = await Citas.findAll({
            where:{id:req.params.id}
        });
        res.json(cita[0]);
    } catch (error) {
        res.json({msg: error.message})
    }
}


//Función agregar cita
export const agregarCitas = async(req, res) =>{
    try {
        await Citas.create(req.body);
        res.json({msg: "Cita creada exitosamente"})
    } catch (error) {
        
        res.json({mesg: error.message})
    }
}

//Función modificar cita
export const modificarCita = async(req,res)=>{
    try {
        await Citas.update(req.body,{
            where:{id: req.params.id}
        })
        res.json({msg:"Se modificó una cita"})
    } catch (error) {
        res.json({msg:error.message})
        
    }
}

//Función eliminar cita
export const eliminarCita = async(req,res)=>{
    try {
        await Citas.destroy({
            where:{id: req.params.id}
        })
        res.json({msg:"Se eliminó una cita"})
    } catch (error) {
        res.json({msg:error.message})
    }
}