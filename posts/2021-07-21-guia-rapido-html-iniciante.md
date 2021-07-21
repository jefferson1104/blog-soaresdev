---
title: Guia rápido de html5 para iniciantes
description: aprenda html5 em alguns minutos com este guia rápido para iniciante
date: '2021-07-21 10:30:00'
thumbnail: /assets/img/flexbox-img-01.png
category: html
background: '#ee6022'
---

![Github Copilot](../assets/img/html5.png)
Que tal aprender um pouco de HTML ? com este guia básico para iniciantes você consegue começar os estudos com HTML e HTML 5.

## O que é HTML?

O HTML é uma **linguagem de marcação de hipertexto** usada para criar sites de forma geral e páginas da web. O código usado para torná-los visualmente atraentes é conhecido como **CSS** mas não vamos falar sobre esse. Por enquanto, vamos nos concentrar em ensinar a você como construir, em vez de projetar.

Como dito anteriormente, o **HTML** é uma Linguagem de Marcação de HyperTexto e, para entender o HTML, é preciso entender antes o que é HyperTexto e uma Linguagem de Marcação.

##### O que é HyperTexto?

Hipertexto significa que o documento contém links que permitem ao leitor pular para outros lugares no documento ou para outro documento. A versão mais recente é conhecida como **HTML5**.

##### O que é uma Linguagem de Marcação de HyperTexto?

Sendo assim, por definição, uma linguagem de marcação de **HyperTexto** é uma maneira pela qual os computadores se comunicam para controlar como o texto é processado e apresentado visualmente na tela do usuário. Para fazer isso, o HTML usa dois conceitos fundamentais: **tags** e **atributos**.

##### O que são tags e atributos?

Tags e atributos são a base do HTML eles trabalham juntos, mas desempenham funções diferentes - vale a pena investir 2 minutos para diferenciar os dois .

## Como Escrever em HTML

Entendido conceitualmente o que é o HTML, vamos ver um pouco como escrevê-lo:

##### Tags HTML: O que são?

As tags HTML são usadas para marcar o início de um elemento HTML e geralmente são colocadas entre os sinais de “menor que” e “maior que”. Um exemplo de uma tag é: `<h1>` .

A maioria das tags deve ser aberta `<h1>` e fechada `</h1>` para funcionar.

```html
<h1>Texto de Título</h1>
```

##### Atributos HTML: O que são?

Os atributos HTML contêm informações adicionais e também, os atributos assumem a forma de uma tag de abertura e informações adicionais são colocadas dentro.

Um exemplo de atributo é **src** e **alt** da tag `<img />` como podemos ver abaixo:

```html
<img src="minha_foto.jpg" alt="Foto do meu Cachorro" />
```

> **REFORÇANDO**: Nesse caso, a fonte da imagem (**src**) e o texto alternativo (**alt**) são atributos da tag `<img />`.

##### Regras de ouro para lembrar

A grande maioria das tags deve ser aberta ( `<tag>` ) e fechada ( `</tag>` ) com as informações do elemento, como um título ou texto entre as tags.
Ao usar várias tags, as tags devem ser fechadas na ordem em que foram abertas .

Por exemplo:

```html
<strong><em>Este é um texto importante.</em></strong>
```

> Note que a tag `<em>` é fechada antes da tag `<strong>`, respeitando a ordem em que foram abertas.

## Criando a sua primeira Página HTML

Primeiro, você precisa abrir seu editor de HTML, onde encontrará uma página em branco limpa para escrever seu código.

De lá, você precisa fazer o layout de sua página com as seguintes tags.

Essas tags devem ser colocadas uma embaixo da outra, no topo de cada página HTML que você criar.

`<html>` - Esta tag sinaliza que daqui em diante vamos escrever em código HTML.

`<head>` - É para onde vão todos os **metadados da página**, coisas destinadas principalmente a mecanismos de pesquisa como google, bing, yandex e etc... e também outros programas de computador.

`<body>` - É para onde vai o conteúdo da página .

##### Exemplo de código para a sua Primeira Página HTML

```html
<html>
  <head>
    <title>SoaresDev - blog do programador</title>
  </head>
  <body>
    <h1>Esta é a minha Primeira Página</h1>
  </body>
</html>
```

> **PRATICAR**: Copie o código a seguir e cole em um editor de texto da sua preferência. Salve o arquivo como `minha_pagina.html` e tente abrir o arquivo utilizando um navegador como google chrome, microsoft edge, mozilla firefox ou qual você preferir.

##### Entendendo o código de exemplo

