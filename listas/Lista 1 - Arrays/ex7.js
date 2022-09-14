/*Escreva uma função 'inverte' que retorna o inverso de uma string dada. 
Utilize métodos de string e array, sem nenhuma estrutura de loop.

Ex.: O resultado de inverte('Abacaxi') deve ser ixacabA. */

function inverte(palav) {
    let a = palav.split('');
    let b = a.reverse();
    let c = b.join('');
    return c;
    }
    
    let x = 'cabelo';
    console.log(inverte(x));
    
    