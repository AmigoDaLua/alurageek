// Função pra conectar com a DB
async function listaProdutos(){
    const conexao = await fetch("https://amigodalua.github.io/db/Data/db.json");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}


//Função de busca de produtos
async function buscaProduto(termoBuscado){

    const listaApi = listaProdutos();
    const produtos = listaApi["produtos"]
    const conexao = await fetch(`https://amigodalua.github.io/db/Data/db.json?q=${termoBuscado}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

// Exportando um objeto com as funções 
export const conectaApi = {
    listaProdutos,
    buscaProduto
}

