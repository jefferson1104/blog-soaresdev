---
title: Javascript spread operator Parte 1
description: Aprenda a utilizar o Spread Operator do javascript (...) com este tutorial que vai de nivel iniciante ao avançado, esse tutorial é a parte 1 de 2.
date: 2021-10-19 16:00:00
image: /assets/img/javascript/spread-operator-js.png
category: js
background: '#ddcd34'
---

![spread-operator](../assets/img/javascript/spread-operator-js.png)

## Introdução
O Spread Operator (...) foi introduzido pela primeira vez no ES6. Ele rapidamente se tornou um dos recursos mais populares.
Tanto que, apesar de funcionar apenas em Arrays, a proposta foi estender suas funcionalidades para Objetos. Esse recurso
foi finalmente introduzido no ES9.

O objetivo deste tutorial, que é dividido em duas partes, é mostrar por que o operador spread deve ser usado, como ele
funciona e mergulhar em seus usos, do mais básico ao mais avançado.

## O que vamos aprender
#### Parte 1
- Por que utilizar o Spread Operator
- Clonando Arrays/Objetos
- Convertendo estruturas Array-like para Array
- Spread Operator como argumento
- Adicionando elementos em Arrays/Objetos
- Mesclando Arrays/Objetos

#### Parte 2
- Desestruturando elementos aninhados
- Adicionando propriedades condicionais
- Short circuiting
- Valores de desestruturação padrão
- Propriedades padrão

## Por que você deve utilizar o Spread Operator
Depois de ler a lista anterior, você deve estar pensando em algo como: "mas o javascript tem funções para fazer todas
essas coisas... por que eu usaria o spread operator?". Permita-me te apresentar a **imutabilidade**.

> **Imutabilidade** - imutável ao longo do tempo ou incapaz de ser alterado.

No desenvolvimento de software, usamos o termo imutável para nos referir a valores cujo estado não pode mudar com o tempo.
Na verdade, a maioria dos valores que normalmente usamos (valores primitivos, como Strings, Integers etc.) são imutáveis.

No entanto, JavaScript tem um comportamento peculiar quando se trata de Arrays e Objetos; eles são, de fato, mutáveis.
Isso pode se tornar um grande problema. Aqui está um exemplo que ilustra o porquê:
```javascript
const mySquirtle = {
  name: 'Squirtle',
  type: 'Water',
  hp: 100
};

const anotherSquirtle = mySquirtle;
anotherSquirtle.hp = 0;

console.log(mySquirtle);

//Result: { name: 'Squirtle', type: 'Water', hp: 0 }
```

Como você pode ver no código acima, temos um Squirtle. Nosso Squirtle tem um HP de 100, já que acabamos de visitar o
Centro Pokémon.

Como queremos outro Squirtle, declaramos a variável anotherSquirtle, atribuindo nosso Squirtle original como seu valor.
Depois de uma batalha árdua, outro Esquilo é derrotado. Portanto, acessamos o HP de outro Squirtle e o alteramos para 0.
A próxima etapa é verificar nosso Squirtle original. Nós console.log e ...

Espere o que? O HP do nosso Squirtle original caiu para 0! Como isso pode ser? O que aconteceu com nosso pobre Squirtle?
A mutação do JavaScript aconteceu. Deixe-me explicar o que está acontecendo.

Quando criamos a variável anotherSquirtle e atribuímos nosso Squirtle original como seu valor, o que realmente fizemos
foi atribuir uma referência à localização da memória do objeto Squirtle original. Isso ocorre porque os Arrays e objetos
JavaScript são tipos de dados de referência. Ao contrário dos tipos de dados primitivos, eles apontam para o endereço da
memória onde o objeto/array real está armazenado.

Para facilitar o entendimento, você pode imaginar os tipos de dados de referência como ponteiros para uma variável global.
Ao alterar o valor de um tipo de dado de referência, o que estamos realmente fazendo é alterar o valor da variável global.

Isso significa que, quando alteramos o valor hp de anotherSquirtle para 0, estávamos realmente alterando o valor hp do
objeto Squirtle armazenado na memória para 0. É por isso que o valor hp de mySquirtle é 0, porque mySquirtle mantém uma
referência ao objeto armazenado em memória, que alteramos por meio da variável anotherSquirtle.

## Como resolvemos esse problema?
Para evitar a mutação acidental de variáveis, o que temos que fazer é criar uma nova instância de nosso Array/Object
sempre que quisermos copiar um Array / Object. Como alcançamos isso?