No código de exemplo você deve ter notado a utilização de algumas tags HTML. Dentro da `<head>` tag, há uma tag que sempre está incluída `<title>` mas há outras que são igualmente importantes.

**Tag Body**: Utilizamos a tag <body> para adicionarmos o conteúdo que de fato é visualizado na página pelo usuário. É aqui na tag <body> que incluímos textos, imagens, tabelas, formulários e tudo o mais que vemos nos sites por aí.

**Tags de Cabeçalho**: Os cabeçalhos HTML são muito importantes para a sua página. Eles auxiliam os usuários a entenderem a organização do seu conteúdo, além de facilitar a sua leitura. Por exemplo, esta subseção que você está lendo, chamada “Tags de Cabeçalho”, é uma tag de cabeçalho do tipo `<h4>`.

Em HTML, os títulos são escritos nos seguintes elementos:

```html
<h1>Titulo tamanho 01</h1>
<h2>Titulo tamanho 02</h2>
<h3>Titulo tamanho 03</h3>
<h4>Titulo tamanho 04</h4>
<h5>Titulo tamanho 05</h5>
<h6>Titulo tamanho 06</h6>
```

Como você deve ter adivinhado `<h1>` e `<h2>` deve ser usado para os títulos mais importantes, enquanto as marcas restantes devem ser usadas para subtítulos e textos menos importantes.

Fique atento sempre aos cabeçalhos, pois os robôs dos mecanismos de pesquisa usam essa ordem ao decifrar quais informações são mais importantes em uma página.

##### Como adicionar texto em HTML

Adicionar texto à nossa página HTML é simples usando um elemento aberto com a tag `<p>` que cria um novo parágrafo . Colocamos todo o nosso texto normal dentro do elemento `<p>` .

Quando escrevemos texto em HTML, também temos uma série de outros elementos que podemos usar para controlar o texto ou fazer com que ele apareça de uma determinada maneira . Confira o exemplo:

```html
<p>Você está aprendendo html aqui no blog soaresdev</p>
```

##### Outros Elementos-Chave

Eles são os seguintes:
![outros elementos html](../assets/img/html5-guia-rapido-01.png)

Essas tags devem ser abertas e fechadas em torno do texto em questão.

Vamos experimentar. Em uma nova linha no editor de HTML, digite o seguinte código HTML:

```html
<p>
  Seja bem vindo(a) ao <em>Blog SoaresDev</em>. Este é um blog para compartilhar
  conhecimentos com <strong>programadores web.</strong>
</p>
```

Não se esqueça de clicar em salvar e atualizar a página em seu navegador para ver os resultados, igual como fizemos no arquivo `minha_pagina.html`.

##### Como adicionar links em HTML

Adicionar links em HTML, sem sombra de dúvidas, é algo essencial para a sua página. Quase tudo em que você clica enquanto navega na web é um link que o leva a outra página do site que você está visitando ou a um site externo.

Os links são incluídos em um atributo aberto pela tag `<a>`. Este elemento é mais um dos elementos que usa um atributo e, portanto, parece diferente das tags mencionadas anteriormente .

A tag de abertura `<a>` (ou âncora) é escrita no formato:

```html
<a href="AQUI VEM O MEU LINK">Aqui vem o Texto meu Link</a>
```

A primeira parte do atributo (`href`) aponta para a página que será aberta assim que o link for clicado.

Enquanto isso, a segunda parte do atributo contém o texto que será exibido para um visitante a fim de induzi-lo a clicar naquele link.

Confira o exemplo:

<a href="https://google.com/" target="_blank">Acesse o google</a>

##### Como adicionar imagens em HTML

A tag `<img>` é responsável por inserir imagens em seu site, todo site possui ao menos uma imagem, portanto, saber como colocar imagem em HTML é essencial.

Confira no exemplo:

```html
<img src="minha_foto.jpg" alt="esse sou eu" />
```

Note que são utilizados os atributos **src** e **alt**. Eles são responsáveis por, respectivamente, definir o **caminho para o arquivo da sua Imagem** e o **texto alternativo** que aparecerá na tela do usuário caso a imagem não carregue.

## Continue os Estudos

Este guia foi apenas uma introdução básica para o html, existem muitas outras tags e atributos que não mensionamos aqui nesse post, para lhe ajudar abaixo tem um link de um documento pdf para voce estudar um pouco mais sobre essa linguagem de marcação, e também uma playlist no youtube do professor **Gustavo Guanabara** que ele ensina html5 e css3 completo para você aprender de vez.

[Curso em PDF de HTMl5](https://www.w3c.br/pub/Cursos/CursoHTML5/html5-web.pdf)

[Playlist de curso completo sobre HTML5 e CSS3](https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n)
