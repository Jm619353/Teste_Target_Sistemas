
const original = 'exemplo';
const invertida = inverterPalavra(original);

// Função para inverter uma palavra
function inverterPalavra(original) {
    return original.split('').reverse().join('');
  }
  console.log(`Palavra original: ${original}`); 
  console.log(`Palavra invertida: ${invertida}`); 
  
