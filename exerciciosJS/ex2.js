document.getElementById('form').addEventListener('submit', calcular)

let btn = document.getElementById('btn')

btn.addEventListener('click', calcular)

function calcular(e){
 e.preventDefault()
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)
    let nota3 = Number(document.getElementById('nota3').value)
    let peso1 = Number(document.getElementById('peso1').value)
    let peso2 = Number(document.getElementById('peso2').value)
    let peso3 = Number(document.getElementById('peso3').value)
    let mediaP = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)

 document.getElementById('resultado').innerHTML = `Média Ponderada = ${mediaP.toFixed(2)}`
}
