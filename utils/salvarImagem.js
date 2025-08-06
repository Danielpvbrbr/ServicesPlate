const fs = require('fs');
const path = require('path');

const pastaImagens = path.join(__dirname, '..', 'imagens');
fs.mkdirSync(pastaImagens, { recursive: true });

function salvarImagem(base64, nomeArquivo) {
    const buffer = Buffer.from(base64, 'base64');
    const caminho = path.join(pastaImagens, nomeArquivo);
    // fs.writeFileSync(caminho, buffer);
    //console.log(`Imagem salva: ${caminho}`);
}

module.exports = salvarImagem;
