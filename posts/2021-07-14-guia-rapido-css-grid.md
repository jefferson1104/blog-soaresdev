---
date: 2021-07-14 10:00:00
title: Guia rápido de css grid
description: Nesse guia de introdução, você vai aprender um pouco sobre css grid layout, como funciona e seus conceitos.
category: css
background: '#2278ee'
image: 'assets/img/css-grid-layout-02.png'
---

Olá nesse artigo você vai ver um guia rápido de introdução sobre css grid layout para nunca mais esquecer.

![Github Copilot](../assets/img/css-grid-layout-01.png)

## O que é Grid?

O layout **CSS Grid** (ou apenas "**Grid**") é um sistema bi-dimensional baseado em uma "grade" (grid em inglês), e isso o torna muito útil pois assim trabalhamos com um layout em linhas e colunas (**rows** e **columns**). O layout Grid consiste de um elemento pai (**parent**) com um ou mais elementos filhos (**child elements**), portanto, o elemento pai é um **container**, e os elementos filhos são **items**.

![Github Copilot](../assets/img/css-grid-layout-02.png)

#### Nomenclaturas

Antes dos conceitos do Grid, vamos dar uma olhada na nomenclatura das propriedades individuais:

- **Grid track** : é o espaço entre duas linhas em um grid.

- **Grid lines** : são linhas criadas quando você define grid track.

- **Grid cells** : é a menor unidade em um grid. Conceitualmente é como se fosse uma célula de tabela.

- **Grid area** : Itens podem se espalhar por uma ou mais células ambas entre linhas ou colunas, e isto cria um grid area. Grid area devem ser retangulares – não é possível criar uma área em L por exemplo.

- **Grid row** : Uma grid row é uma trilha horizontal, parecido com o flex-direction: row do flex-box, são definidas pela propriedade `grid-template-rows`.

- **Grid column** : Uma grid row é uma trilha vertical, parecido com o flex-direction: column do flex-box, são definidas pela propriedade `grid-template-columns`.

- **Grid gap** : A propriedade gap do css, define as lacunas entre linhas e colunas.

![Github Copilot](../assets/img/css-grid-nomenclaturas.png)

#### Grid template rows

A propriedade `grid-template-rows` especifica _quantidade_ e as _alturas_ (**height**) das fileiras (**rows**) no layout grid:

exemplo:

```css
grid-template-rows: 100px 200px;
```

![Github Copilot](../assets/img/css-grid-template-rows-01.png)

_Item1_ e _Item2_ tem alturas (**height**) fixas de 100px e 200px. Já que só declaramos essas duas alturas, a altura do _Item3_ será definida pelo conteúdo dentro dele.

![Github Copilot](../assets/img/css-grid-template-rows-02.png)

#### Grid template columns

A propriedade `grid-template-columns` especifica _quantidade_ e as _larguras_ (**width**) das colunas (**columns**) no layout grid:

```css
grid-template-columns: 60px auto 60px;
```

![Github Copilot](../assets/img/css-grid-template-columns-01.png)

_Item1_ e _Item3_ tem larguras (**width**) fixas de 60px. Já que só declaramos a coluna do meio (**Item2**) com a largura (**width**) auto, ela irá ocupar o espaço restante entre elas automaticamente.

![Github Copilot](../assets/img/css-grid-template-columns-02.png)

#### Grid template areas

A propriedade `grid-template-areas` especifica como o nome já diz, áreas dentro do layout grid, o quanto cada uma ocupa de espaço e atribui nomes à elas.

![Github Copilot](../assets/img/css-grid-template-areas-01.png)

_Item1_ ocupa toda a largura (**width**), ou seja, 100%.
_Item2_ ocupa ~25% e o _Item3_ ocupa ~75% da largura.

![Github Copilot](../assets/img/css-grid-template-areas-02.png)

Fonte: [@hrmonteiro](https://www.facebook.com/photo/?fbid=3721976001240485&set=pcb.1936734926496562)
