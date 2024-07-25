import mongoose from 'mongoose';
import Usuario from '../models/usuarioModel'; 

// Conectar ao MongoDB antes de rodar os testes
beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/PlataformaGamificadaLocal');
});

// Fechar a conexão com o MongoDB após os testes
afterAll(async () => {
  await mongoose.disconnect();
});

// Limpar a coleção de usuários antes de cada teste
beforeEach(async () => {
  if (Usuario) {
    await Usuario.deleteMany({});
  } else {
    throw new Error('O modelo de usuário não está definido.');
  }
});

test('Deve inserir um novo usuário com sucesso', async () => {
  if (!Usuario) {
    throw new Error('O modelo de usuário não está definido.');
  }

  // Crie um novo usuário para inserir
  const novoUsuario = {
    nome: 'John',
    idade: 30,
    telefone: '992646286',
    score: 0,
    desempenho: {
      nivel: 1,
      conquistas: [],
    },
  };

  // Insira o documento do usuário no banco de dados
  const inserirDocumento = await Usuario.create(novoUsuario);

  // Verifique se o documento não é nulo e possui os atributos esperados com os valores corretos
  expect(inserirDocumento).not.toBeNull();
  expect(inserirDocumento.nome).toBe('John');
  expect(inserirDocumento.idade).toBe(30);
});
