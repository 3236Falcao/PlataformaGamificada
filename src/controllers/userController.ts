import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response) => {
  res.send('Retornando todos os usuários');
};

export const getUserById = (req: Request, res: Response) => {
  res.send(`Retornando usuário com ID ${req.params.id}`);
};

export const createUser = (req: Request, res: Response) => {
  res.send('Usuário criado');
};

export const updateUser = (req: Request, res: Response) => {
  res.send(`Usuário com ID ${req.params.id} atualizado`);
};

export const deleteUser = (req: Request, res: Response) => {
  res.send(`Usuário com ID ${req.params.id} deletado`);
};
