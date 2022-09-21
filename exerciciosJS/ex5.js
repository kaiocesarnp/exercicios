document.getElementById('form').addEventListener('submit', calcular)
let btn = document.getElementById('btn')
btn.addEventListener('click', calcular)

function calcular(e){
 e.preventDefault()
    let salario = Number(document.getElementById('salario').value)
    let grat = salario * (6/100)
    let imp = salario * (11/100)
    let novosal = salario + grat - imp
 document.getElementById('resultado').innerHTML += `<br>Novo Salario = ${novosal}` 
}
