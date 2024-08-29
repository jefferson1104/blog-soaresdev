---
title: React.js Singleton Pattern
description: Aprenda a implementar Singleton Pattern sem seu projeto.
date: 2024-08-29 10:00:00
image: /assets/img/react/reactjs-singleton-pattern.png
category: js
background: '#60cae1'
---

![React](../assets/img/react/reactjs-singleton-pattern.png)

# Singleton Pattern
O **Singleton Pattern** é um padrão de design que restringe a instância de uma classe a apenas um único objeto. Ele é útil quando você precisa garantir que apenas uma instância de uma classe exista durante o ciclo de vida de uma aplicação. Esse padrão é frequentemente utilizado para gerenciar recursos compartilhados, como conexões a banco de dados, configurações globais, ou até mesmo serviços como logging.

## Características do Singleton Pattern
- **Instância Única**: Garante que apenas uma instância de uma classe seja criada.
- **Acesso Global**: A instância única é acessível globalmente dentro da aplicação.
- **Controle Centralizado**: Facilita o controle centralizado de recursos.

## Exemplo Simples de Singleton em JavaScript
Embora o Singleton Pattern seja mais comum em linguagens orientadas a objetos, como Java ou C#, ele também pode ser implementado em JavaScript e, consequentemente, no React.

Neste exemplo, a classe **`Singleton`** cria uma instância única e armazena essa instância em **`Singleton.instance`**. Se tentarmos criar outra instância da classe, o construtor retornará a instância existente.

```js
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }

    this.data = "Instância única";

    Singleton.instance = this;
    return this;
  }

  getData() {
    return this.data;
  }

  setData(value) {
    this.data = value;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true, ambas as instâncias são iguais
```

## Singleton Pattern no React 18
No contexto de uma aplicação React, você pode usar o Singleton Pattern para gerenciar estados ou serviços globais. Aqui está um exemplo de como implementar e utilizar o Singleton Pattern no React para gerenciar uma configuração global.

### 1. Implementando o Singleton
```jsx
class ConfigService {
  constructor() {
    if (ConfigService.instance) {
      return ConfigService.instance;
    }

    this.config = {
      theme: 'light',
      language: 'en',
    };

    ConfigService.instance = this;
    return this;
  }

  getConfig() {
    return this.config;
  }

  setConfig(newConfig) {
    this.config = { ...this.config, ...newConfig };
  }
}

const configService = new ConfigService();
export default configService;
```

### 2. Usando o Singleton no React
Vamos usar este serviço de configuração Singleton em um componente React.

```jsx
import React, { useState } from 'react';
import configService from './ConfigService'; // Importando o singleton

const ConfigComponent = () => {
  const [config, setConfig] = useState(configService.getConfig());

  const toggleTheme = () => {
    const newTheme = config.theme === 'light' ? 'dark' : 'light';
    configService.setConfig({ theme: newTheme });
    setConfig(configService.getConfig()); // Atualizando o estado local
  };

  return (
    <div style={{ background: config.theme === 'light' ? '#fff' : '#333', color: config.theme === 'light' ? '#000' : '#fff' }}>
      <h1>Current Theme: {config.theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ConfigComponent;
```
Neste exemplo acima:

**`ConfigService`** é um serviço Singleton que gerencia as configurações da aplicação.
O componente **`ConfigComponent`** acessa e modifica as configurações usando esse Singleton.
Quando o usuário clica no botão "**`Toggle Theme`**", o tema é alterado no serviço Singleton, e o estado do componente é atualizado.

### 3. Usando em Múltiplos Componentes
Como o serviço é um Singleton, ele pode ser utilizado em outros componentes, e eles compartilharão a mesma instância e estado.

```jsx
import React from 'react';
import configService from './ConfigService'; // Importando o singleton

const AnotherComponent = () => {
  const config = configService.getConfig();

  return (
    <div>
      <h2>Language: {config.language}</h2>
    </div>
  );
};

export default AnotherComponent;
```

## Exemplo de Singleton Pattern com Funções e Hooks
Para implementar o Singleton Pattern em um modelo orientado a funções no React, você pode usar uma combinação de um hook personalizado e um módulo que exporta uma instância única do serviço.

### 1. Implementando o Singleton
Crie um módulo que exporta uma instância única de um serviço. Neste exemplo, criaremos um serviço de configuração global.

```jsx
// configService.js
const configService = (() => {
  let instance = null;

  function createInstance() {
    return {
      config: {
        theme: 'light',
        language: 'en',
      },
      getConfig() {
        return this.config;
      },
      setConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
      },
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export default configService;
```

**Neste código**

- Usamos uma IIFE (Immediately Invoked Function Expression) para criar um módulo com uma instância única.
- A função **`createInstance`** cria o objeto com o estado e métodos.
-- O método **`getInstance`** garante que apenas uma instância seja criada e retornada.

### 2. Usando o Singleton no Componente Funcional
Agora, use esse serviço Singleton em um componente funcional. Vamos criar um componente que interage com o **`configService`**.

```jsx
// ConfigComponent.jsx
import React, { useState, useEffect } from 'react';
import configService from './configService';

const ConfigComponent = () => {
  const [config, setConfig] = useState(configService.getInstance().getConfig());

  const toggleTheme = () => {
    const newTheme = config.theme === 'light' ? 'dark' : 'light';
    configService.getInstance().setConfig({ theme: newTheme });
    setConfig(configService.getInstance().getConfig());
  };

  useEffect(() => {
    // Opcional: Atualize o estado sempre que o serviço singleton for alterado.
    // Isso pode não ser necessário se o serviço já for síncrono.
    setConfig(configService.getInstance().getConfig());
  }, []);

  return (
    <div style={{ background: config.theme === 'light' ? '#fff' : '#333', color: config.theme === 'light' ? '#000' : '#fff' }}>
      <h1>Current Theme: {config.theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ConfigComponent;
```
**Neste componente**

- Usamos o hook **`useState`** para gerenciar o estado local do componente, que é inicializado com o valor do Singleton.

A função **`toggleTheme`** altera a configuração do Singleton e atualiza o estado local.

O hook **`useEffect`** é usado para garantir que o estado seja atualizado quando o componente é montado.

### 3. Usando o Singleton em Outros Componentes
Para garantir que o Singleton seja realmente único e compartilhado, você pode usar o mesmo serviço em outros componentes.
```jsx
// AnotherComponent.jsx
import React from 'react';
import configService from './configService';

const AnotherComponent = () => {
  const config = configService.getInstance().getConfig();

  return (
    <div>
      <h2>Language: {config.language}</h2>
    </div>
  );
};

export default AnotherComponent;
```
Neste componente, acessamos a mesma instância do serviço Singleton e exibimos a configuração.

# Conclusão
O Singleton Pattern pode ser aplicado em um ambiente orientado a funções usando um padrão de módulo que fornece uma instância única de um serviço. No exemplo acima, a implementação do Singleton é feita com uma função auto-executável que cria e retorna a instância única do serviço, e o serviço é acessado e manipulado por meio de hooks em componentes funcionais.

Essa abordagem permite que você mantenha o estado e as funcionalidades globais consistentes e acessíveis em toda a aplicação sem recorrer a componentes de classe.
