const chalk = require('chalk')
const livros = require('./livros');

const redline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const showMenu = () => {
    console.log('-'.repeat(30))
    console.log(chalk.green('Digite 1 para alugar um livro'))
    console.log(chalk.green('Digite 2 para devolver um livro'))
    console.log(chalk.green('Digite 3 para consultar o estoque'))
    console.log(chalk.green('Digite 4 para adicionar um livro ao estoque'))
    console.log(chalk.green('Digite 5 para sair'))
    console.log('-'.repeat(30))
}

const alugarLivro = () => {
    if(livros.length > 0){
        console.log('Livros disponiveis: ', livros)
        redline.question('Digite o nome do livro que deseja alugar: ', (alug) => {
            if(livros.includes(alug)){
                console.log(chalk.blue('Livro alugado com sucesso!'))
                livros.splice(livros.indexOf(alug), 1)
                menu()
            } else {
                console.log(chalk.red('Digite um nome de livro válido!'))
                alugarLivro()
            }
        })
    } else {
        console.log('Não há livros no estoque!')
        menu()
    }
}

const devolverLivro = () => {
    redline.question('Digite o nome do livro que deseja devolver: ', (devolv) => {
        console.log(chalk.blue('Livro devolvido com sucesso!'))
        livros.push(devolv)
        menu()
    })
}

const verificarEstoque = () => {
    console.log('mostrando livros...')
    console.log(livros)
    menu()
}

const adicionarLivro = () => {
    redline.question('Digite o nome do livro que deseja adicionar ao estoque: ', (livro) => {
        console.log(chalk.blue('Livro adcionado com sucesso!'))
        livros.push(livro)
        menu()
    })
}

const menu = () => {
    showMenu()
    redline.question('Digite uma das opções: ', (option) => {
        switch(option){
            case '1':
                alugarLivro()
                break
            case '2':
                devolverLivro()
                break
            case '3':
                verificarEstoque()
                break
            case '4':
                adicionarLivro()
                break
            case '5':
                console.log(chalk.red('Saindo...'))
                redline.close()
                break
            default:
                console.log(chalk.red('Opção Inválida'))
                menu()
        }
    })
}

menu()