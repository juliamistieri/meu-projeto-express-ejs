const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => { //controller/rota    get é o verbo HTTP   req é o que entra no servidor (requisição) == a resposta é res (o que sai)
  res.render('index', { message: 'Olá, Mundo!' });   //
});

app.get('/contatos', (req, res) => { 
  res.render('contatos', { message: 'Esta é a página de contato.' });   //
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});