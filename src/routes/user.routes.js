import { Router } from "express";

import {getParticipante,getControl,getSuperU,getExpositor,getCasual,getNParticipantes,getPing,getNControl,getNExpositor} from "../controllers/user_authController.js";


const router = Router()


//Rutas para consultar tipo de usuario
router.post('/login/participante/',getParticipante)

router.post('/login/control/',getControl)

router.post('/login/expositor/',getExpositor)

router.post('/login/superU/',getSuperU)

router.get('/casual',getCasual)
//Ruuta obtener todos los participantes, usuarios control y expositores

router.get('/login/participantes/',getNParticipantes)
router.get('/login/participantes/',getNControl)
router.get('/login/participantes/',getNExpositor)




//Test
router.post('/ping',getPing)


export default router;