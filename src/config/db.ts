import mongoose from 'mongoose';

const localURI = 'mongodb://localhost:27017/PlataformaGamificadaLocal';

export async function connectToMongoDB(): Promise<void> {
  try {
    await mongoose.connect(localURI);
    console.log('Conexão bem-sucedida com o banco de dados MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    throw error;
  }
}
