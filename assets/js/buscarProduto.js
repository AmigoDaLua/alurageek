import { conectaApi } from "./conectaApi.js";
import { mostrarProdutos } from "./mostrarProdutos.js";

// Selecionando botão de pesquisa
const botaoDePesquisa = document.querySelector("[data-botao-busca]");

// Ouvindo o botão para ativar a busca
botaoDePesquisa.addEventListener("click", evento => buscarProduto(evento))

// Função de busca
export default async function buscarProduto(evento){

    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-busca]").value;
    const busca = await conectaApi.buscaProduto(dadosDePesquisa);

    const lista = document.querySelector("[data-produtos]")


    // Garantindo que existem termos para pesquisar
    if (dadosDePesquisa != "") {

    //Limpando o container totalmente para 
    // exibir os resultados da busca
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }

        busca.forEach(elemento => lista.appendChild(
            mostrarProdutos.constroiProdutoTodos(elemento.imagem, elemento.nome, elemento.preco, elemento.categoria)));

        // Validando o resultado com base no |tamanho|
        // da lista de resultados (se |tamanho| = 0,
        // não há o que exibir -- não existem resultados!)
        if (busca.length == 0){
            lista.innerHTML = `<h3 style="margin: 0 auto; text-align: center; padding: 7rem">Nenhum produto corresponde à busca 🤔</h3>`
        }
    }
}



