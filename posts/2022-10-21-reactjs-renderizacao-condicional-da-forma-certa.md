---
title: Pare de usar “&&” para renderização condicional no React
description: Evite bugs não usando "&&" em componentes React
date: 2022-10-21 10:00:00
image: /assets/img/react/reactjs-deploy.jpg
category: react
background: '#60cae1'
---

![wrong-render-conditional](../assets/img/react/wrong-render-conditional.png)

Se você já viu algum aplicativo React, sabe como renderizar condicionalmente partes de um componente dependendo de props e state. Embora existam várias maneiras de renderização condicional, este artigo se concentra no operador lógico `&& (AND)` do JavaScript. A principal razão para essa ênfase é que o operador `&&` geralmente leva a bugs de interface do usuário, que podem ser facilmente evitados e muitas vezes não são mencionados.

## Como funciona o operador && (AND)
Um exemplo clássico de seu uso no React seria:
```js
function MyComponent({ contition }) {
  return (
    <div>
      <h1>Title</h1>
      {contition && <ConditionalComponent />}
     </div>
  );
}
```

##### Resumindo:
- se `condition` é um valor verdadeiro, <ConditionalComponent /> é renderizado
- se `condition` é um valor falso, <ConditionalComponent /> não é renderizado

Não é nada específico do React, mas sim um comportamento de JavaScript e outras linguagens de programação chamado **avaliação de curto-circuito**. Ou seja, se o primeiro operando `condition` for falso, o operador `&& (AND)` para e não avalia o segundo operador `<ConditionalComponent/>`.

Você pode tentar isso no seu navegador executando o snippet de código abaixo no Console:
```js
// Isso exibirá uma caixa de alerta.
true && alert('hello');

// Isso não fará nada.
false && alert('hello');
```

##### Por exemplo:
- Se `condition` é `0`, o `0` é exibido na interface do usuário.
- Se `condition` é `undefined` você receberá um erro parecido como este:

`Uncaught Error: Error(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.`

## O que usar em vez do operador && (AND)
Para evitar mostrar algo que você não deseja na interface do usuário, como `0`, que pode atrapalhar o layout, use o `operador ternário` do `JavaScript`, veja um exemplo abaixo:

```js
condition ? <ConditionalComponent /> : null;
```

##### Conclusāo
Para evitar erros de interface do usuário, use o `operador ternário` do JavaScript para renderização condicional de componentes `React` em vez do operador lógico `&&`.

```js
  🔴 BAD
  condition && <ConditionalComponent />

  🟢 GOOD
  condition ? <ConditionalComponent /> : null
```

##### Fonte:
https://medium.com/geekculture/stop-using-for-conditional-rendering-in-react-a0f7b96200f8
