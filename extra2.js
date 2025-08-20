const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let produto = [];
let estoque = [];
let preco = [];

const adcEstoque = () => {
    readline.question('Digite o nome do produto: ', (nome) => {
        readline.question('Digite a quantidade do produto a ser adicionado: ', (quant) => {
            readline.question('Digite o preço do produto a ser adicionado: ', (val) => {
                produto.push(nome);
                estoque.push(parseInt(quant));
                preco.push(parseFloat(val));

                readline.question('Deseja adicionar outro item? [S/N] ', (opcao) => {
                    if (opcao.toUpperCase() === 'S') {
                        adcEstoque();
                    } else {
                        menu();
                    }
                });
            });
        });
    });
};

const compra = () => {
    let valor_final = 0;

    const comprarItem = () => {
        readline.question('Digite o nome do produto: ', (nome) => {
            if (produto.includes(nome)) {
                let idx = produto.indexOf(nome);
                readline.question('Digite a quantidade a ser comprada: ', (quant) => {
                    quant = parseInt(quant);
                    if (estoque[idx] >= quant) {
                        let valor = preco[idx] * quant;
                        console.log(`O valor ficará em ${valor.toFixed(2)} R$`);
                        estoque[idx] -= quant;
                        valor_final += valor;

                        readline.question('Deseja comprar outro item? [S/N] ', (item) => {
                            if (item.toUpperCase() === 'S') {
                                comprarItem();
                            } else {
                                formaPagamento(valor_final);
                            }
                        });
                    } else {
                        console.log('Quantidade indisponível no estoque!');
                        comprarItem();
                    }
                });
            } else {
                console.log('O produto não consta no estoque!!');
                comprarItem();
            }
        });
    };

    comprarItem();
};

const formaPagamento = (valor_final) => {
    console.log('Qual forma de pagamento deseja utilizar?');
    console.log('1 - Pix (5% de desconto)');
    console.log('2 - Cartão (Débito ou Crédito)');
    console.log('3 - Dinheiro em espécie (2% de desconto)');

    readline.question('Digite uma das opções: ', (opcao) => {
        switch (opcao) {
            case '1':
                console.log(`O valor ficará em: ${(valor_final * 0.95).toFixed(2)} R$`);
                break;
            case '2':
                console.log(`O valor final ficará em: ${valor_final.toFixed(2)} R$`);
                break;
            case '3':
                console.log(`O valor final ficará em: ${(valor_final * 0.98).toFixed(2)} R$`);
                break;
            default:
                console.log('Opção inválida!');
                return formaPagamento(valor_final);
        }
        menu();
    });
};

const consultarEstoque = () => {
    console.log('-'.repeat(30));
    console.log('PRODUTO | ESTOQUE | PREÇO');
    for (let i = 0; i < produto.length; i++) {
        console.log(`${produto[i]} | ${estoque[i]} | ${preco[i]} R$`);
    }
    console.log('-'.repeat(30));
    menu();
};

const menu = () => {
    console.log('-'.repeat(30));
    console.log('MENU');
    console.log('-'.repeat(30));
    console.log('1 - Para adicionar ao estoque');
    console.log('2 - Para consultar o estoque');
    console.log('3 - Para realizar uma compra');
    console.log('4 - Sair');

    readline.question('Digite uma das opções: ', (opcao) => {
        switch (opcao) {
            case '1':
                adcEstoque();
                break;
            case '2':
                consultarEstoque();
                break;
            case '3':
                compra();
                break;
            case '4':
                console.log('Saindo...');
                readline.close();
                break;
            default:
                console.log('Opção inválida');
                menu();
        }
    });
};

menu();
