// src/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const formularioRoutes = require('./routes/formularioRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware para permitir requisições de origens diferentes
app.use(cors());  // Adicionando CORS

// Definindo as rotas
app.use('/api', formularioRoutes);

// Inicializando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
