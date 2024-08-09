
function calculosSimples(numero1, numero2) {
    const soma = (numero1 + numero2)
    return soma
}

function gerarResultado(event) {

    event.preventDefault()


    const numeroUm = parsefloat(document.getElementById('numeroUm').value)
    const numeroDois = parsefloat(document.getElementById('numeroDois').value)
    console.log(calculosSimples(numeroUm, numeroDois))
}

const resultado = calculosSimples
// alert (calculosSimples)
