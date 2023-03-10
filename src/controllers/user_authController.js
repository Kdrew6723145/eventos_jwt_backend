import {pool} from "../database.js"
import {enc_use} from "../models/methodEncypt.js"
import jwt from "jsonwebtoken"

export const getParticipante=async (req, res) => {

    const nick=req.params.nick

    const [rows]=await pool.query(
        'SELECT ci_par,nick,clave,fotografia FROM participante where nick =?',
        [req.params.nick]	
    )
    if(rows.length>0){
        const x=await enc_use(rows[0].clave)
        rows[0].clave=x

        res.send({
            ci: rows[0].ci_par,
            nick:rows[0].nick,
            clave: rows[0].clave,
            fotografia: rows[0].fotografia
        })


    }else{
        return res.status(404).json({error:'Usuario no encontrado'})
    }

    console.log(rows)

}


export const getNParticipantes=async (req, res) => {
    const [result]=await pool.query(
        'SELECT ci_par,nick,clave,fotografia FROM participante'
    )
    
    if(result.length>0){
        console.log(result);
        res.json(result)
    }else{
        console.log('bbb')
    }


}

export const getExpositor=async (req, res) => {
    const [result]=await pool.query(
        "SELECT ci_par,nick,clave FROM expositor "
    )

    console.log(result)

    res.json({
        ci_par: result.ci_par,
        nick: result.nick,
        clave: result.clave,
    })
}

export const getControl=async (req, res) => {
    const [result]=await pool.query(
        "SELECT ci_par,nick,clave,fotografia FROM participante "
    )

    console.log(result)

    res.json({
        ci_par: result.ci_par,
        nick: result.nick,
        clave: result.clave,
        fotografia: result.fotografia
    })
}

export const getCasual=async (req, res) => {
    const [result]=await pool.query(
        "SELECT ci_par,nick,clave,fotografia FROM participante "
    )

    console.log(result)

    res.json({
        ci_par: result.ci_par,
        nick: result.nick,
        clave: result.clave,
        fotografia: result.fotografia
    })
}

export const getSuperU=async (req, res) => {
    const [result]=await pool.query(
        "SELECT ci_par,nick,clave,fotografia FROM participante "
    )

    console.log(result)

    res.json({
        ci_par: result.ci_par,
        nick: result.nick,
        clave: result.clave,
        fotografia: result.fotografia
    })
}