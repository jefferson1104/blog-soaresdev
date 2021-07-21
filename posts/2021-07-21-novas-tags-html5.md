---
title: Novas tags do html5
description: Existem tags do html5 com funcionalidades incríveis que você pode não conhecer, descubra quais são.
date: '2021-07-21 10:35:00'
image: /assets/img/html5.png
category: html
background: '#ee6022'
---

![Github Copilot](../assets/img/html5.png)
Você vai aprender agora novas tags do HTML5 que você não conhecia, vamos ver quais são e quais as suas funcionalidades.

## `<optgroup>`

Separe as opções do elemento `<select>` por grupos.

```html
<select>
  <optgroup label="frutas">
    <option>Maçã</option>
    <option>Banana</option>
  </optgroup>
  <optgroup label="Vegetais">
    <option>Espinafre</option>
    <option>Brócolis</option>
  </optgroup>
</select>
```

![resultado-optgroup](../assets/img/html5-novas-tags-01.png)

## `<del>`

O Elemento del representa uma parte do texto que foi excluída de um documento.

```html
<p><del>Hoje eu não quero estudar</del></p>
```

![resultado-del](../assets/img/html5-novas-tags-02.png)

## `<output>`

Use o output para injetar os resultados de um cálculo ou o resultado de uma ação do usuário.

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  0<input type="range" name="b" value="50" />100 +<input
    type="number"
    name="a"
    value="10"
  />
  = 90
  <output name="result"></output>
</form>
```

![resultado-del](../assets/img/html5-novas-tags-03.png)

## `<datalist>`

Crie um menu dropdown com autocomplete usando HTML.

```html
<input list="frutas" />
<datalist id="frutas">
  <option value="Laranja"></option>
  <option value="Uva"></option>
  <option value="Melancia"></option>
</datalist>
```

![resultado-del](../assets/img/html5-novas-tags-04.png)

## `<progress>`

Crie uma barra de progresso usando apenas HTML nativo.

```html
<progress value="50" max="100">50%</progress>
```

![resultado-del](../assets/img/html5-novas-tags-05.png)

## `<details>`

Crie elementos adicionais que aparecem e somem ao clicar.

```html
<details>
  <summary>BLOG SOARESDEV</summary>
  <p>Este blog é incrível</p>
</details>
```

![resultado-del](../assets/img/html5-novas-tags-06.png)

# Bonus

#### Adicionando um link de download apenas com HTML

Você pode fazer isso com um único _atributo_, o atributo de download diz que o arquivo especificado no _href_ irá ser baixado quando o usuario clicar no link.

O valor posto no atributo de **download** irá ser o novo nome do arquivo após ser baixado.

```html
<a href="image/ferrari.png" download="carro.png">Download</a>
```

> Gostou do conteúdo? então salva nosso blog ai nos favoritos e acompanhe nossas postagens, vamos trazer ainda mais conteúdos bons relacionado ao desenvolvimento web.
