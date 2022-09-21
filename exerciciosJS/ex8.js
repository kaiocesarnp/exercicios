document.getElementById('form').addEventListener('submit', calcular)
let btn = document.getElementById('btn')
btn.addEventListener('click', calcular)

function calcular(e){
 e.preventDefault()
    let base = Number(document.getElementById('base').value)
    let altura = Number(document.getElementById('altura').value)
    let area = (base * altura) / 2
 document.getElementById('resultado').innerHTML += `<br>A Área do triângulo é = ${area}` 
}