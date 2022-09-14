/*Escreva uma função que receba um array de objetos e escreva na tela 
de forma organizada todas as informações que ele contém. */


function arrayRecebeObj(obj) {
    for(let usuario of obj){
        console.log('nome: ',usuario.nome);
        console.log('email: ',usuario.email);
        console.log('categorias: ');
        for(let categorias of usuario.categorias){
            console.log(categorias,'');
            
        };
        
    };  

};

let usuarios = [
    {
    nome: 'Rodrigo Melo Fernandes',
    email: 'rodrigo1999@zzzmail.com',
    categorias: ['premium', 'admin', 'proprietario'],
    },
    {
    nome: 'Letícia Goncalves Azevedo',
    email: 'lga@dayrep.com',
    categorias: ['admin'],
    },
    { 
    nome: 'Pedro Almeida Oliveira',
    email: 'poliv3@armyspy.com',
    categorias: ['premium', 'promocao'],
    }

];

console.log(arrayRecebeObj(usuarios));