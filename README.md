# 🧩 ServicesPlate

Sistema responsável por receber e processar dados de câmeras via **HTTP POST**.

---

## 🚀 Instalação e Configuração

### 🖥️ **1️⃣ Iniciar o Servidor**

Abra o **CMD** na pasta do projeto `Monitor` e execute o comando:

```bash
npm run dev


✅ Após a execução, o servidor será iniciado e ficará ativo para receber conexões.

💡 Dica: Se a porta do servidor não for exibida, verifique o arquivo .env ou a configuração no código para confirmar a porta padrão (ex: 3000 ou 8080).

🎥 2️⃣ Configurar a Câmera

Acesse o CGI da câmera e siga o caminho:

Configurações → Rede → HTTP POST

⚙️ 3️⃣ Definir os Parâmetros de Envio

Preencha os campos conforme o exemplo abaixo:

Campo	Descrição
Tipo de Protocolo (API)	Selecione o tipo de protocolo (ex: HTTP POST)
Endereço do Servidor	Informe o IP do servidor onde o npm run dev está rodando
Porta do Servidor	Informe a porta mostrada no terminal ao iniciar o servidor

⚠️ Atenção:

O IP informado na câmera deve ser o mesmo da máquina onde o servidor está sendo executado.

A porta precisa estar liberada no firewall para permitir a comunicação.

💾 4️⃣ Salvar Configurações

Clique em Salvar na interface da câmera.
Após isso, ela começará a enviar os dados automaticamente para o servidor ServicesPlate.

🧠 Dicas Importantes

🔒 Firewall:
Certifique-se de que o firewall do Windows ou roteador não está bloqueando a porta usada pelo servidor.

🌐 Rede:
O servidor e a câmera devem estar na mesma rede local (LAN).

⚙️ Execução Contínua:
Para manter o serviço ativo mesmo após reiniciar o sistema, use o PM2:

npm install -g pm2
pm2 start npm --name "ServicesPlate" -- run dev
pm2 save
pm2 startup

📦 Informações do Projeto
Informação	Detalhe
Nome:	ServicesPlate
Autor:	Daniel
Versão:	1.0.0
Tecnologia:	Node.js
Descrição:	Serviço para integração e recebimento de dados de câmeras via HTTP POST.
🧰 Comandos Úteis
Comando	Descrição
npm run dev	Inicia o servidor em modo de desenvolvimento
npm run start	Inicia o servidor em modo de produção
pm2 list	Lista os processos ativos
pm2 logs ServicesPlate	Exibe os logs do serviço
🧾 Licença

Este projeto é de uso interno.
Para solicitações de uso comercial, entre em contato com o desenvolvedor.
```
