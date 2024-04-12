import mongoose from 'mongoose';
import Usuario from '../models/usuarioModel';

async function testarInsercaoUsuario() {
  // Conectar ao MongoDB usando Mongoose
  await mongoose.connect('mongodb://localhost:27017/PlataformaGamificadaLocal');

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

  try {
    // Verifique se Usuario está definido
    if (Usuario) {
      // Insira o documento do usuário no banco de dados
      const inserirDocumento = await Usuario.create(novoUsuario);

      // Verifique se o documento não é nulo e possui os atributos esperados com os valores corretos
      if (inserirDocumento) {
        if (inserirDocumento.nome === 'John') {
          console.log('Teste para o nome passou.');
        } else {
          console.error('Teste para o nome falhou.');
        }

        if (inserirDocumento.idade === 30) {
          console.log('Teste para a idade passou.');
        } else {
          console.error('Teste para a idade falhou.');
        }
      } else {
        console.error('O documento inserido é nulo.');
      }
    } else {
      console.error('O modelo de usuário não está definido.');
    }
  } catch (error) {
    console.error('Ocorreu um erro durante o teste:', error);
  } finally {
    // Desconectar do MongoDB
    await mongoose.disconnect();
  }
}

// Execute o teste
testarInsercaoUsuario();
