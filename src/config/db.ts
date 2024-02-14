//import { MongoClient } from 'mongodb'; // Para conexao com o Atlas
import mongoose from 'mongoose';

const localURI = 'mongodb://localhost:27017/PlataformaGamificadaLocal';
//const atlasURI = '';

export   async function connectToMongoDB(): Promise<void> {
  try {
    //const client = new MongoClient(localURI);

    //await client.connect();
    await mongoose.connect(localURI);
    
    console.log('Conexão bem-sucedida com o banco de dados MongoDB');

    //return client;
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    throw error;
  }
}
