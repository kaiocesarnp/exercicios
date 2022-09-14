/*Escreva uma função ehPalindromo que receba uma string e retorne um 
valor booleano (true ou false), dependendo se a string é 
ou não idêntica quando lida de trás para frente. */


function ehPalindromo(str) {     
    for(let i = 0; i < str.length / 2; i++){
        if (str[i] != str[str.length - i - 1])
        return false; 
    } 
    return true;
}
console.log(ehPalindromo("operadora"));
console.log(ehPalindromo("reviver"));
console.log(ehPalindromo("pedro"));