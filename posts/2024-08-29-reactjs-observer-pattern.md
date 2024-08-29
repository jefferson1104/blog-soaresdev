---
title: React.js Observer Pattern
description: Aprenda a trabalhar e implementar Observer Pattern.
date: 2024-08-29 11:00:00
image: /assets/img/react/reactjs-observer-pattern.png
category: js
background: '#60cae1'
---

![React](../assets/img/react/reactjs-observer-pattern.png)

# Observer Pattern
O **Observer Pattern** é um padrão de design comportamental que define uma dependência de um-para-muitos entre objetos, de modo que, quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente. Esse padrão é frequentemente usado quando você tem um objeto (o "sujeito") que precisa informar outros objetos (os "observadores") sobre mudanças de estado.

No contexto do React, você pode implementar o **Observer Pattern** para gerenciar estados compartilhados entre componentes sem recorrer a ferramentas mais complexas, como o Redux.

## Implementando o Observer Pattern no React (versão 18)
No React, o Observer Pattern pode ser útil em casos em que você deseja compartilhar um estado entre componentes sem usar uma biblioteca global de estado. Você pode criar uma classe simples para gerenciar o estado e registrar os componentes que precisam ser atualizados quando esse estado muda.

## Passos
- **Criar um Subject**: Um objeto que mantém o estado e notifica os observadores.
- **Registrar Observadores**: Componentes React que desejam ser notificados de mudanças no estado.
- **Notificar Observadores**: Quando o estado muda, todos os observadores são notificados.

Vamos construir um exemplo simples em React.

## Exemplo de código: Implementando Observer Pattern no React

### 1. Criando o Subject (Sujeito)

O Subject mantém o estado e os observadores registrados.
```jsx
class Subject {
  constructor() {
    this.observers = [];  // Lista de observadores
    this.state = 0;       // Estado inicial
  }

  // Registrar observador
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Remover observador
  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  // Notificar todos os observadores
  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.state));
  }

  // Atualizar estado e notificar observadores
  setState(newState) {
    this.state = newState;
    this.notifyObservers();
  }
}

export default new Subject();  // Exportar instância do sujeito
```

### 2. Criando o Observador (Componente React)
Os componentes React são observadores que serão atualizados quando o estado no Subject mudar.

```jsx
import React, { useEffect, useState } from 'react';
import subject from './subject';  // Importando o sujeito

const ObserverComponent = () => {
  const [state, setState] = useState(subject.state);

  useEffect(() => {
    // Função que será chamada quando o estado no subject mudar
    const update = (newState) => {
      setState(newState);
    };

    // Registrar o componente como um observador
    subject.addObserver({ update });

    // Remover o observador quando o componente for desmontado
    return () => subject.removeObserver({ update });
  }, []);

  return (
    <div>
      <h1>Estado Atual: {state}</h1>
    </div>
  );
};

export default ObserverComponent;
```

### 3. Controlando o Estado

Por fim, você pode criar um componente para alterar o estado no Subject e ver como os componentes registrados são atualizados.

```jsx
import React from 'react';
import subject from './subject';  // Importando o sujeito

const ControlComponent = () => {
  const incrementState = () => {
    subject.setState(subject.state + 1);  // Incrementa o estado no Subject
  };

  return (
    <div>
      <button onClick={incrementState}>Incrementar Estado</button>
    </div>
  );
};

export default ControlComponent;
```

### 4. Utilizando os Componentes no App
Agora, você pode integrar esses componentes no seu aplicativo React.
```jsx
import React from 'react';
import ObserverComponent from './ObserverComponent';
import ControlComponent from './ControlComponent';

function App() {
  return (
    <div>
      <ObserverComponent />
      <ControlComponent />
    </div>
  );
}

export default App;
```

## Explicação do Funcionamento:
**1. `Subject`**: Gerencia o estado e mantém uma lista de observadores. Sempre que o estado muda, o Subject notifica todos os observadores chamando o método update.

**2. `ObserverComponent`**: Esse componente é registrado como um observador. Ele se inscreve no Subject quando é montado (useEffect), e quando o Subject muda o estado, ele atualiza o estado local do componente.

**3. `ControlComponent`**: Um simples componente de controle que altera o estado no Subject.

Quando você clica no botão para alterar o estado, o `Subject` notifica todos os componentes observadores, que reagem à mudança de estado.

## Quando Usar o Observer Pattern no React?

- **Comunicação entre Componentes**: Quando você precisa que múltiplos componentes sejam atualizados ao mesmo tempo a partir de uma mudança em um estado centralizado.
- **Simplificação**: Para pequenos projetos onde o uso de uma biblioteca como Redux pode ser excessivo.

Esse exemplo é bastante básico, mas demonstra a essência do padrão Observer no contexto do React. Em aplicações mais complexas, você pode expandir esse conceito ou recorrer a soluções mais robustas de gerenciamento de estado.
