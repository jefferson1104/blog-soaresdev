---
title: React.js Container-Presenter Pattern
description: Aprenda a implementar Container-Presenter Pattern sem seu projeto.
date: 2024-08-29 10:00:00
image: /assets/img/react/reactjs-container-present-pattern.png
category: js
background: '#60cae1'
---

![React](../assets/img/react/reactjs-container-present-pattern.png)

# Container-Presenter Pattern
O **Container-Presenter Pattern** (ou **Container-Presentation Pattern**) é um padrão de projeto usado no desenvolvimento de aplicações front-end, particularmente em frameworks como React. Ele ajuda a separar a lógica da aplicação da lógica de renderização, tornando o código mais modular, fácil de testar e reutilizável.

## Estrutura do Padrão

**Container Component (Componente Contêiner)**
- É responsável por gerenciar o estado e a lógica da aplicação.
- Se comunica com APIs, manipula dados, e repassa esses dados para o componente de apresentação.
- Não se preocupa com a renderização visual.

**Presenter Component (Componente de Apresentação):**
- Focado apenas na renderização dos dados e na interface do usuário.
- Recebe dados via props do componente contêiner.
- Não gerencia estado ou lógica complexa.

## Vantagens
- **Reutilização**: O componente de apresentação pode ser reutilizado em diferentes partes da aplicação, com diferentes dados.

- **Testabilidade**: A lógica da aplicação é isolada no componente contêiner, facilitando a criação de testes unitários.

- **Manutenção**: Facilita a manutenção do código, pois separa responsabilidades de forma clara.

## Exemplo
Vamos criar um exemplo simples onde o **container** gerencia a lógica de buscar dados de uma API e o **presenter** é responsável por renderizar os dados.

**Componente de Apresentação (Presenter)**
Este componente é simples e apenas recebe os dados via props e os exibe na tela.
```jsx
import React from 'react';

// Componente de apresentação responsável apenas pela renderização
const UserList = ({ users }) => {
  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
```

**Componente Contêiner (Container)**
Neste exemplo, o componente **`UserContainer`** gerencia o estado dos dados (users) e o status de carregamento (loading). Ele busca os dados da API e, após o carregamento, passa os dados para o componente **`UserList`**, que é responsável por renderizar a lista de usuários.

```jsx
import React, { useEffect, useState } from 'react';
import UserList from './UserList'; // Importando o componente de apresentação

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch de dados de uma API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Renderiza um estado de loading ou o componente de apresentação com os dados
  return (
    <div>
      {loading ? <p>Carregando...</p> : <UserList users={users} />}
    </div>
  );
};

export default UserContainer;
```

**Usando o Componente no App**
No React 18, a maneira de implementar o padrão Container-Presenter permanece essencialmente a mesma. Entretanto, alguns recursos como o **`Concurrent Mode`** e **`Suspense`** podem ser aproveitados para melhorar a experiência do usuário em aplicações mais complexas. Por exemplo, você pode utilizar o **`Suspense`** para lidar com o carregamento dos dados de forma mais elegante.

```jsx
import React, { Suspense } from 'react';
import UserContainer from './UserContainer'; // Importando o container

const App = () => {
  return (
    <div>
      <h1>Minha Aplicação</h1>
      <Suspense fallback={<p>Carregando conteúdo...</p>}>
        <UserContainer /> {/* O container gerencia a lógica e passa os dados para o presenter */}
      </Suspense>
    </div>
  );
};

export default App;
```

## Conclusão
O **Container-Presenter Pattern** é uma excelente abordagem para separar responsabilidades e manter o código organizado em aplicações React. Com este padrão, o código se torna mais fácil de manter, testar e reutilizar, proporcionando uma melhor experiência tanto para desenvolvedores quanto para usuários.
