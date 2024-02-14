import { Request, Response, NextFunction } from 'express';
import Usuario from '../models/usuarioModel';

export const todosUsuarios = (req: Request, res: Response) => {
  res.send('Retornando todos os usuários');
};

export const IdUsuario = (req: Request, res: Response) => {
  res.send(`Retornando usuário com ID ${req.params.id}`);
};

export const criarUsuario = (req: Request, res: Response) => {
  res.send('Usuário criado');
};

export const atualizarUsuario = (req: Request, res: Response) => {
  res.send(`Usuário com ID ${req.params.id} atualizado`);
};

export const deletarUsuario = (req: Request, res: Response) => {
  res.send(`Usuário com ID ${req.params.id} deletado`);
};
