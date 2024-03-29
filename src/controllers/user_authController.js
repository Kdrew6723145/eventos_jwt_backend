import { pool } from "../database.js";
import { enc_use } from "../models/methodEncypt.js";
import jwt from "jsonwebtoken";

//Esto es un post aleatorio y es para testear que las peticiones funcionan
export const getPing = async (req, res) => {
  res.send("pong");
};

//Consulta un participante con nick y clave
export const getUsuario = async (req, res) => {
  var rol = "";
  const nick = req.body.nick;
  const clave = req.body.clave;

  const [c_partic] = await pool.query(
    'SELECT ci_par,CONCAT(nombres," ", apellidos) as nombre_comp,email,nick,clave,numero,CONCAT("participante") as rol FROM participante where nick =? and clave=?',
    [nick, clave]
  );

  const [c_expo] = await pool.query(
    'SELECT ci_exp,CONCAT(nombre," ", apellido) as nombre_comp,grado_academico,email,nick,clave,celular,CONCAT("expositor") as rol FROM expositor where nick =? and clave=?',
    [nick, clave]
  );

  const [c_control] = await pool.query(
    'SELECT ci_control,CONCAT(nombre," ", apellido) as nombre_comp,nick,clave, CONCAT("control") as rol FROM control where nick =? and clave=?',
    [nick, clave]
  );

  if (c_partic.length > 0) {
    res.send(c_partic[0]);
  } else {
    if (c_expo.length > 0) {
      res.send(c_expo[0]);
    } else {
      if (c_control.length > 0) {
        res.send(c_control[0]);
      }
    }
  }
  if (c_control.length == 0 && c_expo.length == 0 && c_partic.length == 0) {
    return res.send({});
  }
};


//Consulta un usuario casual con nick y clave (opcional ya que el casual no accede al sistema)
export const getCasual = async (req, res) => {
  const nick = req.body.nick;
  const clave = req.body.clave;

  const [rows] = await pool.query(
    'SELECT ci_par,CONCAT(nombres," ", apellidos) as nombre_comp,email,nick,clave,numero FROM participante where nick =? and clave=?',
    [nick, clave]
  );

  console.log(rows, "aaa");
  if (rows.length > 0) {
    //const x=await enc_use(rows[0].clave)
    //rows[0].clave=x
    res.send(rows[0]);
  } else {
    return res.send({});
  }

  console.log(rows);

  //res.send(req.body)
};


//Consulta todos los participantes con sus datos
export const getNParticipantes = async (req, res) => {
  const users = req.body;
  const [result] = await pool.query(
    "SELECT ci_par,nick,clave,fotografia FROM participante"
  );

  if (result.length > 0) {
    //console.log(result);
    res.json({
      participante: result,
    });
  } else {
    res.json({ error: "Error 404" });
  }

  console.log(result);
};

//Consulta todos los participantes con sus datos
export const getNControl = async (req, res) => {
  const users = req.body;
  const [result] = await pool.query(
    "SELECT ci_control,nick,clave FROM control"
  );

  if (result.length > 0) {
    //console.log(result);
    res.json({
      control: result,
    });
  } else {
    res.json({ error: "Error 404" });
  }

  console.log(result);
};

//Consulta todos los participantes con sus datos
export const getNExpositor = async (req, res) => {
  const users = req.body;
  const [result] = await pool.query("SELECT ci_exp,nick,clave FROM expositor");

  if (result.length > 0) {
    //console.log(result);
    res.json({
      expositor: result,
    });
  } else {
    res.json({ error: "Error 404" });
  }

  console.log(result);
};
