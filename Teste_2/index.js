// Valor
num = 377;
//Função 
function fibonacci(num) {
    if (num < 0) return false;

    let a = 0;
    let b = 1;

    if (num === a || num === b) return true;

    while (b <= num) {
        let soma = a + b;
        a = b;
        b = soma;

        if (b === num) return true;
    }
    return false;
}

//Verificação
if (fibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci`);
}else{
    console.log(`${num} não pertence à sequência de Fibonacci`);

}