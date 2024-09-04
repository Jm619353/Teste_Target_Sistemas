// Função para inverter uma palavra
function inverterPalavra(palavra) {
    return palavra.split('').reverse().join('');
  }

  const original = 'exemplo';
  const invertida = inverterPalavra(original);
  
  console.log(`Palavra original: ${original}`); 
  console.log(`Palavra invertida: ${invertida}`); 
  