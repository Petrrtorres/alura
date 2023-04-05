console.log(`\nTrabalhando com condicionais \n`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 16;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";


console.log("\nDestinos possíveis: ")
console.log(listaDeDestinos + " \n") ;

listaDeDestinos.push(`Curitiba`); //adiciona item na lista  
console.log(listaDeDestinos + " \n") ;

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let i = 0;

while (i<3) {
    if (listaDeDestinos[i] == destino) {
      console.log("Destino existe!")
      break;
    } else {
      console.log("Destino não existe!")
    }
    i++
}

console.log(`\nLista de destinos atualizada: ${listaDeDestinos}\n`);