Com o SPREAD OPERATOR !!!!

## Como funciona o spread operator?
O spread operator (...) espalha os itens que estão contidos em um iterável (um iterável é qualquer coisa que possa ser
repetida, como Strings, Arrays, Sets ...) dentro de um receptor (Um receptor é algo que recebe o valores de propagação).
Aqui estão vários exemplos simples com Arrays que permitirão que você entenda melhor:
```javascript
const numbers = [1, 2, 3];
console.log(...numbers);
// Result: 1 2 3

const pokemon = ['Squirtle', 'Bulbasur', 'Charmander'];
console.log(...pokemon);
// Result: Squirtle Bulbasur Charmander

const pokedex = [
  { name: 'Squirtle', type: 'Water' },
  { name: 'Bulbasur', type: 'Plant' },
  { name: 'Charmander', type: 'Fire' }
];

console.log(...pokedex);
// Result: { name: 'Squirtle', type: 'Water' } { name: 'Bulbasur', type: 'Plant' } { name: 'Charmander', type: 'Fire' }
```

Como você pode ver, quando usamos o spread operator em um Array, obtemos cada item individual contido no Array.
Em todos os casos anteriores, o receptor era uma função, a função console.log.

## Clonando arrays e objetos
Agora que sabemos como o spread operator funciona, podemos fazer uso dele para copiar Arrays e Objetos de forma imutavel.
Como? Distribuindo o conteúdo e usando os **literais Array ou Object ([] e {} respectivamente)** para gerar uma nova
instância de Array/Object. Vamos pegar o exemplo anterior do Squirtle e corrigi-lo, clonando a variável **mySquirtle** imutavelmente:
```javascript
const mySquirtle = {
  name: 'Squirtle',
  type: 'Water',
  hp: 100
};

const anotherSquirtle = { ...mySquirtle };
anotherSquirtle.hp = 0;

console.log(anotherSquirtle);
// Result: { name: 'Squirtle', type: 'Water', hp: 0 }

console.log(mySquirtle);
// Result: { name: 'Squirtle', type: 'Water', hp: 100 }
```

Ao desestruturar o conteúdo da variável mySquirtle com o **spread operator** e usando o **Object literal**, estamos
criando uma nova instância do objeto Squirtle. Dessa forma, evitamos a mutação acidental de variáveis.

Para copiar um Array, usamos exatamente a mesma sintaxe:
```javascript
const pokemon = ['Squirtle', 'Bulbasur', 'Charmander'];

const pokedex = [...pokemon];
pokedex.push('Cyndaquil');

console.log(pokemon);
// Result: [ 'Squirtle', 'Bulbasur', 'Charmander' ]

console.log(pokedex);
// Result: [ 'Squirtle', 'Bulbasur', 'Charmander', 'Cyndaquil' ]
```

> **Nota**: Lembre-se de que o spread operator realiza apenas cópias superficiais. Isso significa que, se você tiver um
> tipo de dados de referência armazenado dentro de seu Array/Objeto, ao fazer uma cópia com o spread operator, o
> Array/Objeto aninhado conterá uma referência ao original e, portanto, será mutável.

## Convertendo objetos Array-like para Arrays
Objetos Array-like são muito semelhantes a Arrays. Eles geralmente têm elementos numerados e uma propriedade de comprimento.
No entanto, eles têm uma diferença crucial: Objetos Array-like não têm nenhuma das funções de Array.

Entre os Objetos Array-like estão as listas de nós HTML retornadas pela maioria dos métodos DOM, a variável de argumentos
gerada automaticamente em cada função JS e algumas outras.

Com a mesma sintaxe da clonagem de arrays, podemos usar o spread operator para transformar estruturas Array-like em Array,
como alternativa ao uso de **Array.from**. Aqui está um exemplo, convertendo um NodeList em um Array:
```javascript
const nodeList = document.getElementsByClassName("pokemon");
const array = [...nodeList];

console.log(nodeList);
// Result: HTMLCollection [ div.pokemon, div.pokemon ]

console.log(array);
// Result: Array [ div.pokemon, div.pokemon ]
```

Com essa técnica, podemos transformar qualquer estrutura Array-like em Array e, assim, ter acesso a todas as funções de Array.

