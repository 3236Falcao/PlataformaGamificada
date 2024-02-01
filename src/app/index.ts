import express from 'express';
import mongoose from 'mongoose';
import { connectToMongoDB } from '../config/db';
import Usuario from '../models/usuarioModel';

const app = express();
const PORT = 3000;

// Middleware para analisar JSON
app.use(express.json());

// Rota para criar um novo usuário
app.post('/usuarios', async (req, res) => {
  try {
    // Conecta ao MongoDB
    const client = await connectToMongoDB();

    // Cria um novo usuário usando o modelo
    const novoUsuario = new Usuario({
      nome: req.body.nome,
      idade: req.body.idade,
    });

    // Salva o usuário no banco de dados
    await novoUsuario.save();

    // Fecha a conexão
    client.close();

    // Responde com o novo usuário
    res.json(novoUsuario);
  } catch (err) {
    console.error('Erro ao criar usuário:', err);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para obter todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    // Conecta ao MongoDB
    const client = await connectToMongoDB();

    // Obtém todos os usuários usando o modelo
    const usuarios = await Usuario.find();

    // Fecha a conexão
    client.close();

    // Responde com a lista de usuários
    res.json(usuarios);
  } catch (err) {
    console.error('Erro ao obter usuários:', err);
    res.status(500).send('Erro interno do servidor');
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
