console.log ("script.js funcionando")

function soma(numero1, numero2) {
    const resultado = numero1 + numero2
    return resultado

}

function gerarResultado(event) {
    event.preventDefault()
    
    const numeroUm = parseFloat(document.getElementById('numeroUm').value)
    const numeroDois = parseFloat(document.getElementById('numeroDois').value)
    const txtResultado = document.getElementById('txt-resultado')
    console.log(soma(numeroUm, numeroDois))
    const resultado = soma(numeroUm, numeroDois)
    txtResultado.innerText = `Resultado: ${resultado}`
}


document
    .getElementById('calculo')
    .addEventListener('submit', gerarResultado)

 
   