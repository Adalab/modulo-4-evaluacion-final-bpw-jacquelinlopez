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


//conexion a bd

async function connectionbd() {
  const connection = await mysql.createConnection({
    host:"",
    user:,
    password,
    database:
  });
}

const PORT = 5005;
server.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
