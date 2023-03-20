import { Router } from "express";

import {getUsuario,getCasual,getNParticipantes,getPing,getNControl,getNExpositor} from "../controllers/user_authController.js";


const router = Router()


//Rutas para consultar tipo de usuario
router.post('/login/usuario/',getUsuario)

router.get('/casual',getCasual)
//Ruuta obtener todos los participantes, usuarios control y expositores

router.get('/login/participantes/',getNParticipantes)
router.get('/login/controles/',getNControl)
router.get('/login/expositores/',getNExpositor)




//Test
router.post('/ping',getPing)


export default router;