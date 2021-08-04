---
title: Radio button personalizado com CSS
description: Já pensou como que podemos fazer um input radio personalizado bonitão?
date: 2021-07-30 12:45:32
image: /assets/img/css3/css3-logo.jpg
category: css
background: '#2278ee'
---

![radio button personalizado](../assets/img/css3/css3-radio-button-personalizado.png)

Já pensou como que podemos fazer um input radio personalizado bonitão? se você não sabe segue essa super dica aqui agora!

## Estrutura HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>radio button personalizado</title>
  </head>
  <body>
    <div class="radio-container">
      <label for="radio">
        <input type="radio" id="radio" name="radio" />
        <div class="custom-radio">
          <span></span>
        </div>
        <span>One</span>
      </label>
    </div>

    <div class="radio-container">
      <label for="radio1">
        <input type="radio" id="radio1" name="radio" />
        <div class="custom-radio">
          <span></span>
        </div>
        <span>Two</span>
      </label>
    </div>
  </body>
</html>
```

## Estilizando com CSS

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  background: #673ab6;
  height: 100vh;
  display: flex;
  align-items: center;
  place-content: center;
  column-gap: 30px;
  font-family: sans-serif;
}

input[type='radio'] {
  display: none;
}

.radio-container label {
  display: flex;
  align-items: center;
  column-gap: 20px;
}

.custom-radio {
  border: 1px solid #fff;
  width: 40px;
  height: 40px;
  display: grid;
  place-content: center;
  border-radius: 50%;
}

.custom-radio,
span {
  transition: 0.5s ease;
  color: #fff;
}

.custom-radio span {
  content: '';
  width: 23px;
  height: 23px;
  background: #fff;
  border-radius: 50%;
}

input[type='radio']:checked + .custom-radio {
  border-color: #ac70f9;
}

input[type='radio']:checked + .custom-radio span {
  background: #ac70f9;
}
```
