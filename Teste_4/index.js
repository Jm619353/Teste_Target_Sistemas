// objetos com o faturamento mensal de cada estado
const faturamento = {
    SP: 'R$67.836,43',
    RJ: 'R$36.678,66',
    MG: 'R$29.229,88',
    ES: 'R$27.165,48',
    Outros: 'R$19.849,53'
};

// Função para converter o valor de string para número
function converterParaNumero(valor) {
    return parseFloat(valor.replace(/[^\d,]/g, '').replace('.', '').replace(',', '.'));
}

// Convertendo os valores de string para número
const valoresNumericos = {};
for (const estado in faturamento) {
  valoresNumericos[estado] = converterParaNumero(faturamento[estado]);
}

// Calculando o faturamento total
const faturamentoTotal = Object.values(valoresNumericos).reduce((acc, valor) => acc + valor, 0);

// Calculando e exibindo o percentual de representação de cada estado
for (const estado in valoresNumericos) {
  const percentual = (valoresNumericos[estado] / faturamentoTotal) * 100;
  console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
}