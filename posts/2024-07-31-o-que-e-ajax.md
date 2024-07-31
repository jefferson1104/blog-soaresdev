---
title: O que é AJAX?
description: Nesse artigo vamos entender o que é AJAX, como funciona e ver alguns exemplos.
date: 2024-07-31 12:30:00
image: /assets/img/javascript/javascript-ajax.png
category: js
background: '#ddcd34'
---

![AJAX](../assets/img/javascript/javascript-ajax.png)

AJAX (**Asynchronous JavaScript and XML**) é uma técnica para criar aplicações web interativas e dinâmicas. Ele permite que as páginas da web sejam atualizadas assíncronamente trocando pequenas quantidades de dados com o servidor nos bastidores. Isso significa que partes de uma página web podem ser atualizadas sem recarregar a página inteira.

# Como o AJAX Funciona
1 - **Evento no Lado do Cliente**: Um evento do usuário, como clicar em um botão, aciona uma chamada AJAX.

2 - **Objeto XMLHttpRequest**: O JavaScript cria um objeto XMLHttpRequest para se comunicar com o servidor.

3 - **Requisição ao Servidor**: O objeto XMLHttpRequest envia uma requisição ao servidor.

4 - **Resposta do Servidor**: O servidor processa a requisição e envia uma resposta de volta.

5 - **Atualização no Lado do Client**: O JavaScript processa a resposta do servidor e atualiza o conteúdo da página web sem recarregar.

# AJAX em JavaScript

## Usando fetch
A API fetch fornece uma maneira mais moderna e flexível de fazer requisições HTTP em JavaScript.

```javascript
function fetchData() {
  fetch("https://api.example.com/data")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Resposta da rede não foi ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("result").innerText = JSON.stringify(
        data,
        null,
        2
      );
    })
    .catch((error) => {
      console.error("Houve um problema com a operação fetch:", error);
    });
}

document.getElementById("fetchButton").addEventListener("click", fetchData);
```

Neste exemplo, a função fetch envia uma requisição GET para https://api.example.com/data. A resposta é convertida para JSON, registrada no console e exibida na página web. Se ocorrer um erro, ele é capturado e registrado.

## Usando XMLHttpRequest
```javascript
function fetchData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.example.com/data", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      console.log(data);
      document.getElementById("result").innerText = JSON.stringify(
        data,
        null,
        2
      );
    }
  };

  xhr.send();
}

document.getElementById("fetchButton").addEventListener("click", fetchData);
```

Neste exemplo, um objeto XMLHttpRequest é criado para enviar uma requisição GET assíncrona para https://api.example.com/data. Quando a resposta está pronta, os dados são registrados no console e exibidos na página web.

## AJAX em React.js
Requisições AJAX são comumente usadas em aplicações React para buscar dados de uma API.

### Exemplo com fetch e React Hooks
```jsx
import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Resposta da rede não foi ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return (
    <div>
      <h1>Dados Recuperados</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
```
Neste exemplo React:

- O hook useEffect é usado para realizar a requisição AJAX quando o componente é montado.
- O hook useState gerencia o estado para dados, carregamento e erro.
- O componente exibe uma mensagem de carregamento enquanto a requisição está em progresso, uma mensagem de erro se a requisição falhar ou os dados recuperados uma vez que foram obtidos com sucesso.

# Resumo
AJAX é uma técnica crucial para construir aplicações web dinâmicas e responsivas. Ao possibilitar a recuperação e atualizações assíncronas de dados, AJAX melhora a experiência do usuário ao evitar recarregamentos completos da página. Com JavaScript moderno e ferramentas como fetch e React, realizar requisições AJAX se tornou mais simples e eficiente.

**Veja o conteúdo em inglês na minha página do Medium:**
https://medium.com/@jeffersonscjunior/what-is-ajax-b81c639a1f66
