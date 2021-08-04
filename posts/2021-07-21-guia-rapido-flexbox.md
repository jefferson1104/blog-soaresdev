---
title: Guia rápido de FlexBox css
description: Aprenda os fundamentos de css flexbox com este guia rápido para iniciantes.
date: '2021-07-21 10:00:00'
image: /assets/img/css3/flexbox-img-01.png
category: css
background: '#2278ee'
---

![Github Copilot](../assets/img/css3/flexbox-img-01.png)
A meta do css **Flexbox** é ser um modo mais eficiente para a criação de layouts em um container, com ele podemos de uma melhor forma alinhar e distribuir os espaços, vamos aprender os fundamentos e como utilizar suas funcionalidades corretamente.

### O que é Flexbox?

Por muito tempo, as únicas ferramentas disponíveis para criar layouts em **CSS** e posicionar elementos com boa compatibilidade entre browsers eram **float** e **position**. Porém, essas ferramentas possuem algumas limitações muito frustrantes, especialmente no que diz respeito à responsividade. Algumas tarefas que consideramos básicas em um layout, como centralização vertical de um elemento-filho com relação a um elemento-pai ou fazer com que elementos-filhos ocupem a mesma quantidade de espaço, ou colunas terem o mesmo tamanho independente da quantidade de conteúdo interno, eram impossíveis ou muito difíceis de serem manejadas com floats ou position, ao menos de forma prática e flexível.

A ferramenta **Flexbox** foi criada para tornar essas tarefas mais simples e funcionais: os filhos de um elemento com Flexbox podem se posicionar em qualquer direção e pode ter dimensões flexíveis para se adaptar.

### Elementos

O Flexbox é um módulo completo e não uma única propriedade; algumas delas devem ser declaradas no container (o elemento-pai, que chamamos de flex container), enquanto outras devem ser declaradas nos elementos-filhos (os flex itens).

Se o layout "padrão" é baseado nas direções block e inline, o layout Flex é baseado em direções **"flex flow"**. Veja abaixo um diagrama da especificação, explicando a ideia central por trás do layout Flex.
![FlexBox image 02](../assets/img/css3/flexbox-img-02.png)

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

![FlexBox image 03](../assets/img/css3/flexbox-img-03.png)

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

![flex-direction](../assets/img/css3/flexbox-img-04.png)

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

#### flex-wrap

![flex-wrap](../assets/img/css3/flexbox-img-05.png)

Por padrão, os _flex items_ vão todos tentar se encaixar em uma só linha. Com esta propriedade você pode modificar esse comportamento e permitir que os ítens quebrem para uma linha seguinte conforme for necessário.

```css
.flex-container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap`: todos os flex items ficarão em uma só linha
- `wrap`: os flex items vão quebrar em múltiplas linhas, de cima para baixo
- `wrap-reverse`: os flex items vão quebrar em múltiplas linhas de baixo para cima

#### flex-flow

A propriedade **flex-flow** é uma propriedade _shorthand_ (uma mesma declaração inclui vários valores relacionados a mais de uma propriedade) que inclui _flex-direction_ e _flex-wrap_. Determina quais serão os eixos pricipal e transversal do container. O valor padrão é **row nowrap**.

```css
.flex-container {
  flex-flow: row nowrap | row wrap | column nowrap | column wrap;
}
```

#### justify-content

![justify-content](../assets/img/css3/flexbox-img-06.png)
Esta propriedade define o alinhamento dos ítens ao longo do eixo principal. Ajuda a distribuir o espaço livre que sobrar no container tanto se todos os flex items em uma linha são inflexíveis, ou são flexíveis mas já atingiram seu tamanho máximo. Também exerce algum controle sobre o alinhamento de ítens quando eles ultrapassam o limite da linha.

```css
.flex-container {
  justify-content: flex-start | flex-end | center | space-between | space-around
    | space-evenly;
}
```

- `flex-start`: os ítens são alinhados junto à borda de início (start) de acordo com qual for a _flex-direction_ do container.

- `flex-end`: os ítens são alinhados junto à borda final (end) de acordo com qual for a _flex-direction_ do container.

- `start`: os ítens são alinhados junto à borda de início da direção do _writing-mode_ (modo de escrita).

- `end`: os ítens são alinhados junto à borda final da direção do _writing-mode_ (modo de escrita).

