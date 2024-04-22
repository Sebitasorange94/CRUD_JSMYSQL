// Importamos express
import express from 'express';
// Importmaos nuestro controlador
import {getAllCitas, getCita, agregarCitas, modificarCita,eliminarCita} from'../controllers/CitasController.js';

const router = express.Router();
// Rutas de los mètodos CRID
router.get('/', getAllCitas);
router.get('/:id', getCita);
router.post('/', agregarCitas);
router.put('/:id', modificarCita);
router.delete('/:id', eliminarCita);


export default router;
