import { Router } from "express";

import {getParticipante,getControl,getSuperU,getExpositor,getCasual,getNParticipantes,getPing} from "../controllers/user_authController.js";

const router = Router()


//Rutas para consultar tipo de usuario
router.post('/login/participante/',getParticipante)

router.post('/login/control/',getControl)

router.post('/login/expositor/',getExpositor)

router.post('/login/superU/',getSuperU)

router.get('/casual',getCasual)
//

router.get('/login/participantes',getNParticipantes)


//Test
router.get('/ping',getPing)


export default router;