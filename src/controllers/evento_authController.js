import {pool} from "../database.js"


export const getEvento=async (req, res) => {

    const nick=req.body.nick
      const clave=req.body.clave
  
      const [rows]=await pool.query(
          'SELECT * FROM evento'
      )
  
      console.log(rows)
      if(rows.length>0){
          //const x=await enc_use(rows[0].clave)
          //rows[0].clave=x
          res.send(rows[0])
  
  
      }else{
          return res.status(404).json({error:'No hay eventos disponibles'})
      }
  
      console.log(rows)
  
      //res.send(req.body)
  
  }