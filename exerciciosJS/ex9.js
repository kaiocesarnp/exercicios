document.getElementById('form').addEventListener('submit', calcular)
let btn = document.getElementById('btn')
btn.addEventListener('click', calcular)

function calcular(e){
 e.preventDefault()
    let raio = Number(document.getElementById('raio').value)
    let pi = 3.14
    let area = pi * (raio ** 2)
document.getElementById('resultado').innerHTML += `<br>A Área do triângulo é = ${area}` 
}