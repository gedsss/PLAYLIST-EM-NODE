const redline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const perguntarNumeros = (callback) => {
    redline.question('Digite o primeiro número: ', (n1) => {
        redline.question('Digite o segundo número: ', (n2) => {
            if(isNaN(n1) || isNaN(n2)){
                console.log('Por favor digite um número válido')
                return perguntarNumeros(callback)
            } else {
                callback(Number(n1), Number(n2))
            }
        })
    })
}

perguntarNumeros((n1, n2) => {
    if(n1 < n2){
        for(let i = n1; i <= n2; i++) {
            console.log(i)
        }
    } if (n2 < n1){
        for(let i = n1; i >= n2; i--) {
            console.log(i)
        }
    }
    redline.close()
})

// Exercicio de notas

const checarNotas = () => {
    redline.question('Digite a quantidade de alunos na turma: ', (quant) => {
        if (isNaN(quant) || quant <= 0) {
            console.log('Digite um número válido!');
            return checarNotas();
        } else {
            cadastroAluno(Number(quant));
        }
    });
}

const cadastroAluno = (quant) => {
    const alunos = [];
    let i = 0;

    const perguntarDados = () => {
        if (i < quant) {
            redline.question('Digite o nome de um aluno: ', (nome) => {
                redline.question('Digite a nota do aluno: ', (nota) => {
                    const numNota = Number(nota)
                    if (isNaN(numNota)) {
                        console.log('Digite uma nota válida!!');
                        return perguntarDados();
                    } else {
                        alunos.push({ nome, nota: Number(nota) });
                        i++;
                        perguntarDados();
                    }
                });
            });
        } else {
            const melhor = alunos.reduce((a, b) => a.nota > b.nota ? a : b);
            console.log('O melhor aluno da turma foi:', melhor.nome, 'com nota', melhor.nota);
            redline.close();
        }
    };

    perguntarDados();
}

checarNotas();

// Exercicio pessoas

let h = 0
let m = 0

const contagem = (sexo, idade, cor) => {
    if((sexo === 'M') && (idade > 18) && (cor === 'Castanho')){
        h++
    } 
    if((sexo === 'F') && (idade >= 25 && idade <= 30) && (cor === 'Loiro')){
        m++
    }
}

const contagemPessoas = () => {

    redline.question('Digite o sexo: [M/F]', (sexo) => {
        if(sexo.toUpperCase() != 'M' && sexo.toUpperCase() != 'F'){
            console.log('Digite uma opção válida!')
            return contagemPessoas()
        }
        redline.question('Digite a idade: ', (idade) => {
            const numIdade = Number(idade)
            if(isNaN(numIdade)){
                console.log('Digite uma idade válida!')
                return contagemPessoas()
            }
            redline.question('Digite a cor do cabelo: [Preto | Castanho | Loiro | Ruivo]', (cor) => {
                if(cor != 'Preto' && cor != 'Castanho' && cor != 'Loiro' && cor != 'Ruivo'){
                    console.log('Digite uma cor válida!')
                    return contagemPessoas()
                }
                contagem(sexo.toUpperCase(), numIdade, cor)
                console.log('Digite 1 para adicionar outra pessoa')
                console.log('Digite 2 para sair')
                redline.question('Digite uma das opções [1/2]', (escolha) => {
                    if(escolha === '1'){
                        contagemPessoas()
                    } else {
                        console.log(h)
                        console.log(m)
                        redline.close()
                    }
                })
            })
        })
    })
}

contagemPessoas()