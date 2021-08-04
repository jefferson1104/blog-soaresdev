---
title: Javascript - tipos de variaveis
description: Conheça os tipos de variáveis mais comuns utilizadas no javascript.
date: 2021-07-30 12:45:32
image: /assets/img/javascript/javascript.jpg
category: js
background: '#ddcd34'
---

![banner javascript](../assets/img/javascript/banner-01.jpeg)

Uma variável serve para você guardar um valor, como um número que podemos usar em uma operação de adição, ou uma sequência de texto que possamos usar como parte de uma oração. Mas uma coisa especial a respeito das variáveis no javascript é que existem formas diferentes de declarar.

## Var ou Let

`var` ou `let` é um tipo de variavel que podemos trocar o valor.

```javascript
let name = 'Super man'
let age = 80

var power = 'Super força'
var color = 'azul'

console.log(
  `
    Nome: ${name}
    Idade: ${age}
    Poder: ${power}
    Cor: ${color}
  `
)
```

> Com o **console.log()** você pode debugar os valores das variáveis.

Agora você pode estar pensando "por que precisamos de duas palavras-chave para definir variáveis? Por que **var** e **let**?".

As razões são um tanto históricas. Quando o JavaScript foi criado, havia apenas var. Isso funciona basicamente bem na maioria dos casos, mas tem alguns problemas na maneira como funciona — seu design pode ser confuso ou totalmente irritante. Portanto, let foi criada nas versões modernas de JavaScript, uma nova palavra-chave para criar variáveis que funcionam de maneira um pouco diferente para var, corrigindo seus problemas no processo.

para saber mais sobre isso confira a [documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let)

## const

A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

```javascript
const email = 'jhondoe@hotmail.com'
console.log(`E-mail: ${email}`)
```

## Tipos de variáveis

#### Números

Você pode armazenar números em variáveis, tanto números inteiros, como por exemplo 30 (também chamados de integers) como números decimais, por exemplo 2.456 (também chamados de floats ou floating point numbers). Você não precisa declarar tipos de variáveis no JavaScript, diferentemente de outras linguagens de programação. Quando você atribui a uma variável o valor em número, você não inclui as **aspas**.

```javascript
let minhaIdade = 17
```

#### Strings

Strings são sequências de texto. Quando você dá a uma variável um valor em texto (string), você precisa envolver o texto em aspas simples ou duplas; caso contrário, o JavaScript vai tentar interpretá-lo como sendo outro nome de variável.

```javascript
let textoComum = 'Seja muito bem vindo ao blog soaresDev'
```

#### Booleans

Booleans são valores verdadeiro/falso (true/false) — eles podem ter dois valores, true (verdadeiro) ou false (falso). São geralmente usados para verificar uma condição, que em seguida o código é executado apopriadamente. Por exemplo, um caso simples seria:

```javascript
let estouVivo = true
```

Enquanto na realidade seria utlizado mais da seguinte forma:

```javascript
let teste = 6 < 3
```

Esse exemplo está usando o operador "menor que" (<) para testar se 6 é menor que 3. Como você pode esperar, irá retornar false (falso), porque 6 não é menor que 3!

> TABELA DE TIPOS BOOLEANOS
> **FALSO**:
> false
> 0
> [ ]
> " "
> ' '
> null
> NaN
> **VERDADEIRO**:
> true
> 1
> -1
> 0.5
> "0"

Outros exemplos

```javascript
// TRUE: coloque false para a mensagem nao aparecer no console log
const driving = true
if(driving) {
  console.log('Ele nao pode dirigir')
}

// !NEGAÇÃO: coloque 1 para a mensagem nao aparecer no console log
const balance = 0
if(!balance) {
  console.log('Ele nao tem saldo')
}


// força o valor a true ou false de acordo com a tabela
const exampleString = 'Eu sou hacker'
console.log('exampleString', !!exampleString)

// negação
console.log('negação', !exampleString)

// negação + forçar a bool
console.log(
  'negação + ',
  ! (!!exampleString)
)
```

#### Arrays

Um array é um único objeto que contém valores múltiplos inseridos entre colchetes e separados por vírgulas.

```javascript
let nomeDoArray = ['soaresdev', 'frontend', 'backend']
let numeros = [10, 15, 40]
```

Uma vez que esses arrays estejam definidos, você pode acessar cada um de seus valores através de sua localização dentro do array. Tente essas linhas:

```javascript
console.log(nomeDoArray[0])
// deve retornar 'soaresdev'

console.log(nomeDoArray[2])
// deve retornar 'backend'
```

> Com o **console.log()** você pode debugar os valores das variáveis.

