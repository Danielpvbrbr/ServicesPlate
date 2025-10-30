const express = require('express');
// const path = require('path');
const handleAlarmData = require('./controllers/handleAlarmData');

const app = express();
app.use(express.text({ type: '*/*', limit: '20mb' }));

app.post('/SendAlarmData', handleAlarmData);

app.get("/", (req, res) => {
    res.send("Serviço Monitorando!")
})

const PORT = 8082;

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));
