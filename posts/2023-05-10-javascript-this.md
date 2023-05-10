---
title: JavaScript This
description: Entenda o que é a palavra-chave "this" do JavaScript.
date: 2023-05-10 11:00:00
image: /assets/img/javascript/javascript-this.png
category: js
background: '#ddcd34'
---

![javascript this](../assets/img/javascript/javascript-this.png)

### JavaScript "this" ?
Olá Dev! Se você já se deparou com a palavra-chave "**this**" no JavaScript e a achou confusa, não se preocupe.

Vou ajudar você! Entender o "**this**" é crucial para liberar todo o potencial do JavaScript.

Neste post, vamos desvendar os mistérios da palavra-chave "**this**" e explorar suas várias aplicações em diferentes situações incluindo "**arrow functions**".

### Global Context
Imagine que você está em um grade playground chamado JavaScript. Quando você está fora de qualquer função ou objeto, a palavra-chave "**this**" refere-se ao objeto global.

- Em um navegador (browser), esse objeto global geralmente é o objeto "**Window**".
- Vamos dar uma olhada em um exemplo para ficar mais claro:

```js
console.log(this);
// OUTPUT: the global object (window in the browser)
```

Neste caso, é como olhar para todo o playground à distância.

### Object Method Context
Quando "**this**" é usado dentro de um método de um objeto, ele se refere ao próprio objeto. Pense nisso como o objeto falando sobre si mesmo.

- Isso permite que você acesse outras propriedades e métodos dentro do mesmo objeto.
- Aqui está um exemplo simples para ilustrar este ponto:

```js
const person = {
  name: "Jefferson",
  introduce: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.introduce();

// OUTPUT: Hello, my name is Jefferson
```


### Function Context
O comportamento do "**this**" pode ser um pouco complicado quando usado dentro de funções regulares. Seu valor depende de como a função é chamada.

Se a função for chamada diretamente (como uma Standalone function), "**this**" refere-se ao objeto global ("**Window**" no navegador).
```js
// 1. Standalone function call
function sayHello() {
  console.log("Hello, " + this.name);
}

sayHello()
// OUTPUT: Hello Undefined (refer to Global object)
```

Se a função for chamada como um método de um objeto, "**this**" refere-se ao próprio objeto
```js
// 2. Function called as a object method
function sayHello() {
  console.log("Hello, " + this.name);
}

const person = {
  name: "Jefferson",
  greet: sayHello
};
// OUTPUT: Hello, Jefferson
```

Se a função for chamada usando a palavra-chave "**new**" para criar uma instância de uma função constructor, "**this**" refere-se ao objeto recém-criado.
```js
// 3. Constructor function context
function Person(name) {
  this.name = name;
}

const thePerson = new Person("Arthur");
console.log(thePerson.name);
// OUTPUT: Arthur
```

### Event Handlers
Em JavaScript, quando um evento é acionado, "**this**" geralmente se refere ao elemento **DOM** que acionou o evento.

ele permite que você interaja ou acesse as propriedades desse elemento específico. Vamos dar uma olhada rápida:

```js
const button = document.querySelector("button");

button.addEventListener("click", function() {
  console.log("Button clicked!");
  console.log(this); // OUTPUT: the button element
});
```

### Arrow Functions
As Arrow functions têm um comportamento diferente em comparação com as regular functions quando se trata da palavra-chave "**this**".

Eles não têm seu próprio contexto "**this**", mas o herdam do sorrounding code.

Em termos mais simples, "**this**" dentro de uma Arrow function refere-se ao valor de "**this**" no escopo pai. Vejamos um exemplo:

```js
const person = {
  name: "Jefferson",
  introduce: function() {
    const greet = () => {
      console.log("Hello, my name is " + this.name);
    }
    greet();
  }
};

person.introduce();
// OUTPUT: Hello, my name is Jefferson
```

### Conclusão
Parabéns, você acabou de desvendar os segredos da palavra-chave "**this**".

Entender o "**this**" permite que você escreva um código JavaScript mais dinâmico e interativo.

Lembre-se, a prática leva à perfeição. Experimente usar o "**this**" em diferentes cenários e observe seu comportamento.
