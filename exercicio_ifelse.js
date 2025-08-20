const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

// exercicio de carteira de motorista

const carteiraMotorista = () => {
    readline.question('Digite o ano atual: ', (atual) => {
        atual = Number(atual);
        if (isNaN(atual) || atual <= 0) {
            console.log('Ano inválido!');
            return carteiraMotorista();
        }
        readline.question('Digite sua data de nascimento: ', (nascimento) => {
            nascimento = Number(nascimento);
            if (isNaN(nascimento) || nascimento <= 0 || nascimento > atual) {
                console.log('Data de nascimento inválida!');
                return carteiraMotorista();
            }
            const idade = atual - nascimento;
            if (idade < 18) {
                console.log('Você não está apto para tirar a carteira de motorista!');
            } else {
                console.log('Você está apto para tirar a carteira!');
            }
            readline.close();
        });
    });
}

carteiraMotorista()

// Exercicio media de aluno

const mediaAluno = () => {
    readline.question('Digite a primeira nota: ', (n1) => {
        if (isNaN(n1) || n1 < 0 || n1 > 10){
            console.log('Digite uma nota válida!')
            return mediaAluno()
        }
        readline.question('Digite a segunda nota: ', (n2) => {
            if (isNaN(n2) || n2 < 0 || n2 > 10){
            console.log('Digite uma nota válida!')
            return mediaAluno()
            }
            nf = (n1 + n2) / 2

            if (nf >= 7){
                console.log('Aluno aprovado!')
            } if ((nf >= 5) && (nf < 7)){
                console.log('Aluno de PF')
            } if (nf < 5){
                console.log('Aluno reprovado')
            } readline.close()
        })
    })
}

mediaAluno()

const massaCorporal = () => {
    readline.question('Digite a sua massa: ', (massa) => {
        readline.question('Digite a sua altura: ', (altura) => {
            massa = Number(massa);
            altura = Number(altura);
            if (isNaN(massa) || massa <= 0 || isNaN(altura) || altura <= 0) {
                console.log('Valores inválidos!');
                return massaCorporal();
            }
            const imc = massa / (altura ** 2);

            if (imc < 17) {
                console.log('Muito abaixo do peso');
            } else if (imc >= 17 && imc <= 18.5) {
                console.log('Abaixo do peso');
            } else if (imc > 18.5 && imc < 25) {
                console.log('Peso ideal');
            } else if (imc >= 25 && imc < 30) {
                console.log('Sobrepeso');
            } else if (imc >= 30 && imc < 35) {
                console.log('Obesidade');
            } else if (imc >= 35 && imc < 40) {
                console.log('Obesidade severa');
            } else {
                console.log('Obesidade mórbida');
            }
            readline.close();
        });
    });
}

massaCorporal()

// Exercicio de times

const times = () => {
    readline.question('Digite o total de gols do primeiro time: ', (time1) => {
        readline.question('Digite o total de gols do segundo time: ', (time2) => {
            time1 = Number(time1);
            time2 = Number(time2);

            if (isNaN(time1) || isNaN(time2) || time1 < 0 || time2 < 0) {
                console.log('Digite valores válidos!');
                return times();
            }

            const dif = Math.abs(time1 - time2);

            if (dif === 0) {
                console.log('Empate!');
            } else if (dif > 0 && dif <= 3) {
                console.log('Partida comum!');
            } else {
                console.log('Goleada!');
            }
        })
    })
}

times()