Os colchetes especificam um valor do índice correspondente à posição do valor que você deseja retornado. Você talvez tenha notado que os arrays em JavaScript são indexados a partir do **zero**: o primeiro elemento está na posíção **0** do índice.

#### Objetos

Em programação, um objeto é uma estrutura de código que representa um objeto da vida real. Você pode ter um simples objeto que representa um estacionamento de carro contendo informações sobre sobre sua largura e comprimento, ou você poderia ter um objeto que representa uma pessoa, e contém dados sobre seu nome, altura, peso, que idioma ela fala, como dizer olá a ela, e mais.

```javascript
let cachorro = {
  nome: 'Thor',
  raca: 'PitBull',
  idade: 6
}
```

Para obeter a informação armazenada no objeto, você pode usar a seguinte sintaxe:

```javascript
cachorro.nome
// o valor é: Thor
```

## Digitação permissiva

JavaScript é uma **"dynamically typed language"**, o que significa que, diferente de outras linguagens, você não precisa especificar que tipo de dados uma variável irá conter (ex.: números, strings, arrays, etc).

Por exemplo, se você declarar uma variável e dar a ela um valor encapsulado em **aspas**, o navegador irá tratar a variável como sendo uma **string** (cadeia de texto).

```javascript
let minhaString = 'Olá'
```

Irá continuar sendo uma string, mesmo que dentro das apas contenha um número, então seja cuidadoso:

```javascript
let numberOne = '500'
typeof(numberOne)
// opa, isso continua sendo uma string

let numberTwo = 500
typeof(numberTwo)
// agora isso é um número
```

Tente inserir as linhas acima em seu console uma por uma, e veja quais são os resultados. Você notará que estamos usando uma função especial chamada **typeof()** — ela irá retornar o tipo de dado da variável que você passar. Da primeira vez que for executada, deve retornar string, como naquele ponto a variável **numberOne** contém uma string, '500'. Dê uma olhada e veja o que é retornado da segunda vez que você a utilizar.

![digitação permissiva](../assets/img/javascript/javascript-digitacao-permissiva.png)

## Concatenando variáveis

Concatenar é uma palavra chique da programação que significa **"colocar junto"**. Para colocar strings juntas em JavaScript, usamos o operador (+), o mesmo usamos para adicionar números, mas neste contexto é algo diferente. Ou também utilizamo o modelo de **template literals**, veja alguns exemplos abaixo:

```javascript
let one = 'Hello, ';
let two = 'how are you?';

let resultado = one + two;

// resultado: Hello, how are you?

```

O resultado disso é uma variável chamada **resultado**, que contém o valor "Hello, how are you?".


Veja agora um exemplo utilizando o modelo de template literals.

```javascript
let firstname = "Jefferson"
let lastname = "Soares"
let completeName = `Oi eu sou ${firstname} ${lastname}`

// completeName: Oi eu sou Jefferson Soares
```
O resultado disso é uma variável chamada **completeName**, que contém o valor "Oi eu sou Jefferson Soares".

#### Números x strings
Então o que acontece quando tentamos adicionar (ou concatenar) uma string e um número?

```javascript
let myString = 'Front'

let myNumber = 242

let result = myString + myNumber

// result: Front242
```
Você pode esperar um erro disto, mas funciona correto. Tentando representar  uma string como um número, realmente não faz sentido. Mas representando um número como string, faz. Então o navegador espertamente converte o número em string e concatena as duas.

##### Converter number e string
Se você tem uma variável numérica que precisa converter em string, mas não mudar completamente.

O objeto **Number** converterá qualquer coisa passada em um número, se for possível.

```javascript
var myString = '123';
var myNum = Number(myString);
typeof(myNum);

// a variável myNum retorna: 123
```

Por outro lado, todo número tem um método chamado **toString()** que converterá para a string equivalente.

```javascript
var myNum = 123;
var myString = myNum.toString();
typeof myString;

// a variável myString retorna: '123'
```

Estas construções podem ser bem úteis em algumas situações. Por exemplo, se o usuário colocar um número em um campo de texto, isso será uma string. Entretanto, se você quiser adicionar este número a algo, você precisa que seja um número, então você pode passar isto através do **Number()** para poder manipular.

## Null e Undefined

**UNDEFINED**: variavel que não foi definida, que nunca recebeu um valor ou que nao existe

**NULL**: significa que o valor é vazio, que nao existe um valor para determinada variavel

```javascript
let exampleOne
console.log(exampleOne, typeof(exampleOne))
```

```javascript
let exampleTwo = null
console.log(exampleTwo, typeof(exampleTwo))
```
