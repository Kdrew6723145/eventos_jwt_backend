import {pool} from "../database.js"


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