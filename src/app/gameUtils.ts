export function calcularPontuacao(conquistas: string[]): number {
    // calcular a pontuação do jogador com base nas conquistas
    const score = conquistas.reduce((totalScore, conquistas) => {
      // Atribua pontos com base nas conquistas (um exemplo simples)
      if (conquistas === 'levelUp') {
        return totalScore + 10;
      } else if (conquistas === 'questCompleted') {
        return totalScore + 5;
      } else {
        return totalScore;
      }
    }, 0);
  
    return score;
  }
  