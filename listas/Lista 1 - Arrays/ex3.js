/*Escreva uma função calcula que receba um array e retorne um objeto contendo 
a soma e a média aritmética de todos seus elementos. 
Por exemplo, calcula( [4, 8, 20, 6] ), deve retornar 
o objeto { soma: 38, media: 9.5 }. 
A função deve funcionar para arrays de qualquer tamanho. */

function calcula(array){
    let w = 0;
    for(let i = 0; i < array.length; i++){
    w += array[i];
    }
    return{
    soma: w,
    media: w/array.length
    }
    }

    
    console.log(calcula([4, 8, 20, 6]));    