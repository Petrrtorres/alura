console.log(`Trabalhando com listas`);

const listaDeDestinos = new Array(
      `Salvador`, 
      `São Paulo`, 
      `Rio de Janeiro`
  );

  console.log(listaDeDestinos);

  listaDeDestinos.push(`Curitiba`); //adiciona item na lista

  console.log(listaDeDestinos);

  listaDeDestinos.splice(1,1); //retirar a partir da posição e o número de elementos deletados
  console.log(listaDeDestinos);

  console.log(listaDeDestinos[1]);