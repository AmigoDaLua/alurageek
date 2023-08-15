
//Criando uma área de produtos clicável
const caixaProdutos = document.querySelector(".produtos__caixaProdutos")
    caixaProdutos.addEventListener('click', (e)=> {

    // Se o produto clicado tiver a classe especificada, i.e., se for um "ícone apagar"
    if (e.target.classList.contains("produtos__produtoIcone--apagar")){
        // Chamando função que deleta o produto com a "id" especificada (ela está no próprio ícone)
        deletaProdutoDB(e.target.id)
    }
 })

 // Função deleta produto da DB
async function deletaProdutoDB(id) {

    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: null 
      })
      

    if(!conexao.ok) {
        throw new Error("Não foi possível apagar o produto :/");
    }

    const conexaoConvertida = await conexao.json();

    alert("Produto apagado com sucesso :)")

    return conexaoConvertida;
}