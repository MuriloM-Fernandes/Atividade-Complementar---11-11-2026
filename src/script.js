// # Exercícios: Funções e Entrada de Dados com `prompt()`

// **Instruções:** em cada exercício, crie uma função, peça os dados ao usuário com `prompt()` e mostre o resultado com `console.log()`.

// **Dica importante:** o `prompt()` sempre devolve texto (string). Para fazer contas, converta com `parseInt()` ou `parseFloat()`:

// ```javascript
// let idade = parseInt(prompt("Digite sua idade:"));
// ```

// ---

// ## Exercício 1: Saudação
// Crie uma função `saudacao(nome)` que mostre a mensagem `Olá, [nome]! Bem-vindo(a) à aula!`.
// Peça o nome do usuário com `prompt()` e chame a função.
function saudacao(nome) {
    nome =prompt("Qual seu nome?");
    return "Olá, " + nome + "!" + "Tenha um bom dia!";
}

console.log(saudacao(""));


// ## Exercício 2: O dobro
//Crie uma função `dobro(numero)` que **retorne** o dobro de um número.
// Peça um número ao usuário e mostre o resultado. 
function dobro(numero) {
    numero = prompt("Digite um número para saber seu dobro")
    return "O dobro é " + numero * 2
};
console.log(dobro(""));


// ## Exercício 3: Soma de dois números
// Crie uma função `soma(a, b)` que **retorne** a soma de dois números.
// Peça os dois números ao usuário com dois `prompt()`.
function soma(a, b) {
    a = Number(prompt ("Digite o primeiro número: "))
    b = Number(prompt ("Digite o segundo número: "))
    return "A soma desses Números é: " + (a + b)
};

console.log(soma(""));

// ## Exercício 4: Par ou ímpar
// Crie uma função `ehPar(numero)` que retorne `true` se o número for par e `false` se for ímpar.
// Peça um número ao usuário e mostre o resultado.
function ehPar(numero){
    numero = Number(prompt("Digite o número que deseja saber se é par ou impar"))
    if (numero % 2 === 0){
        return "O número é Par " + true;
    }
    else{
        return "O número é impar " + false;
    }  
};

console.log(ehPar(""));

// ## Exercício 5: Maior de dois
// Crie uma função `maiorDeDois(a, b)` que retorne o maior entre dois números.
// Peça os dois números ao usuário e mostre qual é o maior.
function maiorDeDois(a,b){
    a = Number(prompt ("Digite a primeira idade: "))
    b = Number(prompt ("Digite a segunda idade: "))
    if (a > b){
        return "A Maior Idade é " + a
    }
    else{
        return "A Maior Idade é " + b
    }
};

console.log(maiorDeDois(""));

// ## Exercício 6: Média de notas
// Crie uma função `calcularMedia(n1, n2, n3)` que retorne a média de três notas.
// Peça as três notas ao usuário e mostre a média.
function calcularMedia(n1, n2, n3){
    n1 = Number(prompt ("Digite a sua nota de Matemática: "))
    n2 = Number(prompt ("Digite a sua nota de História: "))
    n3 = Number(prompt ("Digite a sua nota de Geografia: "))
    return "A sua média de nota é: " + ((n1+n2+n3)/3).toFixed(2)
};

console.log(calcularMedia());
// ## Exercício 7: Área do retângulo
// Crie uma função `areaRetangulo(base, altura)` que retorne a área do retângulo.
// Peça a base e a altura ao usuário e mostre a área.
function areaRetangulo(base, altura) {
    base = Number(prompt("Qual a base do seu Retangulo? "))
    altura = Number(prompt("Qual a altura do seu Retangulo? "))
    return "A área do retângulo é de: " + (base * altura) + " cm²"
}
 console.log(areaRetangulo(""))
// ## Exercício 8: Celsius para Fahrenheit
// Crie uma função `celsiusParaFahrenheit(c)` que converta a temperatura de Celsius para Fahrenheit.
// Fórmula: `F = C * 1.8 + 32`
// Peça a temperatura em Celsius e mostre o resultado em Fahrenheit.
function celsiusParaFahrenheit(c){
    c = Number(prompt("Temperatura de Celsius para converter para Fahrenheit"))
    return "A temperatura Fahrenheit é: " + (c * 1.8 + 32) + "°F"
};

console.log(celsiusParaFahrenheit());

// ## Exercício 9: Desconto
// Crie uma função `calcularDesconto(preco, percentual)` que retorne o valor final do produto após o desconto.
// Exemplo: preço 200 com 10% de desconto = 180.
// Peça o preço e o percentual de desconto ao usuário.
function calcularDesconto(preco, percentual, desconto, valorFinal){
    preco = parseFloat(prompt("Qual o valor do Produto? "))
    percentual = parseFloat(prompt("Qual o percentual de desconto? "))
    desconto = (preco * percentual) / 100
    valorFinal = preco - desconto
    return `O valor do produto com desconto é: R$${valorFinal} e o valor economizado é R$${desconto}`
};

console.log(calcularDesconto(""));

// ## Exercício 10: Maioridade
// Crie uma função `verificarIdade(idade)` que retorne `"Maior de idade"` se a idade for 18 ou mais, e `"Menor de idade"` caso contrário.
// Peça a idade ao usuário e mostre o resultado.
function verificarIdade(idade){
    idade = Number(prompt("Qual sua Idade: "))
    if (idade >= 18){
        return "Maior de idade"
    }
    else{
        return "Menor de idade"
    };
}

console.log(verificarIdade(""))
