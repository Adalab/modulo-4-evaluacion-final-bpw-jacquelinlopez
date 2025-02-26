//imports
const express = require('express');
const cors = require('cors');
const mysql = require ("mysql2/promise");

//crear el servidor
const server = express();
//DOTENV
require ("dotenv").config();

// configurar el servidor
server.use(cors());
server.use(express.json());


//funcion para crear la conexion a bd

async function connectionbd() {
  const connection = await mysql.createConnection({
    host:"localhost",
    user:process.env.usuario,
    password:process.env.password,
    database:process.env.database
  });
await connection.connect();

return connection;
}
const PORT = 5005;
server.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
  
});

//endpoint insertar nuevo libro
server.post('/libros', async (req, res) =>{
  try{
    const conn = await connectionbd();
    const {titulo, genero, autor_id } = req.body;

    if(!titulo || !genero || !autor_id){
      return res.status(400).json({
        success: false,
        message:"todos los campos son obligatorios"
      })
    }

    //sql//
    const sqlInsert= "INSERT INTO libros (titulo, genero, autor_id) VALUES (?,?,?)";

    const [result] = await conn.query(sqlInsert,[
      titulo,
      genero,
      autor_id
    ]);

    if (result){
      res.status(201).json({
        success: true,
      });
    }else{
      res.status(400).json({
        success: false,
        message:'no se ha insertado un nuevo libro'
      });
    }
    
  } catch (error) {
    res.status(500).json(error);
  }
});

//endpoint listado libros

server.get('/libros', async (req, res)=>{
  try{
    const conn = await connectionbd();
    //sql
    const select = `
      SELECT libros.id, libros.titulo, libros.genero, autores.nombre AS autor
      FROM libros
      JOIN autores ON libros.autor_id = autores.IdAutor
    `;
    const [results] = await conn.query(select);

    //cierro conexion
    conn.end();

    res.status(200).json({
      info:{ count: results.length },
      results: results,
    });


  }catch (error) {
    res.status(500).json(error)
  }
});

//endpoint actualizar --> update//
server.put('/libros/:id', async (req, res)=>{
  try{
    
    const conn = await connectionbd();
    const{ id } = req.params;
    const { titulo, genero, autor_id } = req.body;

    if (!titulo || !genero || !autor_id) {
      return res.status(400).json({ success: false, message: "Todos los campos son obligatorios" });
  }
 

  const Update = "UPDATE libros SET titulo=?, genero=?, autor_id=? WHERE Idlibro = ? ";

  const [result] = await conn.query(Update, [titulo, genero, autor_id, id]);
  res.json({
    success: true,
    message:"libro actualizado"
  });

} catch (error){
  res.status(500).json({
    success: false,
    message: error.message
  });
}
});

//endpoint para eliminar un libro 

server.delete('/libros/:id', async (req,res) =>{
  try{
    const conn = await connectionbd();
    const { id } = req.params;

    const deleteQuery = "DELETE FROM libros WHERE Idlibro = ?";
    const [result] = await conn.query(deleteQuery, [id]);

    if (result.affectedRows > 0) {
      res.status(200).json({
        success: true,
        message: "libro eliminado"
      });
    } else{
      res.status(400).json({
        success: false,
        message: "ha ocurrido un error para eliminar"
      });
    }
  }catch (error){
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
  });