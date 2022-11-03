---
title: JavaScript Promises
description: Entenda o que são promises, async/await no JavaScript.
date: 2022-11-02 16:00:00
image: /assets/img/javascript/javascript-promises.png
category: js
background: '#ddcd34'
---

![javascript promises](../assets/img/javascript/javascript-promises.png)

### O que é Promises ?
Um recurso utilizado para que seja executada uma sequência de comandos de forma assíncrona, ou seja, permite executar duas partes do código no mesmo tempo.

Sendo assim é possivel ter diversas vantagens, por exemplo manipular o código de maneira mais eficiente, manipular dados nas chamadas de APIs e tratar erros de forma mais limpa.

Veja a seguir um exemplo de uma sequência de comandos síncrona (tradicional), abaixo uma função que soma dois números e retorna uma outra função com o resultado:
```js
function sumNumbers() {
  let result = 1 + 1;

  if (result === 2) {
    successCallback();
  } else {
    errorCallback();
  }
}

function successCallback() {
  console.log("Resultado da soma é 2");
}

function errorCallback() {
  console.log("Oops! Algo deu errado.");
}

sumNumbers();

// output: Resultado da soma é 2
```

Agora vamos refazer o código anterior para que desta vez ele retorne uma Promise. Esta Promise simplificará o uso dos `callbacks`, veja só.

Para isso, se cria um `new Promise`, que é uma classe que retornará um objeto. Na criação desta classe passaremos como parâmetro uma função anônima, que por sua vez receberá os parâmetros `resolve` e `reject`.

Ficou confuso? Calma que no exemplo ficará mais claro, mas por enquanto atente-se a esses parâmetros `resolve` e `reject`. O que esses parâmetros querem dizer? Querem dizer que se o código correr da maneira como deveria, ele executará o trecho `resolve` do código. Caso algum erro aconteça, ele executará o trecho `reject`.

Esses caras `resolve` e `reject` são o que chamamos de `callbacks`.
```js
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
      resolve('Success');
  } else {
      reject('Failed');
  }
});
```
Por enquanto entramos somente na parte da criação da Promise, agora vamos chamá-la. com o `.then`, podemos forçar que o código só prossiga com a execução da função após que uma anterior seja resolvida. Veremos isso mais à frente, mas por enquanto se atente a forma como fazemos a chamada da Promise:
```js
p.then((message) => {
  console.log('Esse é o then: ' + message);
}).catch((err) => {
  console.log('Esse é o catch: ' + err);
});

// output: Esse é o then: Success
// Caso mudássemos a condicional a == 2 para qualquer outro valor, provavelmente o output seria o do catch:
// output: Esse é o catch: Failed
```

### Criando Promises
Por enquanto vimos os conceitos básicos de promise como por exemplo usá-las através do `.then` e `.catch`, mas vamos adicionar uma pitada de complexidade e tentar ir para um exemplo mais robusto de como fazer com que qualquer função retorne uma Promise.

