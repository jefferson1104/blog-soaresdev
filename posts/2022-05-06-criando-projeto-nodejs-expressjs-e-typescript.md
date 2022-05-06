---
date: 2022-05-06 01:00:00
title: Como criar um projeto NodeJS com ExpressJS e TypeScript
description: Vamos aprender as configurações iniciais básicas para criar um projeto NodeJS utilizando ExpressJS e TypeScript
category: node
background: '#47650b'
image: /assets/img/nodejs/nodejs-banner.png
---

![NODEJS E TYPESCRIPT](../assets/img/nodejs/nodejs-banner.png)

## Primeiros passos para iniciar o projeto
Primeiro passo é criar a pasta do nosso projeto e abrir ela com o nosso editor/IDE vscode, no terminal do vscode digite os comandos abaixo:

```bash
  # Inicie o gerenciador de pacotes de projetos
  $ npm init -y

  # Instale no projeto as dependencias de desenvolvimento abaixo
  $ npm i typescript @types/node ts-node-dev -D

  # Crie o arquivo de configuração do typescript tsconfig.json
  $ npx tsc --init
```

## Configure o arquivo tsconfig.json
Primeiro crie a pasta com o nome **"src"** na raiz do projeto, e dentro dessa pasta crie um arquivo com o nome **server.ts** mais tarde vamos utilizá-lo.

No arquivo **tsconfig.json** vamos fazer algumas alterações, siga os passos abaixo:

- Procure a linha com o nome **"target"** e defina o valor igual ao abaixo:
``` json
   "alvo": "es2020"
```

- Procure a linha com o nome **"rootDir"** e defina o valor igual ao abaixo:
``` json
   "rootDir": "./src",
```

- Procure a linha com o nome **"outDir"** e defina o valor igual ao abaixo:
``` json
   "outDir": "./dist",
```

## Criar script para executar o projeto na máquina local
Procure o arquivo "package.json", no arquivo dentro do "script" adicione a linha abaixo
``` json
   "dev": "ts-node-dev src/server.ts",
```

## ExpressJS
Agora vamos instalar o mini framework ou podemos chamá-lo de biblioteca, **ExpressJS**, com ele vamos trabalhar a parte **HTTP** do nosso servidor, basicamente lidar com rotas.

```bash
  # Instalar o ExpressJS
  $ npm i express

  # Instalar os types do ExpressJS como dependencia de projeto
  $ npm i -D @types/express
```

Criamos um arquivo chamado **"server.ts"**, nele vamos fazer nosso primeiro código no servidor, copie o código abaixo e deixe seu arquivo igual, explicando resumidamente estamos instanciando nosso express com suas configurações iniciais básicas, definindo a porta do nosso servidor **3333** e criando uma rota chamada **/users**, ao acessar essa rota teremos como resposta do servidor uma mensagem chamada "Hello World".

**"src/server.ts"**
```typescript
  import express from 'express';

  const app = express();

  app.get('/users', (request, response) => {
    return response.send('Hello World!');
  });

  app.listen(3333, () => {
    console.log('HTTP Server running!');
  });
```

![arquivo server.ts](../assets/img/nodejs/06-05-2022-configuracoes-projeto-nodejs-typescript-01.png)

## Executar o projeto
Para iniciar nosso projeto execute o comando que criamos nos scripts dentro do nosso **package.json**.
```bash
  $ npm run dev
```

se tudo der certo em nosso terminal do vscode veremos algo parecido como a imagem abaixo:
![arquivo server.ts](../assets/img/nodejs/06-05-2022-configuracoes-projeto-nodejs-typescript-02.png)

podemos testar também em nosso navegador acessando **http://localhost:3333/users**
![arquivo server.ts](../assets/img/nodejs/06-05-2022-configuracoes-projeto-nodejs-typescript-03.png)
