/*Escreva uma função que receba um array bidimensional e escreva-o na tela 
como uma tabela com linhas e colunas separadas por tabulação ("\t").

Por exemplo:

Fred    Barney
George  Jane    Elroy
Homer   Marge   Bart
Dica: para escrever na tela sem quebra de linha, use process.stdout.write no lugar de console.log. */

function array(elementos) {
    for(let linha of elementos){
        console.log(` `);
        for(let pessoa of linha){
            process.stdout.write(`${pessoa}`);
            process.stdout.write("\t");          
        }        
    }

}

let familia = [
    [ "Fred", "Barney" ],
    [ "George", "Jane", "Elroy" ],
    [ "Homer", "Marge", "Bart" ]
];
console.log(array(familia));