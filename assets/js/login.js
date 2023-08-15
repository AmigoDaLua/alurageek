const form = document.querySelector("[data-form]");
const botaoLogin = document.querySelector("[data-botao-login");

form.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    window.location.href="./produtos.html"
  
})