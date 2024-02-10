import express, { Request, Response } from 'express';
import Usuario from '../models/usuarioModel';
import { connectToMongoDB } from '../config/db';

const app = express();
const PORT = 3000;

// Middleware para analisar JSON
app.use(express.json());

// Conecta ao MongoDB usando a função de conexão
connectToMongoDB().then(() => {
  console.log('Conectado ao MongoDB');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err);
  process.exit(1); // Encerra o processo se houver erro de conexão
});

// Rota para criar um novo usuário
app.post('/usuarios', async (req: Request, res: Response) => {
  try {
    const { nome, idade } = req.body;

    // Validar entrada
    if (!nome || !idade) {
      return res.status(400).json({ message: 'Nome e idade são obrigatórios' });
    }

    // Cria um novo usuário usando o modelo
    const novoUsuario = new Usuario({ nome, idade });

    // Salva o usuário no banco de dados
    await novoUsuario.save();

    // Responde com o novo usuário
    res.json(novoUsuario);
  } catch (err) {
    console.error('Erro ao criar usuário:', err);
    res.status(500).send('Erro interno do servidor');
  }
});

// Rota para obter todos os usuários
app.get('/usuarios', async (req: Request, res: Response) => {
  try {
    // Obtém todos os usuários da coleção de usuários
    const usuarios = await Usuario.find();

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
