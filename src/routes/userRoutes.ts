import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../controllers/userController';

const router = express.Router();

// Rota para a raiz (página inicial)
router.get('/', (_req: any, res: { send: (arg0: string) => void; }) => {
  res.send('Bem-vindo à página inicial!');
});

// Rota para obter todos os usuários
router.get('/users', getAllUsers);

// Rota para obter um usuário pelo ID
router.get('/users/:id', getUserById);

// Rota para criar um novo usuário
router.post('/users', createUser);

// Rota para atualizar um usuário pelo ID
router.put('/users/:id', updateUser);

// Rota para excluir um usuário pelo ID
router.delete('/users/:id', deleteUser);

export default router;
