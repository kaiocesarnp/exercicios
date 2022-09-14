/* Escreva uma função somaArrays, a qual receba dois arrays de mesmo tamanho (qualquer) 
e retorne um array, também de mesmo tamanho, em que cada elemento 
é a soma dos valores correspondentes das entradas.

Por exemplo, se:

let a = [ 4, 5, 10 ];
let b = [ 2, 3, 8 ];
A chamada de somaArrays(a,b) deve retornar o array [ 6, 8, 18 ]. */

function somaArrays(c, d){
    let result = []
    for (let i = 0; i < c.length; i++){
    result.push(c[i] + d[i])
    }
    return result;
    }
    
    let a = [ 5, 7, 13 ];
    let b = [ 3, 8, 23 ];
    let c = somaArrays(a,b);
    console.log(c);
    
    