import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Usuario from '../models/usuarioModel';

let mongoServer: MongoMemoryServer | null = null;

async function run() {
  try {
    // Inicializar o servidor de memória do MongoDB
    mongoServer = new MongoMemoryServer();
    const mongoUri = await mongoServer.getUri();

    // Definir as opções de conexão
    const mongooseOptions: Record<string, any> = {
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
