export function valida(input) {
    const tipoInput = input.dataset.tipo

    if(validadores[tipoInput]) {
      validadores[tipoInput](input)
    }
}

const validadores = {
    dataNascimento:input => validaDataNascimento(input)
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value);
    let menagem = '';

    if(!maiorQue18(dataRecebida)) {
    mensagem = 'Você deve ser maior que 18 anos para o cadastro.'
  }

    input.setCustomValidity(mensagem);
}

function maiorQue18 (data) {
    const dataAtual = new Date();

    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCData());

    return dataMais18 <= dataAtual; 
}