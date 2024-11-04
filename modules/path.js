const path = require('path');

// Nome do arquivo atual
const fileName = path.basename(__filename);

// Nome do diretório atual
const dirName = path.dirname(__filename);

// Extensão do arquivo
const fileExt = path.extname(__filename);

// Objeto path com informações detalhadas
const parsedPath = path.parse(__filename);

// Caminho combinado usando path.join
const combinedPath = path.join(__dirname, 'test', 'test2', 'test3.txt');

console.log(`Nome do arquivo: ${fileName}`);

console.log(`Diretório atual: ${dirName}`);

console.log(`Extensão do arquivo: ${fileExt}`);

console.log('Informações detalhadas do caminho:', parsedPath);

console.log(`Caminho combinado: ${combinedPath}`);
