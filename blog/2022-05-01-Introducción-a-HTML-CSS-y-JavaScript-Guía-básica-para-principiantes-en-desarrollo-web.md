---
slug: Introducción-a-HTML-CSS-y-JavaScript
title: Introducción a HTML, CSS y JavaScript
authors: [santy]
---

# Introducción a HTML, CSS y JavaScript: Guía básica para principiantes en desarrollo web

El desarrollo web es una habilidad apasionante y cada vez más demandada en el mundo digital actual. Si eres nuevo en este campo y te preguntas por dónde empezar<!--truncate-->, estás en el lugar correcto. En este artículo, te daremos una introducción a tres pilares fundamentales del desarrollo web: HTML, CSS y JavaScript. Estos lenguajes de programación son esenciales para construir sitios web interactivos y atractivos. ¡Vamos a empezar!

HTML (HyperText Markup Language):
HTML es el lenguaje de marcado estándar para crear la estructura de las páginas web. Permite definir el contenido y la organización de un sitio mediante etiquetas. Las etiquetas son elementos rodeados por corchetes angulares ("< >") que indican al navegador cómo mostrar el contenido. Por ejemplo:

```html live
<html>
  <head>
    <title>Mi primer sitio web</title>
  </head>
  <body>
    <h1>Bienvenido a mi sitio web</h1>
    <p>Este es un párrafo de ejemplo.</p>
  </body>
</html>
```

En el ejemplo anterior, hemos creado un documento HTML básico. La etiqueta `<!DOCTYPE html> `especifica la versión de HTML que estamos utilizando (HTML5 en este caso). El contenido principal del sitio web está dentro de las etiquetas` <html>` y` </html>`, y dentro de ellas, encontramos las etiquetas` <head>` y `<body>`. El encabezado (head) contiene información sobre el documento, mientras que el cuerpo (body) contiene el contenido visible del sitio web.

CSS (Cascading Style Sheets):
CSS es el lenguaje de hojas de estilo que define cómo se presenta el contenido HTML. Permite dar estilo y diseño a las páginas web, controlando aspectos como colores, fuentes, márgenes y tamaños. Para utilizar CSS, se deben seleccionar los elementos HTML y aplicarles propiedades de estilo. Por ejemplo:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: #333333;
}

p {
  font-size: 16px;
}
```

En el ejemplo anterior, hemos definido estilos para el cuerpo del documento (background-color y font-family), el encabezado h1 (color) y los párrafos (font-size). Al guardar este código en un archivo separado con extensión .css y enlazarlo con nuestro documento HTML usando` <link>` en la sección `<head>`, los estilos se aplicarán automáticamente a todo el contenido correspondiente.

JavaScript:
JavaScript es un lenguaje de programación que permite agregar interactividad y dinamismo a las páginas web. Con JavaScript, podemos responder a acciones del usuario, modificar el contenido en tiempo real y acceder y manipular datos. Aquí hay un ejemplo simple de JavaScript:

```html
<button onclick="saludar()">Haz clic</button>

<script>
  function saludar() {
    alert("¡Hola, bienvenido!");
  }
</script>
```

En el ejemplo anterior, hemos creado un botón que, al hacer clic, activa la función saludar() y muestra una ventana emergente con el mensaje "¡Hola, bienvenido!".

Ahora veamos como integrar esta tres tecnologias

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi primer sitio web</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
      }

      h1 {
        color: #333333;
      }

      p {
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <h1>Bienvenido a mi sitio web</h1>
    <p>Este es un párrafo de ejemplo.</p>
    <button onclick="saludar()">Haz clic</button>

    <script>
      function saludar() {
        alert("¡Hola, bienvenido!");
      }
    </script>
  </body>
</html>
```

En este ejemplo, hemos incluido el código CSS en línea, dentro de las etiquetas `<style>` en la sección `<head>`. También hemos agregado un botón con una función JavaScript que muestra una ventana emergente al hacer clic en él. Esta es solo una muestra básica de cómo las tres tecnologias pueden trabajar juntos para crear una página web funcional y con estilo. A medida que avances, podrás explorar más técnicas y características para crear sitios web más sofisticados. ¡Buena suerte con tu desarrollo web!
