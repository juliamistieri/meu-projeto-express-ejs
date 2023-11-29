const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const produtos = [
  {id: 1,
     nome:"Jaqueta Nike X NOCTA Tech Fleece Full-Zip Black University Gold",
      preco:"899,00",
       descricao:"Combinando 2 de nossos looks mais icônicos, este moletom com capuz de zíper completo foi inspirado em nossa jaqueta atemporal Windrunner, bem como em nossa jaqueta Tech Fleece.",
        imagem:"/imagens/nike1.jpg"},
  {id: 2,
     nome:"Polo Nike Court Dri-FIT Masculina",
      preco:"299,90",
       descricao:"Feita de tecido de malha macio com 100% de fibras de poliéster reciclado, a Polo NikeCourt Dri-FIT é uma peça para as quadras de look clássico e material antissuor.",
        imagem:"/imagens/nike2.jpg"},
  {id: 3,
     nome:"Tênis Nike Air Force 1 07",
   preco:"799,90",
    descricao:"O brilho perdura no Nike Air Force 1 ’07, o tênis original do basquete que dá um toque de inovação naquilo que você conhece bem: sobreposições costuradas e duráveis, acabamentos simples e a quantidade perfeita de brilho para fazer você se destacar.",
     imagem:"/imagens/nike3.jpg"},
  {id: 4,
     nome:"Sideline Jacket HD",
      preco:"999,90",
       descricao:"Proteja-se do clima frio e úmido com o NOCTA. Impermeável e com isolamento, esta jaqueta foi feita para mantê-lo seco e aquecido, dia e noite.",
        imagem:"/imagens/nike4.jpg"},
  {id: 5,
     nome:"Nike x PEACEMINUSONE G-Dragon",
   preco:"2999,90",
    descricao:"Apenas tente encontrar um visual de verão mais exclusivo. G-Dragon canaliza seu passado militar e seu amor pelo taekwondo com esta combinação de jaqueta e colete em camadas. Use-os juntos, com o colete isolante como sobreposição, ou use separado. A escolha é sua.",
     imagem:"/imagens/nike5.jpg"},
  {id: 6, nome:"Nike x Jacquemus",
   preco:"799,90",
    descricao:"A moda das passarelas encontra o estilo streetwear nesta versão da polo clássica. Detalhes de tiras nas costas abertas acentuam seu visual, enquanto o tecido canelado destaca a forma sofisticada do design.",
     imagem:"/imagens/nike6.jpg"}
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