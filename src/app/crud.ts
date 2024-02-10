import Usuario from '../models/usuarioModel';

import mongoose from 'mongoose';


const uri = 'mongodb+srv://<adm>:<LiQ4-ZvW3fWMeh2>@plataformagamificada.qexl0pq.mongodb.net/?retryWrites=true&w=majority';

//const mongoose = require('mongoose');

async function run() {
  try {
    // Conectar ao MongoDB
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);

    // Criar um novo usuário
    const novoUsuario = new Usuario({ nome: 'John Doe', idade: 25 });
    const usuarioCriado = await novoUsuario.save();
    console.log('Novo usuário criado:', usuarioCriado);

    // Ler todos os usuários
    const usuarios = await Usuario.find();
    console.log('Todos os usuários:', usuarios);

    // Atualizar um usuário
    const resultadoAtualizacao = await Usuario.updateOne({ nome: 'John Doe' }, { idade: 26 });
    console.log('Usuário atualizado:', resultadoAtualizacao);

    // Excluir um usuário
    const resultadoExclusao = await Usuario.deleteOne({ nome: 'John Doe' });
    console.log('Usuário excluído:', resultadoExclusao);
  } catch (erro) {
    console.error('Erro durante as operações CRUD:', erro);
  } finally {
    // Fechar a conexão após as operações
    mongoose.disconnect();
  }
}

// Executar a função assíncrona
run();
