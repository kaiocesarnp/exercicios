// 1. Utilize o npm para baixar o módulo to-space-case (https://www.npmjs.com/package/to-space-case). 
// Escreva na saída o resultado da chamada dessa função para as strings:

// InstitutoFederalDeBrasilia
// Tecnico_em_Desenvolvimento_de_Sistemas
// desenvolvimento.de.sistemas.web

var space = require('to-space-case');
console.log(space('InstitutoFederalDeBrasilia'));
console.log(space('Tecnico_em_Desenvolvimento_de_Sistemas'));
console.log(space('desenvolvimento.de.sistemas.web'));