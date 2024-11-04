const fs = require('fs');
const path = require('path');

//Criar uma pasta 
// fs.mkdir(path.join(__dirname, 'test'), (error) => {
//     if(error){
//         return console.log('Erro ao criar a pasta:', error);
//     }
//     console.log('Pasta criada com sucesso!');
// })

// Criar um arquivo
fs.writeFile(path.join(__dirname, "/test", "teste.txt"),
    'Hello node!', (error) => {
        if (error) {
            return console.log('Erro:', error)
        }
        console.log('Arquivo criado com sucesso!')

    });

//Adicionar à um arquivo
fs.appendFile(path.join(__dirname, "/test", "teste.txt"),
    '\nHello World', (error) => {
        if (error) {
            return console.log('Erro:', error)
        }
        console.log('Conteúdo adicionado ao arquivo com sucesso!')
    });

//Ler um araquivo
fs.readFile(path.join(__dirname, "/test", "teste.txt"),
    'utf8', (error, data) => {
        if (error) {
            return console.log('Erro:', error)
        }
        console.log('Conteúdo do arquivo:', data)
    });
