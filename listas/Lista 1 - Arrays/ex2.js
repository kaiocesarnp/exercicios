/*Partindo do array anterior, acrescente mais dois elementos ao seu final usando push. 
Depois, escreva um código que resulte em uma saída parecida com a abaixo, 
construída a partir do array com a estrutura for(... ; ... ; ...). 
Depois refaça o mesmo loop de mais duas maneiras, usando for ... in e for ... of.

- ciano
- verde
- amarelo
- vermelho
- azul */

let cores = ['ciano', 'verde', 'amarelo'];
cores.push('vemelho' , 'azul');

console.log(cores);
//console.log(cores.length);

for(let k=0; k < cores.length; k++){
console.log(cores[k]); 
}

for(let k in cores){
console.log(cores[k]); 
}

for(let k of cores){
console.log(k); 
}