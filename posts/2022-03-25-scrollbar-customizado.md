---
date: 2022-03-25 19:00:00
title: Customizando o scrollbar
description: Aprenda a criar um scrollbar customizado com este rápido tutorial
category: css
background: '#2278ee'
image: /assets/img/css3/custom-scrollbar.png
---

![Github Copilot](../assets/img/css3/custom-scrollbar.png)

## Como fazer?

Segue abaixo um exemplo de código onde voce pode customizar o scrollbar da sua aplicação, website, landing page e etc...

```css
  body::-webkit-scrollbar {
    width: 1em;
  }

  body::-webkit-scrollbar-track {
    background: #2c3e50;
    box-shadow: inset 0.05em 0 0 #838383;
  }

  body::-webkit-scrollbar-thumb {
    background: #a29bfe;
    border-radius: 0.5em;
    box-shadow: inset 0.15em 0.1em 0.1em rgba(255, 255, 255, 0.5),
      inset -0.15em -0.1em -0.1em  rgba(0, 0, 0, 0.3);
  }
```

## Um exemplo para voce copiar
Vamos criar um projeto de exemplo, nesse caso criamos um diretorio (pasta) com nome de 'custom-scrollbar',
dentro criamos dois arquivos, um chamamos de **index.html** e o outro de **styles.css**, deixe os iguais aos
exemplos a seguir.

Crie um arquivo css igual a este abaixo:
**styles.css**
```css
/* CUSTOM FONTS */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap');

/* RESET CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

/* CUSTOM SCROLLBAR */
body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  background: #2c3e50;
  box-shadow: inset 0.05em 0 0 #838383;
}

body::-webkit-scrollbar-thumb {
  background: #a29bfe;
  border-radius: 0.5em;
  box-shadow: inset 0.15em 0.1em 0.1em rgba(255, 255, 255, 0.5), inset -0.15em -0.1em -0.1em  rgba(0, 0, 0, 0.3);
}

/* OTHERS */
body {
  font-family: 'Poppins', sans-serif;
  background-color: #2d3436;
  color: #dfe6e9;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px;
}

.content h1 {
  font-size: 48px;
  color: #a29bfe;
  margin-bottom: 40px;
}

.content p {
  font-size: 36px;
}

.content p + p {
  margin-top: 500px;
}
```

Crie um arquivo html igual a este abaixo:
**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">

  <title>custom scrollbar</title>
</head>
<body>
  <div class="content">
    <h1>CUSTOM SCROLLBAR EXAMPLE</h1>

    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  </div>
</body>
</html>
```

