# Make It Real - Aplicación Web con JavaScript Vanilla

This is a solution to the Aplicación Web con JavaScript Vanilla project of the Make It Real course.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Aplicación web que consuma la [Fake Store API](https://fakestoreapi.com/) y muestre productos dinámicamente. El objetivo principal es listar productos en la página principal y agregar un temporizador para cada producto que deshabilitará el botón de compra cuando finalice el tiempo.

Cada producto debe mostrarse en una tarjeta que incluya:

- Título
- Imagen
- Precio
- Descripción
- Categoría
- Botón de compra (contemporizado)

Cada producto tendrá un contador de tiempo aleatorio (entre 1 y 3 minutos).
Al finalizar el tiempo, el botón de Comprar debe quedar deshabilitado y no ser clickeable.

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

## My process

1. Estructura HTML semántica

- Al ser una tienda, tendrá header y navbar
- main, hero section y products section
- Mostrará un loading mientras se cargan los productos, si no cargan mostrará un error
- Cada producto estará en un article (pues estas tarjetas son independientes)
- Al ser una tienda, tendrá un footer

2. Agregar estilo de la página estática

3. Crear modules:

- main
- fetchProducts
- displayProducts
- productCard
- timer
- disableButton

4. Implementar funciones

5. Completar estilos

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.
