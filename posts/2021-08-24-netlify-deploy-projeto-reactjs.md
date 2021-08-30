---
title: Deploy de um projeto React.js na netlify
description: Aprenda a fazer o deploy de aplicações reactjs no netlify, a maneira mais facil de fazer um deploy do seu front end desenvolvido com react.
date: 2021-08-24 11:45:32
image: /assets/img/react/reactjs-deploy.jpg
category: react
background: '#60cae1'
---

![Deploy reactjs netlify](../assets/img/react/reactjs-deploy.jpg)

Nesse artigo eu vou explicar como fazer o deploy de uma aplicação feita com ReactJS, no geral aplicações front-ent é muito mais facil de colocar em produção do que back-end, vamos aprender a fazer deploy utilizando serviços do **netlify**, poderiamos utilizar outros semelhantes como o heroku, vercel e até mesmo firebase cloud, essa é uma forma mais simples de fazer deploy porém cheia de recursos e vai atender muito bem sua necessidade, tem um custo muito baixo e com opção 100% gratuita.

> **NOTA**: Você pode utilizar um projeto pessoal para seguir esse tutorial, mas se desejar utilizar o mesmo projeto baixe o repositório do projeto [gobarber-reactjs](https://github.com/jefferson1104/gobarber-reactjs) no meu github, é necessário que você tenha um repositório no seu github e faça uma cópia do nosso projeto ou utilize o seu projeto pessoal.

## Preparando o projeto para deploy
Como utilizamos o "Create React App" para criar esse projeto não teremos dificuldade para deixar pronto para deploy, se você observar o package.json vai ver que ja até existe um script para fazer build do projeto.

Porém é necessário que você tenha configurado suas variaveis de ambiente no projeto, nesse projeto do **goBarber** por exemplo temos um serviço de api então criamos um `.env` na raiz do projeto com a variável de ambiente `REACT_APP_API_URL` e utilizamos no `src/services/api.ts`.

![deploy](../assets/img/react/guia-reactjs-deploy-netlify-02.png)

![deploy](../assets/img/react/guia-reactjs-deploy-netlify-03.png)

> **NOTA**: é necessário que no início do nome de toda variavel que você criar insira o "REACT_APP" seguindo esse modelo "REACT_APP_NOME_DA_VARIAVEL"

## Deploy utilizando o Netlify

O netlify é uma ótima opção para fazer deploy de aplicações ReactJS, sem duvidas é uma plataforma para hospedagem maravilhosa e o melhor de tudo é que ele tem um plano gratuito muito bom, também existem outros serviços como o heroku, vercel e etc...

> **NOTA**: é necessário que você tenha um cadastro no netlify, e que você tenha seu projeto em um repositório no GitHub, GitLab ou Bitbucket.

Acesse [netlify.com](netlify.com)

Após fazer login no netlify, navegue até o menu **Sites** e em seguida clique no botão **New site from Git**.
![deploy](../assets/img/react/guia-reactjs-deploy-netlify-04.png)

Escolha uma opção para fazer a integração do seu repositório, nesse caso meu projeto está no **GitHub** entao foi a opção que escolhi.
![deploy](../assets/img/react/guia-reactjs-deploy-netlify-05.png)

Procure pelo seu repositório e clique nele.
![deploy](../assets/img/react/guia-reactjs-deploy-netlify-06.png)

Agora se você criou seu projeto com o "Create React App" igual fizemos no projeto gobarber você mantem as configurações como mostra nas imagens abaixo, clique no botão **Show advanced**.
![deploy](../assets/img/react/guia-reactjs-deploy-netlify-07.png)
![deploy](../assets/img/react/guia-reactjs-deploy-netlify-08.png)

Você vai perceber que temos novas opções uma delas é o botão **New variable** vamos clicar nele para inserir nossa variavel de ambiente, em seguida clique no botão **Deploy site**.
![deploy](../assets/img/react/guia-reactjs-deploy-netlify-09.png)

Feito os passos anterior você vai parar em uma tela como mostra a imagem abaixo, o processo de deploy da aplicação iniciou.
![deploy](../assets/img/react/guia-reactjs-deploy-netlify-10.png)

Com essa opção de deploy no netflify conseguimos utilizar recursos como: funções serveless, CI/CD, previews de pull requests, certificado ssl gratuito com let's encrypt, CDN para arquivos grandes, Analytics, autenticações, utilizar formulários, personalizar seu dominio nas opções de gerenciamento de dominios e etc..., enfim conseguimos fazer bastante coisa utilizando o deploy com o netlify.

