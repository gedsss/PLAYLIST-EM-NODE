const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Exercicio matriz

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function verificarVitoria(jogador) {

  for (let linha of matriz) {
    if (linha.every((item) => item === jogador)) return true;
  }

  for (let col = 0; col < 3; col++) {
    if (matriz.every((linha) => linha[col] === jogador)) return true;
  }

  if ([0, 1, 2].every((i) => matriz[i][i] === jogador)) return true;

  if ([0, 1, 2].every((i) => matriz[i][2 - i] === jogador)) return true;

  return false;
}

function imprimirMatriz() {
  for (let linha of matriz) {
    console.log(linha.join(" "));
  }
}

function verificarEmpate() {
  return matriz.flat().every((item) => typeof item === "string");
}

function jogada(jogador, callback) {
  imprimirMatriz();
  readline.question(`Escolha uma posição para ${jogador}: `, (resposta) => {
    let escolha = parseInt(resposta);
    let jogadaValida = false;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matriz[i][j] === escolha) {
          matriz[i][j] = jogador
          jogadaValida = true
        }
      }
    }

    if (!jogadaValida) {
      console.log("Jogada inválida!")
      return jogada(jogador, callback)
    }

    if (verificarVitoria(jogador)) {
      imprimirMatriz();
      console.log(`Jogador ${jogador} venceu!`)
      readline.close()
    }

    if (verificarEmpate()) {
      imprimirMatriz()
      console.log("Empate!")
      readline.close()
    }

    callback();
  });
}

function jogo() {
  jogada("O", () => {
    jogada("X", jogo);
  });
}

jogo();
