import {pool} from "../database.js"
import {enc_use} from "../models/methodEncypt.js"
import jwt from "jsonwebtoken"

export const getPing=async (req, res) => {
    res.send('pong')


}

export const getParticipante=async (req, res) => {

  const nick=req.body.nick
    const clave=req.body.clave

    const [rows]=await pool.query(
        'SELECT ci_par,CONCAT(nombres," ", apellidos) as nombre_comp,email,nick,clave,numero FROM participante where nick =? and clave=?',
        [nick,clave]	
    )

    console.log(rows,'aaa')
    if(rows.length>0){
        //const x=await enc_use(rows[0].clave)
        //rows[0].clave=x
        res.send(rows[0])


    }else{
        return res.status(404).json({error:'Usuario no encontrado'})
    }

    console.log(rows)

    //res.send(req.body)

}


export const getNParticipantes=async (req, res) => {
    const [result]=await pool.query(
        'SELECT ci_par,nick,clave,fotografia FROM participante'
    )
    
    if(result.length>0){
        //console.log(result);
        res.json(result)
    }else{
        res.json({error:'Error 404'})
    }


}

export const getExpositor=async (req, res) => {
    const nick=req.body.nick
    const clave=req.body.clave

    const [rows]=await pool.query(
        'SELECT ci_exp,CONCAT(nombre," ", apellido) as nombre_comp,grado_academico,email,nick,clave,celular FROM expositor where nick =? and clave=?',
        [nick,clave]	
    )

    if(rows.length>0){
        //const x=await enc_use(rows[0].clave)
        //rows[0].clave=x
        res.send(rows[0])


    }else{
        return res.status(404).json({error:'Usuario no encontrado'})
    }

    console.log(rows)

    //res.send(req.body)
}

export const getControl=async (req, res) => {
    const nick=req.body.nick
    const clave=req.body.clave

    const [rows]=await pool.query(
        'SELECT ci_control,CONCAT(nombre," ", apellido) as nombre_comp,nick,clave FROM control where nick =? and clave=?',
        [nick,clave]	
    )

    console.log(rows,'aaa')
    if(rows.length>0){
        //const x=await enc_use(rows[0].clave)
        //rows[0].clave=x
        res.send(rows[0])


    }else{
        return res.status(404).json({error:'Usuario no encontrado'})
    }

    console.log(rows)

    //res.send(req.body)
}

export const getCasual=async (req, res) => {
    const nick=req.body.nick
    const clave=req.body.clave

    const [rows]=await pool.query(
        'SELECT ci_par,CONCAT(nombres," ", apellidos) as nombre_comp,email,nick,clave,numero FROM participante where nick =? and clave=?',
        [nick,clave]	
    )

    console.log(rows,'aaa')
    if(rows.length>0){
        //const x=await enc_use(rows[0].clave)
        //rows[0].clave=x
        res.send(rows[0])


    }else{
        return res.status(404).json({error:'Usuario no encontrado'})
    }

    console.log(rows)

    //res.send(req.body)
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