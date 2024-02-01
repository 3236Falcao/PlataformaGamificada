import { MongoClient, MongoClientOptions } from 'mongodb';

// Interface para definir as opções de configuração
interface MongoDBOptions extends MongoClientOptions {
  useNewUrlParser?: boolean;
  useUnifiedTopology?: boolean;
}

// Substitua as informações abaixo com as credenciais do seu cluster MongoDB Atlas
const atlasUsername = 'adm';
const atlasPassword = 'Mzyxcqpf60rp2NMT';
const atlasClusterUrl = 'PlataformaGamificada';
const dbName = 'Projeto1';

// URL de conexão com o MongoDB Atlas
const url = `mongodb+srv://${atlasUsername}:${atlasPassword}@${atlasClusterUrl}/${dbName}?retryWrites=true&w=majority`;

// Função assíncrona para conectar ao MongoDB
const connectToMongoDB = async (): Promise<MongoClient> => {
  try {
    // Conecta ao MongoDB usando a URL, com as opções de configuração
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as MongoDBOptions);
    
    // Exibe mensagem de sucesso ao conectar
    console.log('Conectado ao MongoDB Atlas!');
    
    // Retorna o objeto de cliente, que pode ser utilizado para interações com o banco de dados
    return client;
  } catch (err) {
    // Em caso de erro, exibe mensagem de erro e lança uma exceção
    console.error('Erro de conexão com o MongoDB Atlas:', err);
    throw err; // Trate o erro de acordo com suas necessidades
  }
};

export { connectToMongoDB };
