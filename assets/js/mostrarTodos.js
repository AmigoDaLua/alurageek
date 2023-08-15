import { conectaApi } from "./conectaApi.js";
import { mostrarProdutos } from "./mostrarProdutos.js";

// Função para exibir todos os produtos da DB
async function listarTodosOsProdutos(){

    const caixaProdutos = document.querySelector("[data-caixa-todos]");

    try{
        const listaApi = await conectaApi.listaProdutos();
        const produtos = listaApi["produtos"];

        produtos.forEach(elemento => 
            caixaProdutos.appendChild(
            mostrarProdutos.constroiProdutoEditavel(elemento.imagem, elemento.nome, elemento.preco, elemento.categoria, elemento.id)))
       } catch {
        caixaProdutos.innerHTML = `<h2>Não foi possível carregar a lista de produtos :/</h2>`;
       }
}

listarTodosOsProdutos();