Neste caso temos duas [funções callbacks síncronas](https://developer.mozilla.org/pt-BR/docs/Glossary/Callback_function) chamadas `errorCallback` e `callback`. Elas retornarão um objeto com a propriedade `name` e `message`. Uma função comum com sua chamada seria algo assim:
```js
const myName = 'Jefferson';

function whoAreYouCallback(callback, errorCallback) {
  if (myName != 'Jefferson') {
    errorCallback({
      name: 'Algo deu errado',
      message: myName + ' não é meu nome.'
    })
  } else {
    callback({
      name: myName,
      message: 'Olá, mundo!'
    });
  }
}

whoAreYouCallback((result) => {
  console.log(result.name + "? Sou eu! " + result.message);
}, (error) => {
  console.log(error.name + '. ' + error.message);
})

// output: Jefferson? Sou eu! Olá, mundo!
```

Agora para retornar uma promise, você verá que não precisaremos adicionar os `errorCallback` e `callback` nos parâmetros da função, apenas faremos com que essa função retorne uma Promise diretamente.

Para retornar uma promise, adicionamos o `return new Promise` seguido de uma `arrow function` (função anônima) com as callbacks de parâmetro da função anônima.

Para a chamada de Promise, adicionamentos o `.then` para tratar o cenário de sucesso e o `.catch` para o cenário de falha:
```js
const myName = 'Alan';

function whoAreYouCallback() {
  return new Promise((resolve, reject) => {
    if (myName != 'Alan') {
      reject({
        name: 'Algo deu errado',
        message: myName + ' não é meu nome.'
      })
    } else {
      resolve({
        name: myName,
        message: 'Olá, mundo!'
      });
    }
  })
}

whoAreYouCallback()
  .then((result) => {
    console.log(result.name + "? Sou eu! " + result.message);
  }).catch((error) => {
    console.log(error.name + '. ' + error.message);
  })

// output: Alan? Sou eu! Olá, mundo!
```

### Determinando a ordem de chamada das funções
Agora que sabemos usar as Promises, podemos ativar o seu superpoder: Fazer com que o código prossiga somente após a execução de uma determinada promise e permitindo que você controle a ordem e quando fará a execução do seu código. Neste sentido, basta aninharmos o próximo `.then` sendo passado como parâmetro no resultado da promise anterior.

Neste exemplo vamos criar duas promises e chamaremos através do método tradicional `.then` e `.catch`:
```js
// Criando a primeira promise
function bestF1DriverEver(driver) {
  return new Promise((resolve, reject) => {
    if (driver === 'Senna') {
      resolve ({
        success: true,
        driverName: 'Ayrton Senna',
        msg: driver + ' é o melhor piloto de F1 de todos os tempos!'
      });
    } else {
      reject ({
        success: false,
        msg: 'Esse não é o melhor piloto!'
      });
    }
  });
}

// Criando a segunda promise
function bestF1Car(response) {
  return new Promise((resolve, reject) => {
    if (response.success) {
      resolve('McLaren MP4/4 pilotada por ' + response.driverName);
    } else {
      reject('Resposta errada! Tente de novo')
    }
  });
}

// Chamando uma promise e depois a outra
bestF1DriverEver('Senna')
  .then(response => {
    console.log('Verificando resposta...');
    return bestF1Car(response);
  })
  .then(response => {
    console.log('Encontrando o melhor carro...');
    console.log(response);
  })
  .catch(err => {
    console.log(err.msg);
  })

// output: Verificando resposta...
// output: Encontrando o melhor carro...
// output: McLaren MP4/4 pilotada por Ayrton Senna
```

Se caso quiséssemos criar mais chamadas consecutivas de promises para executar o código em uma determinada ordem somente após o término da execução de uma outra função anterior, basta adicionarmos mais `.then` na chamada retornando a promise anteriormente usada, como foi o caso da `return bestF1Car(response)`.

No exemplo anterior, vimos que a segunda promise confere se o resultado da primeira promise foi um sucesso. Caso positivo, ela também seguirá no cenário de sucesso.

Porém, essa chamada de promise acaba gerando um problema: A partir da chamada de mais de uma promise, vai-se criando um aninhamento de `.then` retornando a próxima promise. Em uma chamada de muitas promises, isso pode tornar o código complexo e ilegível.

### Async / Await
Para resolver o problema da complexidade de aninhamentos de `.then`, o `async / await` vem para simplificar o trabalho de chamada de promises.

O primeiro passo é explicitar que a função será **assíncrona** adicionando o prefixo `async` na chamada das promises, para então chamar as promises desejadas na ordem que desejada de execução utilizando o prefixo `await`.

Com as duas promises criadas no exemplo anterior, poderíamos chamá-las dessa forma:
```js
async function runPromises() {
  const bestF1DriverResponse = await bestF1DriverEver('Senna');
  console.log(bestF1DriverResponse);

  const bestF1CarResponse = await bestF1Car(bestF1DriverResponse);
  console.log(bestF1CarResponse);
}

runPromises()

/*
output: {
  "success": true,
  "driverName": "Ayrton Senna",
  "msg": "Senna é o melhor piloto de F1 de todos os tempos!"
}

output: McLaren MP4/4 pilotada por Ayrton Senna
*/
```

E caso o parâmetro passado faça cair no erro `.catch` da promise? Neste caso, é necessário **envelopar** nossas chamadas dentro de um bloco `try / catch` para fazer o **tratamento do erro**.
```js
async function runPromises() {
  try {
    // chamando a promise com o parâmetro errado
    const bestF1DriverResponse = await bestF1DriverEver('Piquet');
    console.log(bestF1DriverResponse);

    const bestF1CarResponse = await bestF1Car(bestF1DriverResponse);
    console.log(bestF1CarResponse);
  } catch (err) {
    console.log(err.msg);
    // Como o parâmetro passado foi errado, ele cairá neste bloco catch
  }
}

runPromises()

// output: Esse não é o melhor piloto!
```

O uso do `async / await` junto com `try / catch` é uma grande vantagem pois o `try / catch` irá capturar erros de promise no `reject` como também pode capturar outros erros também.

### Guia Rápido
##### O que é uma `promise`?
É um objeto que "encapsula" o estado de uma execução (sucesso ou falha) e executa `callbacks` com base neste estado.

##### Qual é a relação entre `Promise` e `callback`?
As `callbacks` são parâmetros dentro da função de uma promise que são responsáveis para designar como a promise irá se comportar dependendo do seu resultado. As duas principais `callbacks` usadas são `resolve` e `reject`.
- `Resolve`: Se a promise funcionar como esperada, essa callback irá retornar a sequência de resolução do código.
- `Reject`: Se a promise não funcionar como esperada, essa callback irá retornar um erro para a chamada da promise.

##### Qual é a relação entre Promise e `Async / Await`?
`Async / Await` é uma forma mais simples de se chamar promises. Para usá-los, nós precisamos ter uma promise criada, uma função com o prefixo `async` onde será inserida as chamadas da promise com o prefixo `await`.

##### O que `Async / Await` faz com nosso código?
Irá executar o bloco `.then` sem a necessidade de aninhá-los para cada chamada de promise, tornando o código mais legível. Além disso, para tratar erros apropriadamente, é importante que envolva as chamadas da promises `await` em torno de um bloco `try / catch`.

##### Existe algo a mais para saber sobre promises?
Sim, recentemente o `Node.JS` teve um update com o `Promise.all` para chamar várias promises em ainda menos linhas de código.

Ah, e nunca se esqueça que você pode sempre contar com o [MDN Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise) para aprender de uma fonte confiável!
