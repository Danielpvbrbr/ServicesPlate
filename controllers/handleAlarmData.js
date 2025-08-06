const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const buscarEProcessarBase64 = require('../utils/buscarEProcessarBase64');
const extrairTodosCDATA = require('../utils/extrairTodosCDATA');

const pastaLogs = path.join(__dirname, '..', 'xmls');
fs.mkdirSync(pastaLogs, { recursive: true });

async function handleAlarmData(req, res) {
    const rawXml = req.body;
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

    try {
        const todosCDATA = extrairTodosCDATA(rawXml);

        if (todosCDATA.length) {
            const nomeArquivo = `cdata_${timestamp}.txt`;
            const caminho = path.join(pastaLogs, nomeArquivo);
            //fs.writeFileSync(caminho, todosCDATA.join('\n'), 'utf-8');
            // console.log(`CDATA: ${caminho}`);
            console.log(todosCDATA)
        } else {
            console.log('Nenhum CDATA encontrado no XML');
        }
    } catch (err) {
        console.error('Erro ao extrair CDATA:', err.message);
    }

    try {
        const result = await xml2js.parseStringPromise(rawXml, { explicitArray: false });
        //console.log('XML convertido:\n', JSON.stringify(result, null, 2));

        const tipo = result?.config?.eventType || result?.config?.type || 'desconhecido';
        //console.log(`Evento recebido: ${tipo}`);

        buscarEProcessarBase64(result);

    } catch (err) {
        console.error('Erro ao processar XML:', err.message);
    }

    res.send('Recebido AlarmData');
}

module.exports = handleAlarmData;
