const caixaProdutos = document.querySelector(".produtos__caixaProdutos");
const containerEditarProdutos = document.querySelector(".produtos__container");
var idProduto;


   //Criando uma área clicável de produtos
    caixaProdutos.addEventListener('click', (e)=> {

        // Se o produto clicado tiver a classe especificada, i.e., se for um "ícone editar"
        if (e.target.classList.contains("produtos__produtoIcone--editar")){
            // Chamando função que edita o produto com a "id" especificada (ela está no próprio ícone)
            idProduto = e.target.id;

            // Trocando a página para o "modo edição"
            containerEditarProdutos.innerHTML = `
                <div class="form__editar">
                <h2 class="novoProduto__titulo">Editar produto</h2>
                <form action="#" class="novoProduto__form" data-edita-produto>
                    <div class="novoProduto__caixa">
                        <label class="novoProduto__label" for="imagem">URL da imagem</label>
                        <input class="novoProduto__campo" id="imagem" type="text" required>
                    </div>
                    <div class="novoProduto__caixa">
                        <label for="categoria" class="novoProduto__label">Categoria</label>
                        <input class="novoProduto__campo" id="categoria" type="text" required>
                    </div>
                    <div class="novoProduto__caixa">
                        <label for="nome" class="novoProduto__label">Nome do produto</label>
                        <input class="novoProduto__campo" id="nome" type="text" minlength="3" maxlength="20" required>
                    </div>
                    <div class="novoProduto__caixa">
                        <label for="preco" class="novoProduto__label">Preço do produto</label>
                        <input class="novoProduto__campo" id="preco" type="number" step="0.01" min="0.01" required>
                    </div>
                    <div class="novoProduto__caixa novoProduto__caixa--descricao">
                        <label for="descricao" class="novoProduto__label novoProduto__label--descricao">Descrição do produto</label>
                        <textarea cols="30" rows="20" class="novoProduto__campo novoProduto__campo--descricao" id="descricao" type="textarea" minlength="3" maxlength="150" required data-descricao></textarea>
                    </div>
                    <div class="editarProdutos__botoesEditar">
                    <button class="editarProdutos__botaoEditar">Editar produto</button>
                </form>
                        <button class="novoProduto__botaoCancelar" onclick="window.location.href = 'produtos.html'">Cancelar</button>
                    </div>
            </div>`
        }
        const form = document.querySelector("[data-edita-produto]");

        preencherForm();

        // Estamos na tela de edição?
        form.addEventListener("submit", (e) => {
            //Evitando o recarregamento da página
            e.preventDefault();

            // Coletando as informações dos campos
            const imagem = e.target.elements["imagem"].value;
            const categoria = e.target.elements["categoria"].value;
            const nome = e.target.elements["nome"].value;
            const preco = e.target.elements["preco"].value;
            const descricao = e.target.elements["descricao"].value;
        
            editaProdutoDB(imagem, categoria, nome, preco, descricao, idProduto);

    })})

    // Função para preencher o form com os valores do item (diretamente da DB!)
    async function preencherForm(){

        const conexao = await fetch(`https://amigodalua.github.io/db/Data/db.json${idProduto}`);
        const conexaoConvertida = await conexao.json();
        
        // Puxando os campos do form
        var campoImagem = document.querySelector("#imagem");
        var campoCategoria = document.querySelector("#categoria");
        var campoNome = document.querySelector("#nome");
        var campoPreco = document.querySelector("#preco");
        var campoDescricao = document.querySelector("#descricao");

        // Copiando os valores do objeto na DB para os campos do form
        campoImagem.value = conexaoConvertida.imagem;
        campoCategoria.value = conexaoConvertida.categoria;
        campoNome.value = conexaoConvertida.nome;
        campoPreco.value = conexaoConvertida.preco;
        campoDescricao.value = conexaoConvertida.descricao;

    }

// Função editar na DB
async function editaProdutoDB(imagem, categoria, nome, preco, descricao,id) {

    // Acessando DB com <id> do produto
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        // Enviando requisição para alterar um objeto existente
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "imagem": `${imagem}`,
            "categoria": `${categoria}`,
            "nome": `${nome}`,
            "preco": `${preco}`,
            "descricao": `${descricao}`
          })
        }) 
          

    if(!conexao.ok) {
        throw new Error("Não foi possível apagar o produto :/");
    }

    const conexaoConvertida = await conexao.json();

    alert("Produto editado com sucesso :)")

    return conexaoConvertida;
}