- `left`: os ítens são alinhados junto à borda esquerda do container, a não ser que isso não faça sentido com o _flex-direction_ que estiver sendo utilizado. Nesse caso, se comporta como _start_.

- `right`: os ítens são alinhados junto à borda direita do container, a não ser que isso não faça sentido com o _flex-direction_ que estiver sendo utilizado. Nesse caso, se comporta como _start_.

- `center`: os ítens são centralizados na linha.

- `space-between`: os ítens são distribuídos de forma igual ao longo da linha; o primeiro ítem junto à borda inicial da linha, o último junto à borda final da linha.

- `space-around`: os ítens são distribuídos na linha com o mesmo espaçamento entre eles. Note que, visualmente, o espaço pode não ser igual, uma vez que todos os ítens tem a mesma quantidade de espaço dos dois lados: o primeiro item vai ter somente uma unidade de espaço junto à borda do container, mas duas unidades de espaço entre ele e o próximo ítem, pois o próximo ítem também tem seu próprio espaçamento que está sendo aplicado.

- `space-evenly`: os ítens são distribuídos de forma que o espaçamento entre quaisquer dois itens da linha (incluindo entre os ítens e as bordas) seja igual.

**Nota**: o suporte dado pelos navegadores para estes valores é difuso. Por exemplo, **space-between** não tem suporte em nenhuma versão do Edge (até a elaboração deste tutorial) e **start/end/left/right** ainda não foram implementados no Chrome. Para tabelas detalhadas, consulte o MDN. Os valores mais seguros são _flex-start_, _flex-end_ e _center_.

Também existem duas palavras-chave adicionais que você pode usar em conjunto com estes valores: **safe** e **unsafe**. _Safe_ garante que, independente da forma que você faça esse tipo de posicionamento, não seja possível "empurrar" um elemento e fazer com que ele seja renderizado para fora da tela (por exemplo, acima do topo), de uma forma que faça com que o conteúdo seja impossível de movimentar com a rolagem da tela (o CSS chama isso de "perda de dados").

#### align-items

![align-items](../assets/img/css3/flexbox-img-07.png)
define o comportamento padrão de como _flex items_ são alinhados de acordo com o eixo transversal (cross axis). De certa forma, funciona de forma similar ao `justify-content`, porém no eixo transversal (perpendicular ao eixo principal).

```css
.flex-container {
  align-items: stretch | flex-start | flex-end | center | baseline;
}
```

- `stretch`: estica os ítens para preencher o container, respeitando o _min-width / max-width_.

- `flex-start / start / self-start`: ítens são posicionados no início do eixo transversal. A diferença entre eles é sutil e diz respeito às regras de _flex-direction_ ou _writing-mode_.

- `center`: ítens são centralizados no eixo transversal.

- `baseline`: ítens são alinhados de acordo com suas baselines.

Os modificadores `safe` e `unsafe` pode ser usados em conjunto com todas essas palavras-chave (favor conferir o suporte de cada navegador) e servem para prevenir qualquer alinhamento de elementos que faça com que o conteúdo fique inacessível (por exemplo, para fora da tela).

#### align-content

![align-content](../assets/img/css3/flexbox-img-08.png)
Organiza as linhas dentro de um flex container quando há espaço extra no eixo transversal, similar ao modo como `justify-content` alinha ítens individuais dentro do eixo principal.

**Importante**: Esta propriedade não tem efeito quando há somente uma linha de flex items no container.

```css
.flex-container {
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
}
```

- `flex-start / start`: ítens alinhados com o início do container. O valor (com maior suporte dos navegadores) _flex-start_ se guia pela _flex-direction_, enquanto _start_ se guia pela direção do _writing-mode_.

- `flex-end / end`: ítens alinhados com o final do container. O valor (com maior suporte dos navegadores)_ flex-end_ se guia pela _flex-direction_, enquanto _end_ se guia pela direção do _writing-mode_.

- `center`: ítens centralizados no _container_.

- `space-between`: ítens distribuídos igualmente; a primeira linha junto ao início do _container_ e a última linha junto ao final do _container_.

- `space-around`: ítens distribuídos igualmente com o mesmo espaçamento entre cada linha.

- `space-evenly`: ítens distribuídos igualmente com o mesmo espaçamento entre eles.

- `stretch`: ítens em cada linha esticam para ocupar o espaço remanescente entre elas.

