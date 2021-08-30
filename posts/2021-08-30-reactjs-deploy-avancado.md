---
title: Deploy avançado de um projeto React.js
description: Aprenda como fazer o deploy de um projeto React.js em um servidor exclusivo para servir arquivos estáticos (CDN).
date: 2021-08-30 10:00:00
image: /assets/img/react/reactjs-deploy.jpg
category: react
background: '#60cae1'
---

![tab-component](../assets/img/react/reactjs-deploy.jpg)

Nesse artigo eu vou explicar como fazer o deploy de uma aplicação feita com React.js, no geral aplicações front-ent é muito mais facil de colocar em produção do que back-end, mas nesse tutorial eu vou mostrar um modelo de deploy em um nível um pouco mais avançado.

Esse tipo de deploy gera um custo um pouco maior do que utilizar serviços como netlify, heroku, e etc... a maneira de deploy que você vai aprender nesse artigo trata-se de utilizar um servidor para servir arquivos estáticos (html, css, javascript...), é mais conhecido como **CDN** utilizamos esse modelo de deploy quando nosso projeto cresce de uma maneira que existe a necessidade de escalar sua aplicação para um grande número de usuários.

Nesse exemplo vamos utilizar o **Google cloud plataform** mas o processo é muito parecido em outras plataformas como a a AWS, Digital ocean e outras, também vamos utilizar um projeto construido com **React.js** porém esse modelo de deploy pode ser utilizado com qualquer projeto front-end.

