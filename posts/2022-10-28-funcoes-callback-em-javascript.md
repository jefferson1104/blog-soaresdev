---
title: Funções callback em JavaScript
description: Entenda o que é uma função callback no javascript
date: 2022-10-28 11:00:00
image: /assets/img/javascript/javascript-callbacks.png
category: js
background: '#ddcd34'
---

![wrong-render-conditional](../assets/img/javascript/javascript-callbacks.png)

#### Como o JavaScript funciona?
Ele executa em uma ordem de cima para baixo, uma sequência de instruções que
chamamos de **Algoritmo**. Imagine que essa sequência de instruções é similar a
receita de um bolo, basta você seguir passo a passo dessa receita na ordem correta
para que o seu bolo fique pronto.
```
1. Misturar ovos, manteiga e açucar.
2. Acrescentar farinha de trigo, fermento, leite e a massa do bolo.
3. Continuar misturando tudo por 5 minutos.
4. Pré aquecer o forno em 180ºC por 5 minutos.
5. Colocar a mistura pronta em uma forma.
6. Colocar a forma no forno e deixar por 40 minutos.
```

exemplo de um algoritmo javascript:
```js
function firstPokemon() {
  console.log('Charmander');
}

function secondPokemon() {
  console.log('Squirtle');
}

firstPokemon();
secondPokemon();
```
OUTPUT:
```
Charmander
Squirtle
```

#### Entendendo Callback e sua Semântica
Agora vamos demonstrar outro exemplo dessa vez utilizando a função `setTimeout()`
para que o primeiro pokemon demore 3 segundos para ser exibido.
```js
function firstPokemon() {
  console.log('Charmander');
}

setTimeout(firstPokemon(), 3000);
```

OUTPUT:
```
Charmander
node:internal/validators:233
    throw new ERR_INVALID_CALLBACK(callback);
    ^

TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined
    at setTimeout (node:timers:141:3)
    at Object.<anonymous> (/Users/jefferson/Development/PROJECTS/blog-soaresdev/tempCodeRunnerFile.javascript:5:1)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47 {
  code: 'ERR_INVALID_CALLBACK'
}
```

Ao executar o algoritmo causamos este erro acima, quero que você observe duas coisas:
- A função `firstPokemon` é executada automaticamente, sem a espera dos 3 segundos
- A função `setTimeout` lança um erro de `callback` inválida.

Ao executar `firstPokemon()` com os parênteses no final, faz com que essa função seja invocada, ou  seja, ordenamos a execução imediata da função `firstPokemon()`. E quando o `setTimeout` procurou o que havia no primeiro parâmetro, não encontrou nada (**recebeu undefined**), já que `firstPokemon` já havia sido executada.

Para entender completamente, vamos para um exemplo parecido, mas dessa vez retirando os parênteses no final de `firstPokemon()`.
```js
function firstPokemon() {
  console.log('Charmander');
}

setTimeout(firstPokemon, 3000);

// OUTPUT:
// Charmander
```

Perfeito! Podemos entender que, devemos passar a função `firstPokemon` como argumento sem os parênteses, pois assim é a semântica correta, e que as famosas `Callbacks` não são funções invocada diretamente, e sim sendo passada como parâmetro para que outra função chame ela. Neste exemplo a função `setTimeout` chama (CALL) novamente (BACK).

Vamos seguir com outro exemplo, iremos passar uma função como `Callback` para que a função `receiveCallback` possa chamar (e executar) essa função dentro.
```js
function receiveCallback(callbackReceived) {
  const aleatoryNumber = 33;

  callbackReceived(aleatoryNumber);
}

function printValue(valueToPrint) {
  console.log(valueToPrint);
}

receiveCallback(printValue);

// OUTPUT:
// 33
```

- A função `printValue` será responsável somente por imprimir o valor que recebe como parâmetro.
- A função `receiveCallback` será invocada recebendo `printValue` como `Callback` e assim seguirá.
- Invocar a `Callback` chamada `printValue` recebida como parâmetro que consequentemente imprimirá no console o número **33**.

#### JavaScript assíncrono com Callbacks
Na etapa anterior aprendemos como passar funções `callbacks`, agora vamos aprender
a verdadeira vantagem, que é utilizar `callbacks` no javascript assíncrono.

No exemplo a seguir vamos reutilizar as funções do início desse post,

O próximo exemplo reutiliza as duas funções do início do artigo `firstPokemon()`
e `secondPokemon()`. Na função `firstPokemon()` configuramos uma espera de 3
segundos para execução e logo em seguida iremos chamar a função `secondPokemon()`.
```js
function firstPokemon() {
  console.log('Charmander');
}

function secondPokemon() {
  console.log('Squirtle');
}

setTimeout(firstPokemon, 3000);
segundaMensagem();

// OUTPUT:
// Squirtle
// ...3 segundos depois
// Charmander
```

O que houve? Se o código é executado em ordem de cima para baixo, por que o JavaScript não esperou que `Charmander` fosse exibida antes de `Squirtle`?

Neste caso o JavaScript leu o código corretamente, executou a ação dos 3 segundos para exibir a mensagem e continuou a execução de forma síncrona do restante do código. Ou seja, ele leu setTimeout, mandou a execução acontecer e continuou a ler a próxima linha de código que neste caso foi `secondPokemon()`.

