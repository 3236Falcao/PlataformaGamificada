import { calcularPontuacao  } from '../app/utils/scoreUtils';

// Test Case 1
test('calcula a pontuação quando o jogador sobe de nível', () => {
  const achievements = ['levelUp'];
  const score = calcularPontuacao(achievements);
  expect(score).toBe(10);
});

// Test Case 2
test('calcula a pontuação quando o jogador completa uma missão', () => {
  const achievements = ['questCompleted'];
  const score = calcularPontuacao(achievements);
  expect(score).toBe(5);
});

// Test Case 3
test('calcula a pontuação quando o jogador tem múltiplas conquistas', () => {
  const achievements = ['levelUp', 'questCompleted'];
  const score = calcularPontuacao(achievements);
  expect(score).toBe(15);
});

// Test Case 4
test('calcula a pontuação quando o jogador não tem conquistas', () => {
  const achievements: string[] = [];
  const score = calcularPontuacao(achievements);
  expect(score).toBe(0);
});


