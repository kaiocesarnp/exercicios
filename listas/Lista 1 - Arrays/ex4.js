/*Modifique a função anterior para que ela seja chamada com um número variável 
de argumentos numéricos, ao invés de um array. Por exemplo, calcula(4, 8, 20, 6), 
deve retornar o objeto { soma: 38, media: 9.5 }. */

function calcula(...args){
    let w = 0;
    for(let i = 0; i < args.length; i++){
    w += args[i];
    }
    return{
    soma: w,
    media: w/args.length
    }
    }
    
    let k = calcula(4, 8, 20, 6);
    console.log(k);
    