## Spread operator como argumento
Algumas funções aceitam um número variável de parâmetros. Um ótimo exemplo desses tipos de funções são as da coleção
**Math**. Para nosso exemplo, vamos escolher a função **Math.max()**, que aceita **n** parâmetros numéricos e retorna o
maior deles. Imagine que temos um Array de números, que queremos passar para a função **Math.max()**.

Como fazemos isso?  Poderíamos fazer algo assim:
```javascript
const numbers = [1, 4, 5];
const max = Math.max(numbers[0], numbers[1], numbers[2]);

console.log(max);
// Result: 5
```

Mas, é claro, fazer isso seria suicídio. E se tivéssemos 20 valores? Ou 1000? Vamos realmente acessar cada valor por
índice? A resposta é não. Como já sabemos, o spread operator pega um Array e extrai cada valor individual. Isso é
exatamente o que estamos procurando! Portanto, podemos fazer isso:
```javascript
const numbers = [1, 4, 5, 6, 9, 2, 3, 4, 5, 6];
const max = Math.max(...numbers);

console.log(max);
// Result: 9
```

## Adicionando novos elementos
#### Adicionando itens a um Array
Para adicionar novos elementos a um array, primeiro fazemos um spread com o conteúdo do Array e usamos o  Array literal
**[]** para criar uma nova instância do Array, contendo o conteúdo do array original, mais os valores que queremos adicionar:
```javascript
const pokemon = ['Squirtle', 'Bulbasur'];
const charmander = 'Charmander';
const cyndaquil = 'Cyndaquil';

const pokedex = [...pokemon, charmander, cyndaquil];

console.log(pokedex);
// Result: [ 'Squirtle', 'Bulbasur', 'Charmander', 'Cyndaquil' ]
```

Como você pode ver, podemos adicionar quantos novos itens quisermos.

## Adicionando propriedades a um objeto
Usando a mesma sintaxe de Arrays, podemos facilmente adicionar novas propriedades ao clonar um objeto. Para mudar um pouco, aqui está uma sintaxe diferente para adicionar propriedades a um objeto (ela também pode ser usada com arrays):

```javascript
const basicSquirtle = { name: 'Squirtle', type: 'Water' };
const fullSquirtle = {
  ...basicSquirtle,
  species: 'Tiny Turtle Pokemon',
  evolution: 'Wartortle'
};

console.log(fullSquirtle);
// Result: { name: 'Squirtle', type: 'Water', species: 'Tiny Turtle Pokemon', evolution: 'Wartortle' }
```

Como você pode ver, podemos declarar e inicializar novas variáveis diretamente dentro do Object literal, em vez de fazer isso fora.

## Mescando arrays/objetos
#### Arrays
Podemos mesclar dois arrays, fazendo spread e usando o Array literal, como nos exemplos anteriores. No entanto, em vez de simplesmente adicionar um novo elemento, vamos adicionar outro array (spread):
```javascript
const pokemon = ['Squirtle', 'Bulbasur', 'Charmander'];
const morePokemon = ['Totodile', 'Chikorita', 'Cyndaquil'];

const pokedex = [...pokemon, ...morePokemon];

console.log(pokedex);
// Result: [ 'Squirtle', 'Bulbasur', 'Charmander', 'Totodile', 'Chikorita', 'Cyndaquil' ]
```

Também funciona se tivermos um array de objetos:
```javascript
const pokemon = [
  { name: 'Squirtle', type: 'Water' },
  { name: 'Bulbasur', type: 'Plant' }];
const morePokemon = [{ name: 'Charmander', type: 'Fire' }];

const pokedex = [...pokemon, ...morePokemon];

console.log(pokedex);
// Result: [ { name: 'Squirtle', type: 'Water' }, { name: 'Bulbasur', type: 'Plant' }, { name: 'Charmander', type: 'Fire' } ]
```

#### Objetos
Podemos fundir dois (ou mais) Objetos em um único Objeto, usando a mesma sintaxe de antes (você deve ter notado agora,
que o spread operator é usado de maneira muito semelhante, tanto para Arrays quanto para Objetos):

```javascript
const baseSquirtle = {
  name: 'Squirtle',
  type: 'Water'
};

const squirtleDetails = {
  species: 'Tiny Turtle Pokemon',
  evolution: 'Wartortle'
};

const squirtle = { ...baseSquirtle, ...squirtleDetails };

console.log(squirtle);
// Result: { name: 'Squirtle', type: 'Water', species: 'Tiny Turtle Pokemon', evolution: 'Wartortle' }
```