# Requisitos
- Uma conta no github
- Um projeto reactjs, pode utilizar o [goBarber](https://github.com/jefferson1104/gobarber-reactjs)
- Uma conta no google cloud plataform

# O que você vai aprender
- Criar um bucket (storage) no google cloud plataform
- Configurar conta de serviço e permissões
- Configurar a pagina inicial
- Criar um workflow do GitHub Actions
- Utilizar um IP Fixo e apontar o dominio

> Faça um cadastro no [Google Cloud Plataform](https://cloud.google.com/), no primeiro cadastro você ganha um crédito de $300 dólares para usar nos proximos 90 dias, além de poder utilizar mais de 20 recursos de forma gratuita, após fazer o cadastro navegue até a opção de [Cloud Storage](https://console.cloud.google.com/storage/).

# Preparando seu projeto
Nesse tutorial vamos utilizar como base um projeto criado com "**Create React App**", não teremos muita dificuldade para deixar esse projeto pronto para deploy, basicamente é ajustar as configurações e variaveis de ambiente se houver consumos de **API** e integração com algum **back-end.**

> **NOTA**: se você desejar utilizar o projeto [goBarber](https://github.com/jefferson1104/gobarber-reactjs) que utilizamos nesse tutorial, crie um repositório no seu github e armazene o código fonte do projeto, ou você pode utilizar um projeto pessoal para seguir esse tutorial.

Por exemplo, é necessário que você tenha configurado suas variaveis de ambiente no projeto, nesse projeto do **goBarber** por exemplo temos um serviço de api então criamos um `.env` na raiz do projeto com a variável de ambiente `REACT_APP_API_URL` e utilizamos no `src/services/api.ts`.

![deploy](./assets/img/react/guia-reactjs-deploy-02.png)

![deploy](./assets/img/react/guia-reactjs-deploy-03.png)

> **NOTA**: é necessário que no início do nome de toda variavel que você criar insira o "**REACT_APP**" seguindo esse modelo "**REACT_APP_NOME_DA_VARIAVEL**"

# Criando o bucket (storage)
Nessa etapa vamos criar nosso Bucket(storage) no google cloud plataform, um detalhe importante é ao nomear o bucket coloque o **dominio** da sua aplicação isso fará com que habilite algumas opções adicionais.

![deploy](./assets/react/guia-reactjs-deploy-11.png)

Importante você ter autoridade (ser dono) sobre o dominio que você utilizou para nomear o bucket, o google verifica se você tem essa autoridade, com o usuário que você está utilizando os serviços do google cloud plataform, acesse o [search console](https://search.google.com/search-console/) e adicione o dominio para seu usuário utilizando um dos meios de validação, em seguida insira o dominio do seu projeto.

![deploy](./assets/img/react/guia-reactjs-deploy-12.png)

- Aqui eu optei por manter a opção com melhor custo/beneficio, a latencia é baixa para servidores na carolina do sul, você pode escolher servidores no brasil em São Paulo porém fique ciente que o custo é muito maior.
  ![deploy](./assets/img/react/guia-reactjs-deploy-13.png)

- Mantenha opção "**Standard**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-14.png)

- Selecione a opção "**Detalhado**" e desmarque a opção "**Aplicar a prevenção do acesso público neste bucket**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-15.png)

- Mantenha opção "**Chave de criptografia gerenciada pelo Google**" e clique em "**Criar**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-16.png)

# Configurar contas de serviço
Nessa etapa vamos configurar e criar uma conta de serviço, com essa conta de serviço configurada vamos utiliza-la nas configurações do github actions para acessar o bucket, criar arquivos, deletar arquivos e muito mais sem precisar ficar acessando a plataforma da google.

- Primeiro vamos navegar ate o menu "**IAM e Administrador**" em seguida no menu lateral procure por "**Contas de serviço**" e por ultimo clique no botão "**Criar conta de serviço**" no menu horizontal superior, no final voce irá chegar nesse formulário:
  ![deploy](./assets/img/react/guia-reactjs-deploy-17.png)

- Dê um nome mais descritivel possivel, essa conta vamos utilizar no nosso gitHub Actions, depois de preencher tudo corretamente clique em "**Concluir**", após isso sua conta sera criada.
  ![deploy](./assets/img/react/guia-reactjs-deploy-18.png)


# Criando chave JSON (permissões)

Com a conta de serviço criada vamos criar uma chave privada, siga as instruções abaixo:

- Clique na sua conta de serviço
  ![deploy](./assets/img/react/guia-reactjs-deploy-19.png)

- Navegue até a guia "**CHAVES**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-20.png)

- Clique no botão "**ADICIONAR CHAVE**" em seguida na opção "**Criar nova chave**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-21.png)

- Escolha a opção "**JSON**" e clique em "**CRIAR**" faça o download da chave.
  ![deploy](./assets/img/react/guia-reactjs-deploy-22.png)

- Por fim a chave que voce fez download guarde ela
  ![deploy](./assets/img/react/guia-reactjs-deploy-23.png)

# Configurando a conta de serviço no bucket
O primeiro passo dessa etapa é copiar o endereço da conta de serviço, faça como na imagem abaixo copie o endereço da sua conta:

**ex:** *deploy-reactjs-github-actions@skilful-asset-323515.iam.gserviceaccount.com*

![deploy](./assets/img/react/guia-reactjs-deploy-24.png)

- Agora vamos navegar até o nosso bucket, voce pode pesquisar por "**Storage**" e procurar pelo bucket que criamos, em seguida clique nele:
  ![deploy](./assets/img/react/guia-reactjs-deploy-25.png)

- Navegue até a guia "**PERMISSÕES**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-26.png)

- Após clicar em "**PERMISSÕES**" aguarde carregar e em seguida clique no botão "**ADICIONAR**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-27.png)

- Preencha os dados como mostra a imagem abaixo, no campo "**Novos membros**" insira o endereço que copiamos da **conta de serviço**, e no campo "**Selecionar papel**" escolha a opção de **administrador de objeto de storage**.
  ![deploy](./assets/img/react/guia-reactjs-deploy-28.png)


# Configurando página inicial
Um dos motivos para criar um bucket com o nome do dominio que vamos utilizar na aplicação é justamente para liberar esse recurso pela interface de poder escolher a pagina inicial, se tivesse criado o bucket utilizando um nome simples ao invés do dominio esse recurso não seria liberado, e ai teria que fazer isso através de linha de comando.

- Para configurar navegue até o nosso bucket e clique naquele menu de ações (3 pontinhos) em seguida escolha a opção "**Editar configuração de site**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-29.png)

  ![deploy](./assets/img/react/guia-reactjs-deploy-30.png)

- Na primeira opção onde definimos a pagina inicial, utilizamos o arquivo **index.html** pois é o arquivo principal na build do react, também vamos utilizar esse mesmo index.html na opção de página de erro 404, pois como nossa aplicação foi desenvolvida com ReactJS nossas rotas são gerenciadas pelo react ao contrário de um site comum onde suas rotas são arquivos do servidor, pastas e etc... por fim clique em **salvar**.
  ![deploy](./assets/img/react/guia-reactjs-deploy-31.png)

Feito a configuração, nosso bucket já esta pronto, se você jogar la dentro um arquivo index.html verá que ele já está funcionando.

# Workflow github actions

Vamos configurar o workflow de CI (Integração contínua), para que toda vez que fazemos um novo commit no repositório basicamente ele envia a build do código atualizado do projeto para o nosso bucket.

- Vamos pegar o id do nosso projeto no google cloud plataform, é muito facil procure no menu horizontal superior o nome do projeto e clique nele, nesse exemplo da imagem a seguir o nome do nosso projeto é "**My First Project**" clicando nele ja podemos visualizar o **ID** do projeto que nesse exemplo é "**skilful-asset-323515**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-32.png)

- O próximo passo é ir no repositório do seu projeto lá no github, clicar em **settings** e em seguida no meu sidebar (lateral esquerda) clicar na opção **secrets**, vamos criar nossas secrets que são variaveis secretas que serão utilizadas no script de build do projeto.
  ![deploy](./assets/img/react/guia-reactjs-deploy-33.png)

- Agora vamos clicar no botão "New repository secret" e vamos criar nossa primeira variável secreta, o nome será **GCP_PROJECT** onde o valor vai ser o **ID** do projeto que copiamos, e por fim clique no botão "**Add secret**".
  ![deploy](./assets/img/react/guia-reactjs-deploy-34.png)

Feito isso vamos criar outra variável secreta que terá o nome "**GCP_SA_KEY**", o valor dessa variável será o conteúdo daquele arquivo **.json** que baixamos em passos anteriores desse tutorial, temos que converter o conteúdo desse arquivo para **base64**, se você é usuario de um sistema operacional Linux ou MacOS é facil siga as instruções abaixo:

```bash
# Navegue até o local onde está o arquivo .json
# Execute o comando:
$ cat nome-do-arquivo.json | base64

```

- Exemplo:
  ![deploy](./assets/img/react/guia-reactjs-deploy-35.png)

- Por fim crie a variável e coloque o conteúdo convertido para base64 no valor da variável, agora vamos navegar no menu "**Actions**" e criar nosso **workflow** clicando em "**set up a workflow yourself**".
  ![deploy](./assets/img/react/guia-reactjs-deploy-36.png)

Abaixo está o código do nosso workflow com as explicações nos comentarios, copie o conteúdo abaixo e cole no lugar onde inserir o workflow.

```bash
name: CI

on:
  push:
    branches: [main]

env:
  # coloque aqui o nome do seu bucket
  BUCKET: appreactjs.soaresdev.com

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      # Pega a versão mais atualizada do código
      - uses: actions/checkout@v2

      # Instala a versão do node que você definir
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 12.x

      # Verifica se existe auma lib nova no projeto, se não existir nada novo ele evita um yarn install
      - name: Get yarn cache directory path
        id: yarn-cache-dir-path
        run: echo "::set-output name=dir::$(yarn cache dir)"

      - uses: actions/cache@v2
        id: yarn-cache # use this to check for `cache-hit` (`steps.yarn-cache.outputs.cache-hit != 'true'`)
        with:
          path: ${{ steps.yarn-cache-dir-path.outputs.dir }}
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-

      # Instala as dependencias do projeto
      - name: Install dependencies
        run: yarn install

      # Caso sua aplicação possui testes ele executa os testes, caso não tenha comente essa parte.
      # - name: Run tests
      #   run: yarn test --watchAll false

      # Executa o script de build do projeto
      - name: Build
        run: yarn build

      # Instala o CLI do google cloud plataform.
      - uses: google-github-actions/setup-gcloud@master
        with:
          version: '290.0.1'
          project_id: ${{ secrets.GCP_PROJECT }}
          service_account_key: ${{ secrets.GCP_SA_KEY }}
          export_default_credentials: true

      # CLI Google cloud plataform: realiza o upload dos arquivos gerados na build do projeto para o bucket.
      - name: Upload filed to bucket
        run: gsutil -m rsync -R ./build gs://"$BUCKET"

      # CLI Google cloud plataform: faz com que os arquivos fiquem com permissão para acesso publico.
      - name: Allow public access
        run: gsutil -m acl ch -R -u AllUsers:R gs://"$BUCKET"

      # CLI Google cloud plataform: configura o cache de arquivos como imagens e javascript
      - name: Set Cache-Control
        run: gsutil -m setmeta -h "Cache-Control:public, max-age=15768000" gs://"$BUCKET"/**/*.{png,svg,css,js}

      # CLI Google cloud plataform: remove o cache do arquivo index.html
      - name: Set Cache-Control
        run: gsutil setmeta -h "Cache-Control:no-cache, no-store" gs://"$BUCKET"/index.html
```

- Para finalizar clique no botão "**Start commit**" e em seguida no botão "**Commit changes**".
  ![deploy](./assets/img/react/guia-reactjs-deploy-37.png)

Toda vez que voce fazer um commit no repositório, irá iniciar um deploy no bucket, você pode acompanhar esse workflow na sessão "Actions" como mostra as imagens abaixo:

![deploy](./assets/img/react/guia-reactjs-deploy-38.png)

![deploy](./assets/img/react/guia-reactjs-deploy-39.png)

![deploy](./assets/img/react/guia-reactjs-deploy-40.png)

![deploy](./assets/img/react/guia-reactjs-deploy-41.png)

Como fica seu bucket com os arquivos após o fim do deploy.
![deploy](./assets/img/react/guia-reactjs-deploy-42.png)

# Configurando IP fixo
Precisamos agora definir um ip fixo para ficar atribuido ao nosso bucket e também configurar o apontamento de dominio.

- A primeira coisa a fazer é navegar para o "**Cloud load balancing**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-43.png)

- Clique no botão "**ACESSE CLOUD LOAD BALACING**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-44.png)

- Clique em "**Criar balanceador de carga**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-45.png)

- Na sessão de HTTPS clique em "**INICIAR CONFIGURAÇÃO**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-46.png)

- Mantenha a opção "**Da internet para minhas VMs**" e clique em "**CONTINUAR**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-47.png)

- Agora vamos no primeiro ponto da configuração, clique em "**Configuração de back-end**" em seguida clique no botão "**CRIAR UM BUCKET DE BACK-END**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-48.png)

- Preencha conforme a imagem abaixo colocando um nome, selecionando o bucket do projeto, e clique em "**CRIAR**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-49.png)

- Agora clique em "**Configuração de front-end**" a seguir a primeira opção que vamos configurar é o "**Endereço IP**" clique em "**CRIAR ENDEREÇO IP**" no final preenhca os campos e clique em "**RESERVAR**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-50.png)

  ![deploy](./assets/img/react/guia-reactjs-deploy-51.png)

- Ainda em "**Configuração de front-end**" vamos criar um certificado ssl, siga as instruções como mostra na imagem abaixo, e no final clique em "**CRIAR**"
  ![deploy](./assets/img/react/guia-reactjs-deploy-52.png)

  ![deploy](./assets/img/react/guia-reactjs-deploy-53.png)

- No final clique em "**CONCLUIR**" e tambem no menu principal clique no botão azul "**CRIAR**" para criar o balancer.
  ![deploy](./assets/img/react/guia-reactjs-deploy-54.png)

  ![deploy](./assets/img/react/guia-reactjs-deploy-55.png)

# Configurando Dominio
A configuração de apontamento de dominio pode variar muito de acordo com cada situação, no meu caso basicamente eu fiz o apontamento do meu dominio utilizando os serviços do "**CloudFlare**".

- Acessei meu load balancer e peguei o ip fixo
  ![deploy](./assets/img/react/guia-reactjs-deploy-56.png)

  ![deploy](./assets/img/react/guia-reactjs-deploy-57.png)

- No final fiz um apontamento do dominio para este ip no meu cloudflare.
  ![deploy](./assets/img/react/guia-reactjs-deploy-58.png)

# CONCLUSÃO APP FUNCIONANDO!

![deploy](./assets/img/react/guia-reactjs-deploy-59.png)

Se você fez tudo conforme o tutorial ensinou sua aplicação reactjs deve estar publicada, o deploy é mais avançado e tentei detalhar o melhor possivel claro utilizando o cenário do google cloud plataform e também o meu projeto gobarber-reactjs.

Lembrando que este projeto necessita de um back-end (API) para funcionar corretamente, se você deseja saber como fazer deploy de um back-end (API) feito com Node.js acesse esse [link](https://blog.soaresdev.com/deploy-nodejs-typescript/).
