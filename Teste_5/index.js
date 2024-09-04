// Palavra pré-determinada
const original = 'paralelepipedo';
const invertida = inverterPalavra(original);

function inverterPalavra(original) {
  // Inicializa a string invertida como vazia
  let palavraInvertida = ''; 
  
  // Percorre a palavra de trás para frente
  for (let i = original.length - 1; i >= 0; i--) {
    // Adiciona cada caractere ao final da nova string
    palavraInvertida += original[i]; 
  }
  
  return palavraInvertida;
}

  console.log(`Palavra original: ${original}`); 
  console.log(`Palavra invertida: ${invertida}`); 
  
