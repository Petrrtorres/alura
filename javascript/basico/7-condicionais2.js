console.log(`\nTrabalhando com condicionais \n`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

let idadeComprador = 16;
let estaAcompanhada = true;


console.log("Destinos possíveis")
console.log(listaDeDestinos + " \n") ;

listaDeDestinos.push(`Curitiba`); //adiciona item na lista  
console.log(listaDeDestinos + " \n") ;

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Comprador maior de idade ou está acompanhado. Boa viagem!");
  listaDeDestinos.splice(1, 1); //retirar a partir da posição e o número de elementos deletados
} else {
  console.log("Comprador não é maior de idade. Não se pode vender");
}

console.log("Lista de destinos atualizada: " + listaDeDestinos + "\n");

