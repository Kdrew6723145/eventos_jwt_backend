import {getEvento} from "../controllers/evento_authController.js";	
import { Router } from "express";



const router = Router()

//Ruta de los eventos
router.post('/evento/',getEvento)


export default router