Mas esse não é o **output** que queríamos, certo? Queríamos que `secondPokemon()` fosse executada somente após `firstPokemon()`. E se fizéssemos uma modificação? Vamos incluir `secondPokemon()` como `callback` de `firstPokemon()` e fazer com que essa `callback` seja executada 2 segundos depois da execução da primeira.
```js
function firstPokemon(callback) {
  console.log('Charmander');

  setTimeout(callback, 2000);
}

function secondPokemon() {
  console.log('Squirtle');
}

setTimeout(firstPokemon(secondPokemon), 3000);
```

OUTPUT:
```
Charmander
node:internal/validators:233
    throw new ERR_INVALID_CALLBACK(callback);
    ^

TypeError [ERR_INVALID_CALLBACK]: Callback must be a function. Received undefined
    at setTimeout (node:timers:141:3)
    at Object.<anonymous> (/Users/jefferson/Development/PROJECTS/blog-soaresdev/tempCodeRunnerFile.javascript:11:1)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47 {
  code: 'ERR_INVALID_CALLBACK'
}
```
**NOVAMENTE O MESMO ERRO DE undefined?** ao observar com atenção notaremos que
cometemos um erro, ao passar a função `secondPokemon()` como callback, abrimos
parêtenses na primeira função `firstPokemon` fazendo com que essa função seja invocada
imediatamente e assim entao para de ser passada como callback.

Para corrigir isso, devemos utilizar um recurso chamado `arrow functions` (funções anônimas)
na primeira função passada como callback, neste caso nossa função `firstPokemon`.

**Exemplo rápido sobre função anônima**
```js
  function funcaoNaoAnonima() {
    console.log('Este é um exemplo de uma função não anônima');
  }
```
```js
  () => console.log('Este é um exemplo de função anônima');
```


Ao criar uma função anônima que tem como única utilidade retornar a invocação
de `firstPokemon`, podemos manter `secondPokemon` em sua forma de callback.
```js
function firstPokemon(callback) {
  console.log('Charmander');

  setTimeout(callback, 2000);
}

function secondPokemon() {
  console.log('Squirtle');
}

setTimeout(() => firstPokemon(secondPokemon), 3000);

//OUTPUT:
// ... 3 segundos
// Charmander
// .. 2 segundos
// Squirtle
```

Agora sim! Neste caso a **função anônima** será a chave para destrancarmos o poder
das callbacks. Para mergulhar um pouco mais afundo nessa maravilhosa funcionalidade,
iremos adicionar um último degrau de complexidade em nossos exemplos. Dessa vez
faremos com que `secondPokemon` também receba um parâmetro. Neste caso será o pokemon
que gostaríamos de imprimir no console.
```js
function firstPokemon(callback) {
  console.log('Charmander');

  setTimeout(callback, 2000);
}

function secondPokemon(pokemon) {
  console.log(pokemon);
}

setTimeout(() => firstPokemon(() => secondPokemon('Squirtle')), 3000);

//OUTPUT:
// ... 3 segundos
// Charmander
// .. 2 segundos
// Squirtle
```

#### Problema do uso das Callbacks (Callback Hell)
Através das callbacks, somos capazes de manipular a ordem de execução das funções.
Até aqui os exemplos foram simples e didáticos. No entanto, o mundo real é mais
complicado e algumas aplicações se tornam complexas.

O uso das callbacks em projetos complexos cria um problema de legibilidade de
código e torna seu uso mais difícil, quer ver? Vamos para um exemplo onde temos
5 funções que imprimem mensagens, uma sendo executada 2 segundos depois da outra
e recebendo a mensagem como parâmetro. Como essas funções seriam escritas normalmente?
```js
function primeiraMensagem(callback, mensagem) {
    console.log(mensagem);

    setTimeout(callback, 2000);
}

function segundaMensagem(callback, mensagem) {
    console.log(mensagem);

    setTimeout(callback, 2000);
}

function terceiraMensagem(callback, mensagem) {
    console.log(mensagem);

    setTimeout(callback, 2000);
}

function quartaMensagem(callback, mensagem) {
    console.log(mensagem);

    setTimeout(callback, 2000);
}

function quintaMensagem(mensagem) {
    console.log(mensagem);
}

setTimeout(() => primeiraMensagem(
    () => segundaMensagem(
        () => terceiraMensagem(
            () => quartaMensagem(
                () => quintaMensagem('Quinta mensagem'),
            'Quarta mensagem')
        , 'Terceira mensagem')
    , 'Segunda mensagem')
, 'Primeira mensagem'), 3000);

// OUTPUT:
// Primeira mensagem
// Segunda mensagem
// Terceira mensagem
// Quarta mensagem
// Quinta mensagem
```

Veja que a medida que são adicionadas novas chamadas de callbacks, a complexidade irá aumentar e a compreensão do código ficará mais difícil. Em casos mais extremos seu código vai parecer que foi cortado ao meio pelo Hadouken do Ryuu.

![ryu hadouken](https://res.cloudinary.com/practicaldev/image/fetch/s--JZmRNio1--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/alantsx/Artigos/main/Callbacks/resouces/callback%2520hell.jpg)

Felizmente existe uma maneira de evitar que esse tipo de problema aconteça.
Estamos falando das **Promises**, aqui no blog tem post explicando sobre esse
assunto também.

[Post sobre JavaScript Promises](https://blog.soaresdev.com/javascript-promises)
