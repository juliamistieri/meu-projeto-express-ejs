const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1, nome:"trembalinha", preco:"3243", descricao:"fdgf", imagem:"https://imgnike-a.akamaihd.net/768x768/026942ID.jpg"},
  {id: 2, nome:"j", preco:"299", descricao:"kk", imagem:"https://imgnike-a.akamaihd.net/768x768/026942ID.jpg"},
  {id: 3, nome:"j", preco:"324", descricao:"kkk", imagem:"https://imgnike-a.akamaihd.net/768x768/026942ID.jpg"},
  {id: 4, nome:"j", preco:"356", descricao:"kkkk", imagem:"https://imgnike-a.akamaihd.net/768x768/026942ID.jpg"},
  {id: 5, nome:"j", preco:"215", descricao:"kkkkk", imagem:"https://imgnike-a.akamaihd.net/768x768/026942ID.jpg"},
  {id: 6, nome:"j", preco:"5677", descricao:"kkk", imagem:"https://imgnike-a.akamaihd.net/768x768/026942ID.jpg"},
  {id: 7, nome:"j", preco:"1432", descricao:"k", imagem:"https://imgnike-a.akamaihd.net/768x768/026942ID.jpg"},
  {id: 8, nome:"j", preco:"453", descricao:"kkkuj", imagem:"https://imgnike-a.akamaihd.net/768x768/026942ID.jpg"},
  {id: 9, nome:"j", preco:"2435", descricao:"kkk", imagem:"https://imgnike-a.akamaihd.net/768x768/026942ID.jpg"},
  {id: 10, nome:"j", preco:"345", descricao:"khgjgvk", imagem:"https://imgnike-a.akamaihd.net/768x768/026942ID.jpg"},
  
]

function buscarProdutoPorID(id){
  const produto = produtos.find(produto => produto.id == id); // buscar produto no vetor 
  return produto || null
}

app.get('/', (req, res) => { //controller/rota    get é o verbo HTTP   req é o que entra no servidor (requisição) == a resposta é res (o que sai)
  res.render('index', { produtos });
});

app.get('/produtos', (req, res) => { 
  res.render('produtos', { message: 'LISTA DE PRODUTOS' });   //
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});