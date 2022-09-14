/*Escreva uma função somaMatrizes que receba dois arrays bidimensionais de 
mesmo tamanho contendo números e retorne outro array bidimensional contendo a soma dos anteriores.

Por exemplo, se:

let a = [ [4,5,6], [10,20,30] ];
let b = [ [1,2,3], [5,8,20] ];
A chamada de somaMatrizes(a,b) deve retornar [ [ 5, 7, 9 ], [ 15, 28, 50 ] ]. */

let a = [ 
    [4,5,6], 
    [10,20,30] 
];
let b = [ 
    [1,2,3], 
    [5,8,20] 
];

 let resultado = somaMatrizes(a,b);
 console.log(resultado);

 function somaMatrizes(a,b){
     let res = []

     for(let i=0; i<a.length; i++){
         let novoArray = [];
         for(let j=0; j<a[i].length; j++){
            novoArray.push(a[i][j] + b[i][j])
         }
         res.push(novoArray)
     }
     return res;
 }

 

