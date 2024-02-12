import { connectToMongoDB } from './mongodb'; // Importe a função de conexão com o MongoDB

describe('Testes de integração', () => {
  let client: MongoClient;

  beforeAll(async () => {
    // Estabeleça a conexão com o banco de dados antes de executar os testes
    client = await connectToMongoDB();
  });

  afterAll(async () => {
    // Feche a conexão com o banco de dados após a execução dos testes
    await client.close();
  });

  it('Deve gravar dados corretamente no MongoDB', async () => {
    // Chame uma função ou utilitário que grava dados no banco de dados
    // Suponha que estamos inserindo um documento na coleção 'users'
    await client.db().collection('users').insertOne({ name: 'John', age: 30 });

    // Consulte o banco de dados para verificar se os dados foram gravados corretamente
    const insertedDocument = await client.db().collection('users').findOne({ name: 'John' });

    // Verifique se o documento foi gravado corretamente
    expect(insertedDocument).toBeTruthy();
    expect(insertedDocument.name).toBe('John');
    expect(insertedDocument.age).toBe(30);
  });
});
