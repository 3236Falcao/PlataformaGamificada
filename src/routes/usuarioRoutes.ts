import express from 'express';
import {
  todosUsuarios,
  IdUsuario,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario
} from '../controllers/usuarioController';

const router = express.Router();

// Rota para a raiz (página inicial)
router.get('/', (_req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Bem-vindo à página inicial!');
});

// Rota para obter todos os usuários
router.get('/usuarios', todosUsuarios);

// Rota para obter um usuário pelo ID
router.get('/usuarios/:id', IdUsuario);

// Rota para criar um novo usuário
router.post('/usuarios', criarUsuario);

// Rota para atualizar um usuário pelo ID
router.put('/usuarios/:id', atualizarUsuario);

// Rota para excluir um usuário pelo ID
router.delete('/usuarios/:id', deletarUsuario);

export default router;
