---
title: JavaScript Event Loop
description: Neste post vamos falar sobre o Event Loop, seus conceitos chave, como funciona, alguns exemplos e seu fluxo de execução.
date: 2024-07-05 09:20:00
image: /assets/img/javascript/javascript-event-loop.png
category: js
background: '#ddcd34'
---

![JavaScript Event Loops](../assets/img/javascript/javascript-event-loop.png)

O **`Event Loop`** é um conceito fundamental em JavaScript que permite à linguagem executar operações assíncronas e não bloqueantes. É um mecanismo que garante que o código JavaScript seja executado de maneira ordenada, mesmo ao lidar com eventos assíncronos, como interações do usuário, requisições de rede ou temporizadores.

## Conceitos Chave

1 - **`Call Stack`**: Uma estrutura de dados que rastreia as chamadas de funções. Quando uma função é invocada, ela é adicionada à stack. Quando a função é concluída, ela é removida da stack.

2 - **`Web API's`**: APIs fornecidas pelo navegador, como **setTimeout**, fetch e eventos do **DOM**, que lidam com operações assíncronas.

4 - **`Callback Queue`**: Uma fila que mantém mensagens (**callbacks**) que estão prontas para serem processadas. Cada mensagem está associada a uma função a ser executada.

5 - **`Event Loop`**: Verifica continuamente a **call stack** e a **callback queue**. Se a **call stack** estiver vazia, ele empurra o primeiro **callback** da fila para a **call stack** para execução.

## Como o Event Loop Funciona

1 - O **`código síncrono`** é executado primeiro, e as chamadas de funções são adicionadas à **call stack**.

2 - As **`operações assíncronas`** (como **setTimeout**, **fetch** ou **event listeners**) são manipuladas pelas Web APIs, e seus callbacks são adicionados à **callback queue** quando completados.

3 - O **`Event Loop`** verifica se a **call stack** está vazia. Se estiver, ele pega o primeiro callback da **callback queue** e o empurra para a **call stack** para execução.

## Example

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

#### Fluxo de Execução

**`1 - Código Síncrono:`**

**console.log('Start')** é adicionado à call stack e executado.

**setTimeout** é chamado, e seu callback é adicionado às Web APIs com um temporizador.

**Promise.resolve().then** é chamado, e seu callback é adicionado à microtask queue.

**console.log('End')** é adicionado à call stack e executado.

**`2 - Microtasks:`**

A microtask queue (que inclui callbacks de promises) é processada antes da callback queue.

O callback da **Promise** é adicionado à call stack e executado.

**`3 - Callback Queue:`**

O callback de **setTimeout** é adicionado à callback queue após o temporizador expirar.

O event loop verifica a call stack, e se estiver vazia, o callback da callback queue é executado.

#### Output

```bash
Start
End
Promise
Timeout
```

## Exemplo Detalhado

Exemplo com Várias Operações Assíncronas

```js
console.log("1: Start");

setTimeout(() => {
  console.log("2: Timeout 1");
}, 100);

setTimeout(() => {
  console.log("3: Timeout 2");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("4: Promise 1");
  })
  .then(() => {
    console.log("5: Promise 2");
  });

console.log("6: End");
```

#### Fluxo de Execução

**`1 - Código Síncrono:`**

**console.log('1: Start')** é executado.

**setTimeout** com atraso de 100ms é chamado, e seu callback é adicionado às Web APIs.

**setTimeout** com atraso de 0ms é chamado, e seu callback é adicionado às Web APIs.

**Promise.resolve().then** é chamado, e seu primeiro callback é adicionado à microtask queue.

**console.log('6: End')** é executado.

**`2 - Microtasks:`**

O callback da **Promise** (primeiro then) é executado.

O segundo callback **then** da Promise é executado.

**`3 - Callback Queue:`**

O callback do **setTimeout** com atraso de 0ms é executado.

O callback do **setTimeout** com atraso de 100ms é executado.

#### Output

```bash
1: Start
6: End
4: Promise 1
5: Promise 2
3: Timeout 2
2: Timeout 1
```

**Representação visual**

```bash
Call Stack             | Web APIs          | Callback Queue     | Microtask Queue
-----------------------|-------------------|--------------------|----------------
console.log('Start')   |                   |                    |
                       | setTimeout (100ms)|                    |
                       | setTimeout (0ms)  |                    |
Promise.resolve().then |                   |                    |
console.log('End')     |                   |                    |
                       |                   |                    | Promise.then
                       |                   |                    | Promise.then
                       | Timeout 2         | Timeout 2          |
                       | Timeout 1         | Timeout 1          |
```

## Resumo

O Event Loop em JavaScript é uma parte crucial de como a linguagem lida com operações assíncronas, garantindo que a execução do código não seja bloqueada. Entender o Event Loop ajuda a escrever código assíncrono mais eficiente e livre de bugs, especialmente ao lidar com múltiplas operações assíncronas.
