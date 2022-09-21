document.getElementById('form').addEventListener('submit', calcular)

let btn = document.getElementById('btn')

btn.addEventListener('click', calcular)

function calcular(e){
    e.preventDefault()
        let salario = Number(document.getElementById('salario').value)
        let novoSalario = salario * 1.35
    document.getElementById('resultado').innerHTML = `Novo Salário = ${novoSalario.toFixed(2)}`
}
