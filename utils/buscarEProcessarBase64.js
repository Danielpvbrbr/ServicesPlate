const salvarImagem = require('./salvarImagem');

function buscarEProcessarBase64(obj, prefixo = '') {
  for (const chave in obj) {
    const valor = obj[chave];

    if (typeof valor === 'string') {
      if (/^data:image\/\w+;base64,/.test(valor)) {
        const base64 = valor.split(',')[1];
        const nomeArquivo = `Completo${Date.now()}.jpg`;
        salvarImagem(base64, nomeArquivo);
      } else if (/^[A-Za-z0-9+/=\r\n]+$/.test(valor) && valor.length > 1000) {
        const nomeArquivo = `Placa${Date.now()}_${chave}.jpg`;
        salvarImagem(valor, nomeArquivo);
      }
    } else if (typeof valor === 'object') {
      buscarEProcessarBase64(valor, `${prefixo}.${chave}`);
    }
  }
}

module.exports = buscarEProcessarBase64;
