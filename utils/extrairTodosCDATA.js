function extrairTodosCDATA(xml) {
  const regex = /<(\w+)[^>]*><!\[CDATA\[(.*?)\]\]><\/\1>/g;
  const resultados = [];
  let match;

  while ((match = regex.exec(xml)) !== null) {
    resultados.push(`${match[1]}: ${match[2].trim()}`);
  }

  return resultados;
}

module.exports = extrairTodosCDATA;