Os modificadores `safe` e `unsafe` pode ser usados em conjunto com todas essas palavras-chave (favor conferir o suporte de cada navegador) e servem para prevenir qualquer alinhamento de elementos que faça com que o conteúdo fique inacessível (por exemplo, para fora da tela).

### Propriedades para elementos-filhos

A seguir, veremos propriedades que devem ser declaradas tendo como seletor os elementos-filhos, ou seja:

```html
<div class="flex-container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>
```

Isso significa que, onde existe um _elemento-pai_ com propriedade _flex_ (o **flex-container**), é possível atribuir propriedades flex específicas também para as elementos-filhos (**flex-item**).

Você pode definir as propriedades abaixo para apenas um dos elementos-filhos através de um identificador, como uma classe específica.

#### order

Determina a ordem em que os elementos aparecerão.
![order](../assets/img/css3/flexbox-img-09.png)

Por padrão os flex items são dispostos na tela na ordem do código. Mas a propriedade `order` controla a ordem em que aparecerão no container.

```css
.flex-item {
  order: <número>; /* o valor padrão é 0 */
}
```

#### flex-grow

![flex-grow](../assets/img/css3/flexbox-img-10.png)
Define a habilidade de um flex item de crescer, caso necessário. O valor dessa propriedade é um valor numérico sem indicação de unidade, que serve para cálculo de proporção. Este valor dita a quantidade de espaço disponível no container que será ocupado pelo item.

Se todos os ítens tiverem `flex-grow` definido em 1, o espaço remanescente no container será distribuído de forma igual entre todos. Se um dos ítens tem o valor de 2, vai ocupar o dobro de espaço no container com relação aos outros (ou pelo menos vai tentar fazer isso).

```css
.flex-item {
  flex-grow: <numero>; /* o valor default(padrão) é 0 */
}
```

> Valores negativos não são aceitos pela propriedade.

#### flex-shrink

Define a habilidade de um flex item de encolher, caso necessário.

```css
.flex-item {
  flex-shrink: <número>; /* o valor padrão é 0 */
}
```

> Valores negativos não são aceitos pela propriedade.

#### flex-basis

Define o tamanho padrão para um elemento antes que o espaço remanescente do container seja distribuído. Pode ser um comprimento (por exemplo, 20%, 5rem, etc) ou uma palavra-chave. A palavra-chave `auto` significa "observe minhas propriedades de altura ou largura" (o que era feito pela palavra-chave main-size, que foi depreciada). A palavra-chave `content` significa "estabeleça o tamanho com base no conteúdo interno do ítem" _- essa palavra-chave ainda não tem muito suporte, então não é fácil de ser testada, assim como suas relacionadas_: `max-content`, `min-content` e `fit-content`.

```css
  .flex-item {
    flex-basis: flex-basis:  | auto; /* o valor padrão é auto */
  }
```

Com o valor de 0, o espaço extra ao redor do conteúdo não é considerado. Com o valor de auto, o espaço extra é distribuído com base no valor de flex-grox do ítem.

#### flex

Esta é a propriedade _shorthand_ para `flex-grow`, `flex-shrink` e `flex-basis`, combinadas. O segundo e terceiro parâmetros _(flex-shrink e flex-basis)_ são opcionais. O padrão é `0 1 auto`, mas se você definir com apenas um número, é equivalente a `0 1`.

_É recomendado que você utilize esta propriedade_ **shorthand** ao invés de definir cada uma das propriedades em separado. O **shorthand** define os outros valores de forma inteligente.

#### align-self

![align-self](../assets/img/css3/flexbox-img-11.png)

Permite que o alinhamento padrão (ou o que estiver definido por `align-items`) seja sobrescrito para ítens individuais.

Por favor veja a explicação da propriedade `align-items` para entender quais são os possíveis valores.

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

### Importante!

O CSS só enxerga a hierarquia pai-filho; não vai aplicar as propriedades Flex para elementos que não estejam diretamente relacionados;

Para que as propriedades funcionem nos elementos-filhos, as pais devem ter propriedade `display: flex`;.

As propriedades `float`, `clear` e `vertical-align` não têm efeito em _flex-items_.

### Vamos praticar?

Você pode praticar css flexbox no [FlexBox Froggy](https://flexboxfroggy.com/).
<br><br>

**FONTE**: [Artigo da alura](https://www.alura.com.br/artigos/css-guia-do-flexbox)
