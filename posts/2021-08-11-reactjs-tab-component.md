---
title: ReactJS - como criar um tab component
description: Nesse artigo você vai aprender como construir um componente de guia no React e criar funções que tratam da alternância de guias.
date: 2021-08-11 18:45:32
image: /assets/img/react/react-banner.png
category: react
background: '#60cae1'
---

![tab-component](../assets/img/react/tab-component-04.png)

As **guias (tabs)** são componentes da interface do usuário que renderizam e exibem subseções para os usuários, elas organizam o conteúdo em categorias para fácil acesso e fazem seus aplicativos parecerem mais limpos, economizando espaço. As guias são um componente de **UI (User Interface)** predominante e é essencial entender como implementá-las como desenvolvedor.

### Nesse artigo você vai aprender:
- Criar um projeto exemplo com "Create React App"
- Criar um componente de Tabs
- Estilizar o componente Tabs
- Utilizar o hook **useState** para gerenciamento de estado
- Criar uma função para lidar com as Tabs


### Pré-requisitos
Para acompanhar este tutorial, você precisará ter o Node.Js instalado em sua máquina. Você também deve ter um conhecimento prático do seguinte:
- css
- javascript
- ReactJS
- React Hooks


## Criando um projeto
Vamos criar um projeto do zero para esse tutorial, para começar um novo projeto com ["Create React App"](https://github.com/facebook/create-react-app) execute o seguinte comando no seu terminal:

```bash
  npx create-react-app tab-component
```
![tab-component](../assets/img/react/tab-component-01.png)

![tab-component](../assets/img/react/tab-component-02.png)

O comando acima baixará todos os pacotes necessários para colocar o projeto React em execução. Em seguida, navegue até o diretório do seu projeto, e abra ele no seu vscode ou a IDE que você utiliza para programar.

Use o comando a seguir para iniciar seu projeto em um ambiente de desenvolvimento local:
```bash
  npm start
```

No seu navegador acesse http://localhost:3000 para ver seu projeto React.
![tab-component](../assets/img/react/create-react-app.png)

## Criando o componente Tabs

Antes de começar a criar o componente **Tabs**, precisamos remover alguns arquivos que vem ao criar um projeto com o **Create React App**, mas que não vamos utilizar.

Na raiz do projeto procure pelo diretório "**src**" e dentro dele pelo arquivo "**App.js**" e vamos limpar algumas linhas como a importação do logo e também todo o conteúdo JSX que esta no retorno da função App.

O arquivo "**App.js**" deve ficar assim após a limpeza:

```javascript
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}
export default App;

```

Procuro pelo diretório "**src**" crie uma pasta com o nome "**Components**" que hospedará os componentes que iremos criar. Em seguida dentro dela crie uma nova pasta com o nome "**TabComponent**" nela você vai criar um arquivo chamado "**Tabs.js**"

```bash
src
    +-- Components
      +-- TabComponent
        +-- Tabs.js
```

Adicione o código abaixo dentro do seu arquivo "**Tabs.js**":

```javascript
import React from "react";

const Tabs = () => {
  return (
    <div className="Tabs">
      <p>Hello Tab works</p>
    </div>
  );
};
export default Tabs;
```

Agora vamos importar nosso componente Tabs.js para dentro do nosso "**App.js**"

```javascript
import "./App.css";
import Tabs from "./Components/TabComponent/Tabs";

function App() {
  return (
    <div className="App">
      <Tabs />
    </div>
  );
}
export default App;
```

Vamos atualizar nosso componente de Tab com os codigos abaixo, insira no "**Tabs.js**":

```javascript
import React from "react";

const Tabs = () => {
  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li>Tab 1</li>
        <li>Tab 2</li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
      </div>
    </div>
  );
};
export default Tabs;
```

No código acima você pode notar que na div pai `<div className="Tabs">` temos dentro dela uma `<ul className="nav">` e também uma `<div className="outlet">` que vai renderizar o conteúdo da Tab ativa.

A principio está feio quando voce visualizar no seu navegador, mais tarde vamos estilizar com css.

No diretório "**Components**" vamos criar uma nova pasta com o nome "**AllTabs**" e dentro dela vamos criar dois arquivos um com o nome de "**FirstTab.js**" e outro com o nome de "**SecondTab.js**"

```bash
src
    +-- Components
      +-- AllTabs
        +-- FirstTab.js
        +-- SecondTab.js
```

Vamos agora inserir os códigos em cada um dos arquivos

**FirstTab.js**
```javascript
import React from "react";

const FirstTab = () => {
  return (
    <div className="FirstTab">
      <p>First Tab!! Hurray!!</p>
      {/* First tab content will go here */}
    </div>
  );
};
export default FirstTab;
```

**SecondTab.js**
```javascript
import React from "react";

const SecondTab = () => {
  return (
    <div className="SecondTab">
      <p>Second Tab!! Hurray!!</p>
      {/* Second  tab content will go here */}
    </div>
  );
};
export default SecondTab;
```

## Estilizando o componente Tabs.js
Precisamos adicionar um estilo ao que criamos, o propósito desse artigo não é ensinar ou descrever todos os estilos css que vamos aplicar no componente, entao para resumir, procure pelo arquivo "**App.css**" que está dentro do diretório "**src**" abra esse arquivo, limpe tudo que contém dentro dele e insira o código css abaixo:

**App.css**
```css
/* Remove browser defaults */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

/* Style App.js wrapper */
.App {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Tab Container */
.Tabs {
  width: 80%;
  height: auto;
  min-height: 400px;
  background: #053742;
  margin: 3.5rem auto 1.5rem;
  padding: 2rem 1rem;
  color: #e8f0f2;
  border-radius: 2rem;

  @media (max-width: 769px) {
    padding: 2rem 0;
  }
}

/* Tab Navigation */
ul.nav {
  width: 60%;
  margin: 0 auto 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #39a2db;
  border-radius: 2rem;

  @media (max-width: 768px) {
    width: 90%;
  }
}

ul.nav li {
  width: 50%;
  padding: 1rem;
  list-style: none;
  text-align: center;
  cursor: pointer;
  transition: all 0.7s;
  border-bottom-left-radius: 2rem;
  border-top-left-radius: 2rem;
}

ul.nav li:nth-child(2) {
  border-radius: 0;
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
}

ul.nav li:hover {
  background: rgba(50, 224, 196, 0.15);
}

ul.nav li.active {
  background: #39a2db;
}

```

Após inserir todo o estilo css do componente, a sua visualização no navegador deverá ser essa:

![tab-component](../assets/img/react/tab-component-03.png)


## Hook useState para gerenciamento de estado do Tab
Quando você passar pelos estilos acima, perceberá que temos um estilo específico para a guia ativa, mas como sabemos qual guia está ativa?

Para isso, usaremos o React Hook **useState** para gerenciar nosso estado.

Primeiro, precisamos importar o useState da biblioteca React e definir as guias ativas padrão, acesse o componente **Tabs.js** deixe como o código abaixo:

```javascript
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""}>Tab 1</li>
        <li className={activeTab === "tab2" ? "active" : ""}>Tab 2</li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
      </div>
    </div>
  );
};
export default Tabs;
```

Ao visualizá-lo em seu navegador, ele deve ser parecido com este:

![tab-component](../assets/img/react/tab-component-04.png)

A Tab 1 tem uma cor de fundo porque é a guia ativa. Agora, vamos dizer ao React DOM qual conteúdo mostrar quando uma Tab estiver ativa.

Primeiro, precisamos importar nosso **FirstTab** e **SecondTab** para o componente de Tab, e também assim como verificamos os navs para definir uma classe ativa para o link **nav** ativo, implementaremos a mesma abordagem em **outlet**, entao vamos atualizar nosso **Tabs.js**:

```javascript
import React, { useState } from "react";
import FirstTab from "../AllTabs/FirstTab";
import SecondTab from "../AllTabs/SecondTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="Tabs">
      <ul className="nav">
        <li className={activeTab === "tab1" ? "active" : ""}>Tab 1</li>
        <li className={activeTab === "tab2" ? "active" : ""}>Tab 2</li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;
```

O que estamos fazendo aqui é informar ao React DOM para mostrar a primeira tab apenas quando a tab ativa estiver "**tab1**". Caso contrário, mostra a segunda tab.

![tab-component](../assets/img/react/tab-component-05.png)

## Criando uma função para alternar as Tabs
Quando você clica em qualquer uma das tabs, nada acontece. Vamos mudar isso.

Esta função dirá ao React DOM qual conteúdo da tab queremos renderizar quando uma tab está ativa:

```javascript
  // Functions to handle Tab Switching

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };
```

Então, o que o código está fazendo? A primeira função define e atualiza o estado da tab ativa para "**tab1**" qualquer momento em que é chamada, e a segunda função faz o mesmo para "**tab2**".

A próxima etapa é inserir essas funções em nosso arquivo "**Tabs.js**" e tambem marcar essas funções em nossos links de navegação para serem chamadas e executadas quando o respectivo link de navegação for clicado, mais uma vez vamos atualizar nosso "**Tabs.js**":


```javascript
import React, { useState } from "react";
import FirstTab from "../AllTabs/FirstTab";
import SecondTab from "../AllTabs/SecondTab";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "tab1" ? "active" : ""}
          onClick={handleTab1}
        >
          Tab 1
        </li>
        <li
          className={activeTab === "tab2" ? "active" : ""}
          onClick={handleTab2}
        >
          Tab 2
        </li>
      </ul>
      <div className="outlet">
        {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}
      </div>
    </div>
  );
};
export default Tabs;
```

Ao alterar as Tabs os conteúdos são alterados, como pode ver nas imagens abaixo:

![tab-component](../assets/img/react/tab-component-05.png)

![tab-component](../assets/img/react/tab-component-06.png)

## Conclusão
Excelente trabalho por ter chegado tão longe! Neste tutorial, construímos um componente de Tabs com React, usamos React Hooks para gerenciar nosso estado de Tab ativo e criamos funções simples para controlar e lidar com a alternância das Tabs.
