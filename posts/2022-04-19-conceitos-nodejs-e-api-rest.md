---
date: 2022-04-19 20:20:00
title: Conceitos de NodeJS e API REST
description: Saiba os conceitos sobre a NodeJS e API REST
category: node
background: '#47650b'
image: /assets/img/nodejs/nodejs-api-rest.png
---

![NODEJS AND API REST](../assets/img/nodejs/nodejs-api-rest.png)

# NODEJS
### O QUE É O NODEJS ?
Uma plataforma open source que permite a execução da linguagem de programação **Javascript** do lado do servidor.
Possui o motor **V8** criado pela google, trata-se de um interpretador de javascript, é utilizado nos navegadores de internet, temos também a **libuv** que é uma biblioteca multiplataforma com foco em I/O assincrono, foi criada inicialmente para o NodeJS mas nos dias atuais é utilizada em outros cenários e também em outras linguagens de programação.
Utilizando o **V8** com a **libuv** temos um processamento mais rapido da linguagem de programação Javascript no NodeJS, mas além disso temos também outros conjuntos de módulos no NodeJS e vamos falar sobre eles mais a frente.

O criador do NodeJS **Ryan Dahl** atuando em um projeto,encontrou um problema no qual ele percebeu que na época as tecnologias existentes não davam um bom suporte ao processo de **I/O**, isso o fez com que ele tivesse um interesse em estudar e criar uma tecnologia que pudesse trabalhar bem com I/O assincrono e resolver esse problema que ele teve dificuldades.

### CARACTERÍSTICAS DO NODEJS
O node é baseado em **Arquitetura Event Loop** (ou seja baseado em eventos) e dentro desse Event Loop temos uma pilha de funções chamada **Call Stack**. Também possui a característica de ser **Single Thread**, também podemos dizer que o node é **Non-blocking I/O** diferente de outras linguagens como por exemplo PHP e Java, ou seja ele nao precisa que uma função A termine para que a funçao B possa ser executada. Possui também diversos módulos como **http**, **dns**, **fs**, **buffer** entre outros...

### GERENCIADORES DE PACOTE E FRAMEWORKS
São gerenciadores que através deles conseguimos instalar bibliotecas externas (biblioteca de terceiros) em nossos projetos, e também criar nossas próprias bibliotecas para que outras pessoas utilizem em seus projetos. Atualmente utilizamos o **NPM** (Node Package Manager) e o **Yarn** como gerenciadores em nossos projetos que utilizam NodeJS.

Para o nosso querido NodeJS temos diversos frameworks, o mais utilizado é o **Express** e **Nest.js**, mas também tem diversos outros super conhecidos como **Adonis.js** e **Egg.js**.

# API REST

### O QUE É API ?
API um acronimo para **Application Programming Interface**(Interface de Programação de aplicativos), é um conjunto de especificações e requisitos que determina como um aplicativo se comunica com outro. Supondo que você está desenvolvendo um e-commerce você vai utilizar ou criar um serviço de frete para demonstrar os valores e tempo de entrega a seus usuários, com isto pode ocorrer a necessidade de utilziar uma API de terceiros como por exemplo a do correios, e para você desenvolver esse serviço é necessário consumir essa API e consequentemente é importante que essa API tenha uma boa **documentação para o desenvolvedor**, o mesmo vale para o caso de você estar criando sua própria API, você deve fornecer uma boa documentação para outros desenvolvedores que possam consumir sua API, para que eles possam saber as rotas que podem acessar, quais os parametros enviar e os tipos de retornos que ele possa ter.

### O QUE É REST ?
REST um acronimo para **Representation State Transfer** (Transferência Representacional de Estado), podemos dizer trata-se de um **modelo de arquitetura** e basicamente quando utilizamos os seus conceitos para criar uma API então chamamos nossa aplicação desenvolvida de **API REST**.

> **REGRAS DO REST**:

**1 - Client-Server:** tem que existir os dois papéis, o client e o server, não necessáriamente precisa ser front-end e back-end, podemos ter por exemplo uma API que consome outra API.
**2 - Stateless:** o sistema não pode ter sessões amarradas/criadas para o client, e as requisições tem que ter todos os dados para o processo ser realizado e a resposta ser completa.
**3 - Cache:** precisa permitir que o cache seja feito caso necessário.
**4 - Interface Uniforme:** a API não pode fazer distinção de clients, por exemplo não pode diferenciar e processar algo diferente para o navegador, app mobile e etc...
**5 - Camadas:** sistemas em camadas entre o client e a API deve ser possivel adicionar algum serviço como por exemplo log da aplicação.
**6 - Código sob demanda:** por exemplo javascript importando direto do servidor da API.
> saiba mais sobre [clicando aqui](https://www.alura.com.br/artigos/rest-principios-e-boas-praticas)

### MÉTODOS DE REQUISIÇÕES
**GET** - Leitura de dados, quando precisamos buscar uma informação da nossa aplicação.
**POST** - Criação de dados, quando precisamos gravar dados na aplicação.
**PUT** - Atualização de dados, quando precisamos atualizar alguma informação da nossa aplicação.
**DELETE** - Deleção de dados, quando precisamos deletar alguma informação da nossa aplicação.
**PATCH** - Atualização parcial dos dados, quando precisamos especificamente atualizar somente uma parte das informações da nossa aplicação.

### HTTP CODES
1XX: Informativo - a solicitação foi aceita ou o processo continua em andamento;

2XX: Confirmação
- 200: Requisição bem sucedida.
- 201: Created - geramente usado para o método POST após uma inserção.

3XX: Redirecionamento
- 301 - Moved Permanently (quando algo foi movido permanentemente)
- 302 - Moved

4XX: Erro do client
- 400 - Bad Request
- 401 - Unauthorized
- 403 - Forbidden
- 404 - Not Found
- 422 - Unprocessable Entity

5XX: Erro no server - o servidor falhou ao concluir a solicitação
- 500 - Internal server error
- 502 - Bad Gateway

## PARÂMETROS DAS REQUISIÇÕES
**Header Params**: parâmetros que vão no cabeçalho das requisições, como por exemplo tokens, métodos, controle de sessão entre outros...

**Query Params**: parâmetros inseridos na url, por exemplo quando queremos fazer paginação e etc... são definidios pela chave, valor e também tem o delimitador quando necessário.

**Route Params**: são parâmetros que são inseridos nas rotas da requisição.

**Body Params**: são parâmetros que enviamos no corpo das requisições.

![parametros das requisicoes](../assets/img/nodejs/parametros-das-requisicoes.png)

### BOAS PRÁTICAS API REST
![boas praticas para api rest](../assets/img/nodejs/boas-praticas-api-rest.png)
