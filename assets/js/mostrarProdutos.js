// Construtor de produto no formato da página "produtos" (todos)
function constroiProdutoTodos(imagem, nome, preco, categoria){
    const produto = document.createElement("div");
    produto.className = "produtos__produto";
    produto.innerHTML = `<img src="${imagem}" alt="Imagem do produto" class="produtos__produtoImagem">
                         <p class="produtos__produtoNome">${nome}</p>
                         <p class="produtos__produtoPreco">R$ ${preco}</p>
                         <p class="produtos__codigo">${categoria}</p>`
    return produto
}

// Construtor de produto no formato "produto editável"
function constroiProdutoEditavel(imagem, nome, preco, categoria, id){
    const produto = document.createElement("div");
    produto.className = "produtos__produto";
    produto.innerHTML = `
    <div class="produtos__produto">
        <div alt="Imagem do produto" class="produtos__produtoImagem produtos__produtoImagem--editavel" style="background: url(${imagem}) no-repeat center / cover">
            <input class="produtos__produtoIcone produtos__produtoIcone--apagar" type ="button" alt="Ícone apagar" id="${id}">
            <input class="produtos__produtoIcone produtos__produtoIcone--editar" alt="Ícone editar" type="button" id="${id}">
        </div>
        <p class="produtos__produtoNome">${nome}</p>
        <p class="produtos__produtoPreco">R$ ${preco}</p>
        <p class="produtos__codigo">${categoria}</p>
    </div>`

    return produto
}

// Exportando objeto com as funções
export const mostrarProdutos = {
    constroiProdutoTodos,
    constroiProdutoEditavel
}

