---
title: React.js Higher Order Components
description: Neste post vamos falar sobre um design pattern muito utilizado em projetos React.js
date: 2024-09-03 20:00:00
image: /assets/img/react/reactjs-higher-order-components.png
category: js
background: '#60cae1'
---

# Higher-Order Components (HOC)
Higher Order Components (HOCs) são um padrão avançado em React.js que envolve a criação de componentes que recebem outros componentes como argumentos e retornam novos componentes. Esse padrão é utilizado para reutilizar lógica entre componentes sem a necessidade de duplicar código.

![React](../assets/img/react/reactjs-higher-order-components.png)

# O que é um Higher Order Component (HOC)?
Um Higher Order Component é uma função que recebe um componente como argumento e retorna um novo componente. O HOC pode adicionar funcionalidades, modificar o comportamento ou mesmo alterar a renderização do componente original. HOCs são usados principalmente para implementar funcionalidades como autenticação, autorização, controle de renderização, manipulação de estado e muito mais.


## Sintaxe básica de um HOC
```jsx
function withExtraProps(WrappedComponent) {
  return function EnhancedComponent(props) {
    // Você pode adicionar lógica adicional aqui
    return <WrappedComponent {...props} extraProp="value" />;
  };
}
```

## Por que usar Higher Order Components?
- **Reutilização de código**: HOCs permitem encapsular lógica comum e compartilhá-la entre diferentes componentes.

- **Separação de preocupações**: Em vez de misturar diferentes funcionalidades dentro de um único componente, você pode usar HOCs para lidar com aspectos específicos, como autenticação ou manipulação de estado.

- **Composição**: HOCs permitem que você componha diferentes funcionalidades em um componente de forma flexível.

## Exemplo Simples: Um HOC para Adicionar Dados de Autenticação
Imagine que você tem vários componentes que precisam de informações sobre o usuário autenticado. Em vez de passar essas informações manualmente para cada componente, você pode criar um HOC que adiciona automaticamente os dados de autenticação ao componente.

```jsx
// HOC para adicionar dados de autenticação
function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const user = { name: "John Doe", authenticated: true }; // Simulação de dados de autenticação
    return <WrappedComponent {...props} user={user} />;
  };
}

// Componente que utiliza o HOC
function UserProfile({ user }) {
  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Nome: {user.name}</p>
      <p>Autenticado: {user.authenticated ? "Sim" : "Não"}</p>
    </div>
  );
}

// Aplicando o HOC
const UserProfileWithAuth = withAuth(UserProfile);

export default UserProfileWithAuth;
```

Neste exemplo, **`withAuth`** é um HOC que injeta automaticamente as informações do usuário no componente **`UserProfile`**. Assim, o componente **`UserProfileWithAuth`** agora pode acessar os dados de autenticação sem que você precise passar essas informações diretamente.

## Outro Exemplo: Controle de Renderização
Aqui está um exemplo de HOC que controla se o componente deve ou não ser renderizado, baseado em uma condição:

```jsx
// HOC para controle de renderização
function withConditionalRendering(WrappedComponent) {
  return function ConditionalComponent({ isVisible, ...props }) {
    if (!isVisible) {
      return null;
    }
    return <WrappedComponent {...props} />;
  };
}

// Componente que utiliza o HOC
function Dashboard(props) {
  return <h1>Bem-vindo ao Dashboard!</h1>;
}

// Aplicando o HOC
const ConditionalDashboard = withConditionalRendering(Dashboard);

export default function App() {
  return <ConditionalDashboard isVisible={true} />;
}
```

Aqui, o HOC **`withConditionalRendering`** recebe um componente (**`Dashboard`**) e retorna um novo componente (**`ConditionalDashboard`**) que só renderiza o conteúdo do dashboard se **`isVisible`** for **`true`**.

## Considerações Importantes
- **Não mutar o componente original**: Um HOC deve sempre retornar um novo componente, sem modificar o componente original. Isso mantém o código previsível e fácil de entender.

- **Preservar as props e a estrutura do componente original**: Certifique-se de passar todas as props para o componente original (...props). Isso garante que o HOC seja transparente em termos de funcionalidade.

- **Propagação de props estáticas e referências**: Além das props comuns, se o componente original tiver propriedades estáticas ou precisar de referências, você pode usar hoist-non-react-statics para preservar essas propriedades ao aplicar o HOC.

## Quando evitar HOCs
Com o surgimento de Hooks no React, alguns casos de uso dos HOCs podem ser substituídos por custom hooks, que oferecem uma maneira mais simples e direta de compartilhar lógica entre componentes. HOCs ainda são úteis em muitos cenários, especialmente em projetos legados, mas é importante considerar hooks como alternativa.

## Conclusão
Higher Order Components são uma poderosa ferramenta para reutilizar lógica e adicionar funcionalidades de forma eficiente no React.js. Eles permitem encapsular comportamentos comuns, evitando a duplicação de código e mantendo seus componentes mais simples e focados.

Agora, você pode usar HOCs em seus projetos React.js para melhorar a modularidade e a reutilização do código.
