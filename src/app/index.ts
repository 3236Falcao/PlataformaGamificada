import express from 'express';
import mongoose from 'mongoose';
import { connectToMongoDB } from '../config/db';
import usuarioRoutes from '../routes/usuarioRoutes';

const app = express();
const PORT = 3000;

// Middleware para analisar JSON
app.use(express.json());

// Conecta ao MongoDB usando a função de conexão
connectToMongoDB()
  .then(() => {
    // Adiciona as rotas de usuário ao aplicativo
    app.use(usuarioRoutes);

    // Inicia o servidor
    app.listen(PORT, () => {
      console.log(`Servidor iniciado na porta ${PORT}`);
    });
  })
  .catch((err: any) => {
    console.error('Erro ao conectar ao MongoDB:', err);
    process.exit(1); // Encerra o processo se houver erro de conexão
  });
