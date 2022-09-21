document.getElementById('form').addEventListener('submit', calcular)
let btn = document.getElementById('btn')
btn.addEventListener('click', calcular)

function calcular(e){
 e.preventDefault()
    let deposito = Number(document.getElementById('deposito').value)
    let taxa = Number(document.getElementById('taxa').value)
    let rendimento = deposito * (taxa/100)
    let vtotal = deposito + rendimento
 document.getElementById('resultado').innerHTML = `<br>Rendimento = ${rendimento}`
 document.getElementById('resultado').innerHTML += `<br>Valor Total = ${vtotal}`
}
