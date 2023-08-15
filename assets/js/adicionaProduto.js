const form = document.querySelector("[data-novo-produto]");

// Ouvindo form que terá os dados do novo produto
form.addEventListener("submit", (e) => {
    //Evitando o recarregamento da página
    e.preventDefault();

    // Coletando as informações dos campos
    const imagem = e.target.elements["imagem"].value;
    const categoria = e.target.elements["categoria"].value;
    const nome = e.target.elements["nome"].value;
    const preco =  e.target.elements["preco"].value;
    const descricao = e.target.elements["descricao"].value

    salvaProdutoDB(imagem, categoria, nome, preco, descricao);

})

// Salvando produto na DB
async function salvaProdutoDB(imagem, categoria, nome, preco, descricao) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            imagem: imagem,
            categoria: categoria,
            nome: nome,
            preco: preco,
            descricao: descricao
            })
    });

    if(!conexao.ok) {
        throw new Error("Não foi possível salvar o produto :/");
    }

    const conexaoConvertida = await conexao.json();

    alert("Produto cadastrado com sucesso :)")

    return conexaoConvertida;
}
