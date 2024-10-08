
function calculateValue(){

    const inputPrice = document.querySelector("#price-kg");
    const inputCliente = document.querySelector("#kg");
    const valueTotal = document.querySelector(".valor-pagar");
    
    const price = Number(inputPrice.value);
    const quilo = Number(inputCliente.value);
    
    let valor =(price / 1000) * quilo;
    
    const valorFormatado = new Intl.NumberFormat('pt-BR', {
        style:"currency",
        currency:"BRL"
    }).format(valor);

    valueTotal.innerHTML = "Valor a pagar :" + valorFormatado;
    
}