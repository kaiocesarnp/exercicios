document.getElementById('form').addEventListener('submit', calcular)
let btn = document.getElementById('btn')
btn.addEventListener('click', calcular)

function calcular(e){
 e.preventDefault()
    let salario = Number(document.getElementById('salario').value)
    let percentual = Number(document.getElementById('percentual').value)
    let aumento = salario * percentual /100
    let novoSalario = salario + aumento

document.getElementById('resultado').innerHTML = `Aumento = ${aumento.toFixed(2)}`
document.getElementById('resultado').innerHTML += `<br>Novo Salario = ${novoSalario.toFixed(2)}`
}
