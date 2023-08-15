import buscarProduto from "./buscarProduto.js";

const cabecalhoContainer = document.querySelector(".cabecalho__container")
const botaoBuscar = document.querySelector("[data-botao-busca-mini]")


botaoBuscar.addEventListener("click", ()=>{

    cabecalhoContainer.innerHTML = `            
    <div class='cabecalho__caixaBusca cabecalho__caixaBusca--mini'>
        <input type='search' id='busca' class='cabecalho__busca' placeholder='O que buscar?' minlength='3' data-busca>
        <img src='./assets/img/busca.svg' alt='Ícone de busca' class='cabecalho__buscaBotao' data-botao-busca>
    </div>
    <img src='./assets/img/icone_cancelar.svg' alt='Ícone de Cancelar' class='cabecalho__botaoCancelar' onClick="window.location.reload()" data-botao-voltar>`

    // Adicionar função de PESQUISA ao botão novo que é criado!
    const botaoDePesquisa = document.querySelector("[data-botao-busca]");
    botaoDePesquisa.addEventListener("click", evento => buscarProduto(evento))
    
})












