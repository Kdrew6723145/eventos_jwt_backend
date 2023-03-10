import { Router } from "express";

import {getParticipante,getControl,getSuperU,getExpositor,getCasual,getNParticipantes} from "../controllers/user_authController.js";

const router = Router()

router.get('/login/participante/:nick',getParticipante)

router.get('/login/participantes',getNParticipantes)

router.get('/login/control',getControl)

router.get('/login/superU',getSuperU)

router.get('/login/expositor',getExpositor)

router.get('/casual',getCasual)


export default router;