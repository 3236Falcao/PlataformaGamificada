import mongoose, { ConnectOptions } from 'mongoose';

const username = 'adm';
const password = 'Mzyxcqpf60rp2NMT';
const cluster = 'PlataformaGamificada';
const provider= 'AWS';
const database = 'PlataformaGamificada';

const url = `mongodb+srv://<username>:<password>@<cluster>.<provider>.mongodb.net/<database>`;


// Função assíncrona para conectar ao MongoDB
export async function connectToMongoDB(): Promise<void> {
  try {
    // Conecta ao MongoDB 
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }as any);
    
    // Exibe mensagem de sucesso ao conectar
    console.log('Conectado ao MongoDB Atlas!');
  } catch (err) {
    // Em caso de erro, exibe mensagem de erro e lança uma exceção
    console.error('Erro de conexão com o MongoDB Atlas:', err);
    throw err; // Trate o erro de acordo com suas necessidades
  }
}
