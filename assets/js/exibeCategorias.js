import { conectaApi } from "./conectaApi.js";
import { mostrarProdutos } from "./mostrarProdutos.js";

// Criando & listando caixas de categorias
const caixaProdutosStarWars = document.querySelector("[data-caixa-starWars]");
const caixaProdutosConsoles = document.querySelector("[data-caixa-consoles]");
const caixaProdutosDiversos = document.querySelector("[data-caixa-diversos]");

// Exibindo produtos nas divs segundo sua categoria
async function exibeCategorias(){

    const listaApi = await conectaApi.listaProdutos();
    const produtos = listaApi["produtos"];

    produtos.forEach(produto => {
        
        // Isso aqui pode e deve ser melhorado!
        if (produto.categoria == caixaProdutosConsoles.id){
            caixaProdutosConsoles.appendChild(mostrarProdutos.constroiProdutoTodos(produto.imagem, produto.nome, produto.preco, produto.categoria))
        }
        if (produto.categoria == caixaProdutosStarWars.id){
            caixaProdutosStarWars.appendChild(mostrarProdutos.constroiProdutoTodos(produto.imagem, produto.nome, produto.preco, produto.categoria))
        }
        if (produto.categoria == caixaProdutosDiversos.id){
            caixaProdutosDiversos.appendChild(mostrarProdutos.constroiProdutoTodos(produto.imagem, produto.nome, produto.preco, produto.categoria))
        }
    })
}


// async function filtrarCategoria(categoria){
//     const listaApi = await conectaApi.listaProdutos(); // <--- pegando o json da DB
//     listaApi.filter(produto => produto.categoria == categoria)
// }

exibeCategorias();