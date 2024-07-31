---
title: JavaScript Hoisting
description: Aprenda o que é hoisting no JavaScript, como funciona com variaveis e funções.
date: 2024-07-07 01:20:00
image: /assets/img/javascript/javascript-hoisting.png
category: js
background: '#ddcd34'
---

![JavaScript Hoisting](../assets/img/javascript/javascript-hoisting.png)

Hoisting é um mecanismo do JavaScript onde declarações de variáveis e funções são movidas para o topo do seu escopo contido durante a fase de compilação. Isso significa que você pode usar variáveis e funções antes de serem formalmente declaradas no código.

# Hoisting com Variáveis
Hoisting funciona de maneiras diferentes dependendo de como as variáveis são declaradas:

**`var`**: Variáveis declaradas com **var** são hasteadas (erguidas) para o topo de seu escopo de função ou global. Elas são inicializadas com **undefined**.

**`let`** e **`const`**: Variáveis declaradas com **let** e **const** são hasteadas (erguidas) para o topo de seu escopo de bloco, mas não são inicializadas. Isso resulta em um **ReferenceError** se você tentar acessá-las antes da declaração ser encontrada no código.

## Exemplo de hoisting com `var`:

```js
console.log(a); // Output: undefined
var a = 10;
console.log(a); // Output: 10
```

No exemplo acima, a declaração **`var a`** é hasteada (erguida) para o topo do escopo, mas a inicialização **`a = 10`** não é hasteadas (erguida). Então, o código é interpretado como:

```js
var a;
console.log(a); // Output: undefined
a = 10;
console.log(a); // Output: 10
```

## Exemplo de hoisting com `let` e `const`:

```js
// EXAMPLE WITH LET
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // Output: 20

// EXAMPLE WITH CONST
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); // Output: 30
```

# Hoisting com Funções

Declarações de função são totalmente hasteada (erguida), o que significa que tanto o nome da função quanto seu corpo são movidos para o topo do escopo.

## Declarações de Função
```js
console.log(add(2, 3)); // Output: 5

function add(x, y) {
  return x + y;
}
```
No exemplo acima, a declaração da função add é hasteada (erguida) para o topo do escopo, então ela pode ser chamada antes de sua declaração.

## Expressões de Função
Expressões de função não são hasteada (erguida). Se você tentar chamar uma expressão de função antes de ela ser definida, você receberá um erro.

```js
console.log(subtract(5, 2)); // TypeError: subtract is not a function

var subtract = function (x, y) {
  return x - y;
};
console.log(subtract(5, 2)); // Output: 3
```

No exemplo acima, a variável **subtract** é hasteada (erguida), mas sua inicialização como uma função não é, resultando em um **TypeError**.

## Resumo

Hoisting em JavaScript é um comportamento onde declarações de variáveis e funções são movidas para o topo de seu escopo contido.

1. **Variáveis declaradas com `var`** são hasteadas (erguidas) e inicializadas com **undefined**.

2. **Variáveis declaradas com `let` e `const`** são hasteadas (erguidas), mas não inicializadas, levando a um **ReferenceError** se acessadas antes de sua declaração.

3. **Declarações de função** são totalmente hasteadas (erguidas), incluindo seu corpo, então elas podem ser chamadas antes de sua declaração.

4. **Expressões de função** não são hasteadas (erguidas), resultando em um erro se chamadas antes da atribuição.

Entender o hoisting ajuda a evitar bugs potenciais e a escrever um código JavaScript mais previsível.

**Veja o conteúdo em inglês na minha página do Medium:**
https://medium.com/@jeffersonscjunior/javascript-hoisting-1ca762d3ee59
