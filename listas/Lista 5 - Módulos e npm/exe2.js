// 2. Utilize o arquivo package.json abaixo para instalar os pacotes adicionais 
// listados nas dependências (sem digitar os nomes desses pacotes na linha de comando):

// {
//     "name": "lista",
//     "version": "1.0.0",
//     "description": "Desenvolvimento de Sistemas Web ",
//     "dependencies": {
//         "to-capital-case": "^1.0.0",
//         "to-constant-case": "^1.0.0",
//         "to-space-case": "^1.0.0"
//     }
// }
// Teste os novos módulos instalados (to-capital-case e to-constant-case) com as mesmas strings da questão anterior.

var capital = require('to-capital-case');
console.log(capital('InstitutoFederalDeBrasilia'));
console.log(capital('Tecnico_em_Desenvolvimento_de_Sistemas'));
console.log(capital('desenvolvimento.de.sistemas.web'));

var constant = require('to-constant-case');
console.log(constant('InstitutoFederalDeBrasilia'));
console.log(constant('Tecnico_em_Desenvolvimento_de_Sistemas'));
console.log(constant('desenvolvimento.de.sistemas.web'));