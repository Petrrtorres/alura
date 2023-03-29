console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
      `Salvador`, 
      `São Paulo`, 
      `Rio de Janeiro`
  );

  let idadeComprador = 15;
  let estaAcompanhada = false;


  console.log("Destinos possíveis")
  console.log(listaDeDestinos) + "\n";
  
  listaDeDestinos.push(`Curitiba`); //adiciona item na lista  
  console.log(listaDeDestinos);
  
  if (idadeComprador >= 18) {
      console.log("Comprador maior de idade");
      listaDeDestinos.splice(1,1); //retirar a partir da posição e o número de elementos deletados
  } else if (estaAcompanhada == true) {
          console.log("Pode comprar.");
        listaDeDestinos.splice(1,1); //retirar a partir da posição e o número de elementos deletados
        } else {
        console.log("Comprador não é maior de idade. Não se pode vender");
       }
  
  console.log("Lista de destinos atualizada: " + listaDeDestinos);
  
