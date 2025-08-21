const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//  Exercicio de times

let times = [];

const partidas = (i = 0) => {
    if (i < 3) {
        readline.question('Digite o nome de um time: ', (time) => {
            if (times.includes(time)) {
                console.log('Time já cadastrado! Digite um nome diferente.');
                partidas(i);
            } else {
                times.push(time);
                partidas(i + 1);
            }
        });
    } else {
        mostrarPartidas();
    }
};

function mostrarPartidas() {
    for (let h = 0; h < times.length; h++) {
        for (let j = 0; j < times.length; j++) {
            if (h !== j) {
                console.log(`${times[h]} x ${times[j]}`);
            }
        }
    }
    readline.close();
}

partidas();


// Exercicio provas

let gabarito = []
let aluno = ''
let notas = []
let media = 0
let mediatotal = []

const respostaGabarito = (i = 0) => {
    if (i < 5) {
        readline.question(`Digite a resposta da questão ${i + 1} do gabarito: `, (resposta) => {
            if (!['a', 'b', 'c', 'd', 'e'].includes(resposta.toLowerCase())) {
                console.log('Alternativa inválida!!')
                respostaGabarito(i)
            } else {
                gabarito.push(resposta.toLowerCase())
                respostaGabarito(i + 1)
            }
        })
    } else {
        cadastroAluno()
    }
}

const cadastroAluno = () => {
    readline.question('Digite o nome do aluno: ', (nome) => {
        if (!isNaN(nome)) {
            console.log('Digite um nome válido!')
            cadastroAluno()
        } else {
            aluno = nome
            notas = []
            cadastroNota()
        }
    })
}

const cadastroNota = (i = 0) => {
    if (i < 5) {
        readline.question(`Digite a alternativa da questão ${i + 1}: `, (alt) => {
            if (!['a', 'b', 'c', 'd', 'e'].includes(alt.toLowerCase())) {
                console.log('Alternativa inválida!!')
                cadastroNota(i)
            } else {
                notas.push(alt.toLowerCase())
                cadastroNota(i + 1)
            }
        })
    } else {
        calcularMedia()
    }
}

const calcularMedia = () => {
    media = 0
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] === gabarito[i]) {
            media += 2
        }
    }

    console.log('-'.repeat(30))
    console.log(`A nota do aluno ${aluno} foi de ${media}`)
    console.log('-'.repeat(30))
    mediatotal.push(media)

    console.log('Digite 1 para adicionar mais alunos')
    console.log('Digite 2 para parar e visualizar média da turma')
    readline.question('Digite uma das opções: ', (num) => {
        if (num === '1') {
            cadastroAluno()
        } else if (num === '2') {
            mediaTurma()
        } else {
            console.log('Opção inválida!')
            calcularMedia()
        }
    })
}

const mediaTurma = () => {
    let soma = 0
    for (let i = 0; i < mediatotal.length; i++) {
        soma += mediatotal[i]
    }
    console.log(`A média da turma foi de: ${(soma / mediatotal.length).toFixed(2)}`)
    readline.close()
}

respostaGabarito()

// EXercicio cinema

let cadeiras = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10']

const reserCadeiras = () => {
    console.log(`Cadeiras disponíveis: ${cadeiras.join(' ')}`)
    readline.question('Deseja reservar unma cadeira? S/N ', (afirm) => {
        if(afirm.toUpperCase() != 'S' && afirm.toUpperCase() != 'N'){
            console.log('Digite uma opção válida!')
            console.log('-'.repeat(30))
            reserCadeiras()
        }

        else{
        if(afirm.toUpperCase() === 'S'){
            readline.question('Digite o número da cadeira que deseja reservar: (1-10) ', (num) => {
                let idx = parseInt(num) - 1
                if (idx >= 0 && idx < cadeiras.length){
                    if(cadeiras[idx] != 'X'){
                        cadeiras[idx] = 'X'
                        console.log('Cadeira reservada com sucesso!!')
                        confirmReserva()
                    } else {
                        console.log('Digite uma cadeira vaga!!')
                        reserCadeiras()
                    }
                } else {
                    console.log('Digte um número de 1 a 10')
                    reserCadeiras()
                }
                
            })
        } else {
            console.log('Saindo...')
            readline.close()
        }
    }
    })
}


const confirmReserva = () => {
    readline.question('Deseja reservar outra cadeira? [S/N] ', (confirm) => {
        if(confirm != 'S' && confirm != 'N'){
            console.log('Digite uma opção válida!')
            confirmReserva()
        } if(confirm === 'S'){
            reserCadeiras()
        } else {
            console.log('Saindo...')
            readline.close()
        }
    })
}
reserCadeiras()