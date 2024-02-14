import mongoose from 'mongoose';
import { connectToMongoDB } from '../config/db';

describe('Testes de integração', () => {
  beforeAll(async () => {
    // Estabeleça a conexão com o banco de dados antes de executar os testes
    await connectToMongoDB();
  });

  afterAll(async () => {
    // Feche a conexão com o banco de dados após a execução dos testes
    await mongoose.connection.close();
  });

  it('Deve gravar dados corretamente no MongoDB', async () => {
    // Chame uma função ou utilitário que grava dados no banco de dados
    // Suponha que estamos inserindo um documento na coleção 'usuarios'
    await mongoose.model('Usuario').create({ name: 'John', age: 30 });

    // Consulte o banco de dados para verificar se os dados foram gravados corretamente
    const inserirDocumento = await mongoose.model('Usuario').findOne({ name: 'John' });

    // Verifique se o documento foi gravado corretamente
    expect(inserirDocumento).toBeTruthy();
    expect(inserirDocumento!.name).toBe('John');
    expect(inserirDocumento!.age).toBe(30);
  });
});
