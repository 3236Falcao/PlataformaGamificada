import Usuario from '../models/usuarioModel';

import mongoose from 'mongoose';


const uri = 'mongodb+srv://<adm>:<LiQ4-ZvW3fWMeh2>@plataformagamificada.qexl0pq.mongodb.net/?retryWrites=true&w=majority';

//const mongoose = require('mongoose');

async function run() {
  try {
    // Conectar ao MongoDB
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
    };

    // Conectar ao MongoDB usando a URI do servidor de memória
    await mongoose.connect(mongoUri, mongooseOptions);

    // Restante do código...

  } catch (erro) {
    console.error('Erro durante as operações CRUD:', erro);
  } finally {
    // Parar o servidor de memória do MongoDB e fechar a conexão após as operações
    if (mongoServer) {
      await mongoServer.stop();
    }
    mongoose.disconnect();
  }
}

// Executar a função assíncrona
run();
