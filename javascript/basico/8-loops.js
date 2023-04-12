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
const destino2 = "Sergipe";


console.log("\nDestinos possíveis: ")
console.log(listaDeDestinos + " \n") ;

listaDeDestinos.push(`Curitiba`); //adiciona item na lista  
console.log(listaDeDestinos + " \n") ;

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let i = 0;

while (i<3) {
    if (listaDeDestinos[i] == destino) {
      console.log("Destino existe!");
      break;
    } else {
      console.log("Destino não existe!");
      break;
    }
    i++
}

console.log(`\nLista de destinos atualizada: ${listaDeDestinos}\n`);


for (let cont=0; cont<3; cont++) {
  if (listaDeDestinos[i] == destino2) {
    console.log("Destino existe!");
    break;
  } else {
    console.log("Destino não existe!");
    break;
  }
}
