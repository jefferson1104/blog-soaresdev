---
title: Guia rápido de FlexBox css
description: Vamos aprender os fundamentos do CSS Flexbox
date: '2021-07-21 10:00:00'
thumbnail: /assets/img/flexbox-img-01.png
category: css
background: '#2278ee'
---

![Github Copilot](../assets/img/flexbox-img-01.png)
A meta do css **Flexbox** é ser um modo mais eficiente para a criação de layouts em um container, com ele podemos de uma melhor forma alinhar e distribuir os espaços, vamos aprender os fundamentos e como utilizar suas funcionalidades corretamente.

### O que é Flexbox?

Por muito tempo, as únicas ferramentas disponíveis para criar layouts em **CSS** e posicionar elementos com boa compatibilidade entre browsers eram **float** e **position**. Porém, essas ferramentas possuem algumas limitações muito frustrantes, especialmente no que diz respeito à responsividade. Algumas tarefas que consideramos básicas em um layout, como centralização vertical de um elemento-filho com relação a um elemento-pai ou fazer com que elementos-filhos ocupem a mesma quantidade de espaço, ou colunas terem o mesmo tamanho independente da quantidade de conteúdo interno, eram impossíveis ou muito difíceis de serem manejadas com floats ou position, ao menos de forma prática e flexível.

A ferramenta **Flexbox** foi criada para tornar essas tarefas mais simples e funcionais: os filhos de um elemento com Flexbox podem se posicionar em qualquer direção e pode ter dimensões flexíveis para se adaptar.

### Elementos

O Flexbox é um módulo completo e não uma única propriedade; algumas delas devem ser declaradas no container (o elemento-pai, que chamamos de flex container), enquanto outras devem ser declaradas nos elementos-filhos (os flex itens).

Se o layout "padrão" é baseado nas direções block e inline, o layout Flex é baseado em direções **"flex flow"**. Veja abaixo um diagrama da especificação, explicando a ideia central por trás do layout Flex.
![FlexBox image 02](../assets/img/flexbox-img-02.png)

Os ítens serão dispostos no layout seguindo ou o eixo principal ou o transversal.

- **Eixo principal**: o eixo principal de um flex container é o eixo primário e ao longo dele são inseridos os flex items. **Cuidado**: O eixo principal não é necessariamente horizontal; vai depender da propriedade **flex-direction** (veja abaixo).

- **main-start | main-end**: os _flex items_ são inseridos dentro do container começando pelo lado _start_, indo em direção ao lado _end_.

- **Tamanho principal**: A largura ou altura de um _flex item_, dependendo da direção do container, é o tamanho principal do ítem. A propriedade de tamanho principal de um flex item pode ser tanto **width** quanto **height**, dependendo de qual delas estiver na direção principal.

- **Eixo transversal**: O eixo perpendicular ao eixo principal é chamado de eixo transversal. Sua direção depende da direção do eixo principal.

- **cross-start | cross-end**: Linhas flex são preenchidas com ítens e adicionadas ao container, começando pelo lado _cross start_ do _flex container_ em direção ao lado _cross end_.

- **cross size**: A largura ou altura de um _flex item_, dependendo do que estiver na dimensão transversal, é o _cross size_ do íten. A propriedade _cross size_ pode ser tanto a largura quanto a altura do ítem, o que estiver na transversal.

**Flex container** é o elemento que envolve sua estrutura. Você define que um elemento é um Flex Container com a propriedade **display** e valores **flex** ou **inline-flex**.

```html
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

```css
.flex-container {
  display: flex;
}
```

**Flex Item** são elementos-filhos do flex container.

**Eixos** ou **Axes** são as duas direções básicas que existem em um Flex Container: _main axis_, ou eixo principal, e _cross axis_, ou eixo transversal.

### Propriedades para o elemento-pai

![FlexBox image 03](../assets/img/flexbox-img-03.png)

Quando utilizamos o _Flexbox_, é muito importante saber quais propriedades são declaradas no elemento-pai (por exemplo, uma **div** que irá conter os elementos a serem alinhados) e quais serão declaradas nos elementos-filhos. Abaixo, seguem propriedades que devem ser declaradas utilizando o elemento-pai como seletor (para alinhar elementos-filhos):

#### display

Esta propriedade define um _flex container_; inline ou block dependendo dos valores passados. Coloca todos os elementos-filhos diretos num contexto Flex.

```css
.container {
  display: flex; /* or inline-flex */
}
```

Note que a propriedade de CSS **columns** não tem efeito em um _flex container_.

#### flex-direction

![flex-direction](../assets/img/flexbox-img-04.svg)

Estabelece o eixo principal, definindo assim a direção em que os _flex items_ são alinhados no _flex container_. O Flexbox é (com exceção de um wrapping opcional) um conceito de layout de uma só direção. Pense nos _flex items_ inicialmente posicionais ou em linhas horizontais ou em colunas verticais.

```css
.flex-container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- `row`: esquerda para a direita em ltr (left to right), direita para a esquerda em rtl (right to left)
- `row-reverse`: direita para a esquerda em ltr, esquerda para a direita em rtl
- `column`: mesmo que row, mas de cima para baixo
- `column-reverse`: mesmo que row-reverse mas de baixo para cima
