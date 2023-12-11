---
title: 4 maneiras de fazer uma chamada de API em JavaScript
description: Aprenda como fazer chamada de uma API com XMLHttpRequest, fetch(), Axios ou JQuery AJAX.
date: 2023-12-11 08:00:00
image: /assets/img/javascript/javascript-ways-to-call-api-banner.png
category: js
background: '#ddcd34'
---

![javascript call API](../assets/img/javascript/javascript-ways-to-call-api.png)

Em JavaScript, costumamos usar APIs para interagir com servidores e obter ou enviar dados,vou mostrar quatro maneiras diferentes de fazer essas chamadas de API, cada uma com seus próprios casos de uso, vamos explorar cada um deles.

### XMLHttpRequest
Antes do ES6 e de bibliotecas modernas como *Fetch* e *Axios*, **XMLHttpRequest** era a única maneira de fazer chamadas de API em JavaScript, ainda é amplamente utilizado porque é suportado por todos os navegadores.

```js
const xhttpr = new XMLHttpRequest();
xhttpr.open('GET', 'Api_address', true);

xhttpr.send();

xhttpr.onload = () => {
  if (xhttpr.status === 200) {
    const response = JSON.parse(xhttpr.response);

    // faça o que quiser com o response aqui
    console.log('RESPONSE', response);
  } else {
    // crie o handler de error aqui
  }
};
```

Este código JavaScript usa **XMLHttpRequest** para fazer uma solicitação GET para uma API, após enviar a solicitação verifica se o status é 200 (OK), se verdadeiro analisa a resposta JSON, caso contrário trata erros.

### Fetch
Fetch is a method to call an API in JavaScript.

```js
fetch('Api_Address')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('API request failed');
    }
  })
  .then(data => {
    // faça o que quiser com o response aqui
    console.log('DADOS DA API', data);
  })
  .catch(error => {
    // crie o handler de error aqui
    console.log('ERRO NA CHAMADA', error);
  });
```

Ele retorna uma promise, que contém um único valor, seja um dado de resposta ou um erro.

### Axios
Axios é uma biblioteca de *open-source* para fazer requisições HTTP para servidores, é uma abordagem baseada em *promises*.
Ele suporta todos os navegadores modernos e é usado em aplicativos *real-time*, é fácil de instalar usando o *Node Package Manager* (NPM).

```js
import axios from 'axios';

axios.get('Api_Address')
  .then(response => {
    const response = response.data;

    // faça o que quiser com o response aqui
    console.log('RESPONSE', response);
  })
  .catch(error => {
    // crie o handler de error aqui
    console.log('ERRO NA CHAMADA', error);
  });
```

### JQuery AJAX
**jQuery** é uma biblioteca usada para simplificar a programação JavaScript e, se você a estiver usando, com a ajuda do método **$.ajax()** você pode fazer requisições HTTP assíncronas para obter dados.

```js
$.ajax({
  url: 'Api_Address',
  method: 'GET',
  success: function(response) {
    const parsedData = JSON.parse(response);
    // faça o que quiser com o response aqui
    console.log('RESPONSE', parsedData);
  },
  error: function(xhr, status, error) {
    // crie o handler de error aqui
    console.log('ERRO NA CHAMADA', error);
  }
});
```
