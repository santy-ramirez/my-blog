"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[1477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"Instalar-Eslint-y-prettier-para-react","metadata":{"permalink":"/blog/Instalar-Eslint-y-prettier-para-react","editUrl":" https://github.com/santy-ramirez/my-blog/edit/main/blog/2023-01-31-Instalar Eslint-y-Prettier/index.md","source":"@site/blog/2023-01-31-Instalar Eslint-y-Prettier/index.md","title":"Instalar Eslint y prettier para react","description":"EsLint analiza est\xe9ticamente tu c\xf3digo para encontrar problemas r\xe1pidamente,sus reglas son configurables ,es dicir, se pueden definir por uno mismo o equipo, para que todos est\xe9n en la misma soncronia , te ayuda a detectar errores de sintaxis, c\xf3digo incorrecto, malas pr\xe1cticas.Sin Embargo prettier es un formateador de c\xf3digo, que puedes definir reglas pero para formatear tu c\xf3digo autom\xe1ticamente despu\xe9s de guardarlo.","date":"2023-01-31T00:00:00.000Z","formattedDate":"31 de enero de 2023","tags":[{"label":"soluciones","permalink":"/blog/tags/soluciones"}],"readingTime":3.9,"hasTruncateMarker":true,"authors":[{"name":"Santiago Ramirez","title":"web developer","url":"https://santidev.com.ar","imageURL":"https://avatars.githubusercontent.com/u/66737901?v=4","key":"santy"}],"frontMatter":{"slug":"Instalar-Eslint-y-prettier-para-react","title":"Instalar Eslint y prettier para react","authors":["santy"],"tags":["soluciones"]},"nextItem":{"title":"Dominio personalizado con nic.ar y github-pages","permalink":"/blog/dominio-personalizado-nic.ar-git-pages"}},"content":"EsLint analiza est\xe9ticamente tu c\xf3digo para encontrar problemas r\xe1pidamente,sus reglas son configurables ,es dicir, se pueden definir por uno mismo o equipo, para que todos est\xe9n en la misma soncronia \x3c!--truncate--\x3e, te ayuda a detectar errores de sintaxis, c\xf3digo incorrecto, malas pr\xe1cticas.Sin Embargo prettier es un formateador de c\xf3digo, que puedes definir reglas pero para formatear tu c\xf3digo autom\xe1ticamente despu\xe9s de guardarlo.\\n:::info\\n\\n- Eslint es un linter\\n\\n- Prettier es un formateador\\n\\nLinter : se entiende como una herramienta a cargo de la mejora del c\xf3digo a trav\xe9s del an\xe1lisis del c\xf3digo fuente.\\n\\nFormateador de C\xf3digo : es para asegurar que el estilo del\xa0c\xf3digo escrito sea consistente en toda la base de\xa0c\xf3digo.\\n:::\\n\\n### Instalar Eslint\\n\\n```jsx\\nnpm i -D eslint\\nyarn add -D eslint\\n```\\n\\nConfiguraci\xf3n de eslint: la forma mas f\xe1cil de configurar es con el siguiente comando que nos ejecutar\xe1 un script, donde nos preguntar\xe1 como queremos configurarlo:\\n\\n```jsx\\nnpm init @eslint/config || npx eslint --init\\n```\\n\\n1_Primero nos preguntara como queremos usar Eslint, si solo para revisar la sintaxis, encontrar problemas o forzar un estilo de c\xf3digo.en mi caso elijo siempre la tercera opci\xf3n: encontrar problemas o forzar un estilo del c\xf3digo\\n\\n2_despu\xe9s nos preguntar\xe1 que tipo de modulo javascript queremos utilizar (import o export). generalmente en backend se suele utilizar `require` y en frontend `import`.Elijimos import.\\n\\n3_Seguimos con seleccionar el Framework que utilizaremos en nuestro proyecto, si\xa0**React**,\xa0**VueJs** o\xa0**Vanilla Javascript**. selecionamos react\\n\\n4_Tambi\xe9n podemos seleccionar si queremos o estamos utilizando TypeScript, en este caso no voy a utilizar typeScript\\n\\n5_seleccionar el tipo de\xa0**Enviroment** o\xa0**Entorno** para la ejecuci\xf3n de nuestro proyecto si en el Navegador o entorno de NodeJs, Seleccionamos browser\\n\\n6\\\\_ Una parte importante es que podemos utilizar una gu\xeda de estilo (generalmente elijo el standard para ahorrarme muchos problemas)ya definida, para inspeccionar nuestros archivos JavaScript, etc.\\n\\n7_Y por ultimo Seleccionaremos el formato que queremos utilizar para nuestro archivo de configuraci\xf3n, en este caso utilizaremos\xa0**JSON**\xa0pero cualquier otro formato funciona de la misma manera.\\n\\nNos deber\xeda quedar de la siguiente manera:\\n\\n```jsx\\n\u2714 How would you like to use ESLint? \xb7 style\\n\u2714 What type of modules does your project use? \xb7 esm\\n\u2714 Which framework does your project use? \xb7 react\\n\u2714 Does your project use TypeScript? \xb7 No / Yes\\n\u2714 Where does your code run? \xb7 browser\\n\u2714 How would you like to define a style for your project? \xb7 guide\\n\u2714 Which style guide do you want to follow? \xb7 standard\\n\u2714 What format do you want your config file to be in? \xb7 JSON\\nChecking peerDependencies of eslint-config-standard@latest\\nThe config that you\'ve selected requires the following dependencies:\\n\\neslint-plugin-react@latest eslint-config-standard@latest eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0\\n\u2714 Would you like to install them now? \xb7 No / Yes\\n\u2714 Which package manager do you want to use? \xb7 npm\\nInstalling eslint-plugin-react@latest, eslint-config-standard@latest, eslint@^8.0.1, eslint-plugin-import@^2.25.2, eslint-plugin-n@^15.0.0, eslint-plugin-promise@^6.0.0\\n\\nadded 74 packages, and audited 271 packages in 45s\\n\\n78 packages are looking for funding\\n  run `npm fund` for details\\n\\nfound 0 vulnerabilities\\nSuccessfully created .eslintrc.json file in /home/santiago/Documentos/proyectos/react/demoEslint\\n```\\n\\nComo configurar las reglas: vamos al archivo de configuraci\xf3n de eslint y nos dirigimos a la secci\xf3n de relus(como se muestra en la seccion de abajo), donde podemos definir nuestras reglas con el siguiente formato:\\n\\n```jsx\\nrelus:{\\n\\"rele\\":\\"0ff o 0\\"\\n{\\n\\n```\\n\\n:::tip\\n0 = quiero anular la regla\\n\\n1=quiero que me marque como advertencia\\n\\n2= quiero que me marque como error\\n:::\\n\\n### Instalar prettier\\n\\n```jsx\\nnpm i -D prettier\\n```\\n\\nEl siguiente comando es para formatear tu c\xf3digo, corregir seg\xfan las reglas impuestas (**solo se muestra en consola como lo va a formatear**).\\n\\n```jsx\\nnpx prettier src/App.jsx\\n```\\n\\n`prettier --write .`es para sobrescribir todo, pero para un gran proyecto puede llevar un poco de tiempo.\xa0Puede ejecutar\xa0`prettier --write app/`para sobrescribir un determinado directorio.(**para que se vea reflejado efectivamente los cambios en tu editor de c\xf3digo**)\\n\\n```jsx\\nnpx prettier src/App.jsx --write\\n.\\n```\\n\\n`--check`es como\xa0`--write`, pero solo verifica que los archivos ya est\xe9n formateados, en lugar de sobrescribirlos.\\n\\n```jsx\\nnpx prettier --check\\n```\\n\\nInstalar un plugin que ayuda a trabajar de forma en conjunta a prettier y eslint, ya que muchas veces entran en conflictos, lo que hace este plugin es que en caso de que entren en conflictos toma como prioridad a prettier.\\n\\n```jsx\\nnpm i -D eslint-config-prettier\\n\\n```\\n\\nAgregar en package.json. el scrip para despues poder hacer npm run y el comando custumizado\\n\\n```jsx\\n\\n\\"format\\": \\"prettier --write .\\",\\n \\"lint\\": \\"eslint --fix . --ext .js, .jsx\\"\\n```\\n\\n:::tip\\n\\nAgregar los archivos .prettierignore y .eslintignore en la ra\xedz del proyecto para que la CLI de Prettier y eslint y los editores sepan qu\xe9 archivos\xa0*no*\xa0formatear:en .prettierignore agregar los siguientes archivos : dist,package-lock.json y en .eslintignore agregar : dist\\n:::"},{"id":"dominio-personalizado-nic.ar-git-pages","metadata":{"permalink":"/blog/dominio-personalizado-nic.ar-git-pages","editUrl":" https://github.com/santy-ramirez/my-blog/edit/main/blog/2022-05-03-Dominio-personalizado-github-pages-y-nic.ar/index.md","source":"@site/blog/2022-05-03-Dominio-personalizado-github-pages-y-nic.ar/index.md","title":"Dominio personalizado con nic.ar y github-pages","description":"En esta ocasi\xf3n vamos a vincular un dominio personalizado con la extension \u201c.com.ar\u201d.","date":"2022-05-03T00:00:00.000Z","formattedDate":"3 de mayo de 2022","tags":[{"label":"soluciones","permalink":"/blog/tags/soluciones"}],"readingTime":1.68,"hasTruncateMarker":true,"authors":[{"name":"Santiago Ramirez","title":"web developer","url":"https://santidev.com.ar","imageURL":"https://avatars.githubusercontent.com/u/66737901?v=4","key":"santy"}],"frontMatter":{"slug":"dominio-personalizado-nic.ar-git-pages","title":"Dominio personalizado con nic.ar y github-pages","authors":["santy"],"tags":["soluciones"]},"prevItem":{"title":"Instalar Eslint y prettier para react","permalink":"/blog/Instalar-Eslint-y-prettier-para-react"},"nextItem":{"title":"Introducci\xf3n a HTML, CSS y JavaScript","permalink":"/blog/Introducci\xf3n-a-HTML-CSS-y-JavaScript"}},"content":"En esta ocasi\xf3n vamos a vincular un dominio personalizado con la extension \u201c.com.ar\u201d. \\nPrimero tenemos que comprar un dominio en [nic.ar](http://nic.ar), teniendo una clave fiscal nivel 2 o superior y CUIL, \x3c!--truncate--\x3eno tenes  clave fiscal [visitar enlace para conocer como generar  clave](https://www.afip.gob.ar/claveFiscal/recuperar-clave/nivel-3.asp), para conocer como registrar un dominio visita el instructivo de [nic.ar](https://nic.ar/es/ayuda/instructivos/registro-de-dominio)  ,   una ves que tengamos  el dominio hace falta un servicio de DNS que nos servir\xe1 para vincular los servidores de github con nuestro dominio.\\n\\nEn este caso vamos a utilizar NameChep, nos creamos una cuenta  [aqu](https://www.namecheap.com/myaccount/signup/)\xed, una ves que nos creamos una cuenta iniciamos sesi\xf3n y nos vamos a freeDNS y colocamos nuestro dominio que acabamos de registrar en [nic.ar](http://nic.ar) \\n\\n![Untitled](./Untitled.png)\\n\\nUna vez copiado nuestro dominio en el input le damos click en get DNS\\n\\n![Untitled](./Untitled1.png)\\n\\n Click en add cart, tranquilos no vamos a pagar nada es free, ya que es nuestro dominio acu\xe9rdense que ya compramos en nic.ar.\\n\\n![Untitled](./Untitled2.png)\\n\\nUna vez agregado a nuestro cart damos click en \u201cset up DNS\u201d.\\n\\n![Untitled](./Untitled3.png)\\n\\nNos aparecer\xe1 las direcciones DNS que nos servir\xe1 para delegar en nic.ar, visita el instructivo de como   [delegar](https://nic.ar/es/ayuda/instructivos/delegacion-de-dominios).A continuaci\xf3n les dejo los DNS si los quieren copiar desde aqui.\\n\\n```jsx\\nfreedns1.registrar-servers.com\\nfreedns2.registrar-servers.com\\nfreedns3.registrar-servers.com\\nfreedns4.registrar-servers.com\\nfreedns5.registrar-servers.com\\n```\\n\\n![Untitled](./Untitled4.png)\\n\\nUna vez delegado  volvemos a Namechep,iniciamos sesi\xf3n y en nuestro Deshboard vamos ver nuestro dominio, damos click en \u201cmanage\u201d.\\n\\n![Untitled](./Untitled5.png)\\n\\nNos vamos a advance DNS, y nos aseguramos de configurar de la siguiente manera. Click save all change, para guardar todos los cambios.\\n\\n\\n\\n![Untitled](./Untitled6.png)\\n\\nUna ves hecho esto nos vamos al repositorio de nuestro github a seting.\\n\\n![Untitled](./Untitled7.png)\\n\\nA pages.\\n\\n![Untitled](./Untitled8.png)\\n\\nColocamos la rama en la cual esta nuestro proyecto,se recomienda que la rama se llame gh-pages, una vez seleccionado le damos save y nos aparecer\xe1 para vincular nuestro dominio personalizado.Una ves colocado nuestro dominio personalizado,click  save.\\n\\n![Untitled](./Untitled9.png)\\n\\nFelicitaciones Si seguiste todos los pasos anteriores deber\xedas ver tu sitio en el dominio personalizado.Si no ves reflejado tu sitio, tranquilo, puede tardar hasta 24 horas para que se vean reflejados los cambios. \\n\\n![https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif](https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif)"},{"id":"Introducci\xf3n-a-HTML-CSS-y-JavaScript","metadata":{"permalink":"/blog/Introducci\xf3n-a-HTML-CSS-y-JavaScript","editUrl":" https://github.com/santy-ramirez/my-blog/edit/main/blog/2022-05-01-Introducci\xf3n-a-HTML-CSS-y-JavaScript-Gu\xeda-b\xe1sica-para-principiantes-en-desarrollo-web.md","source":"@site/blog/2022-05-01-Introducci\xf3n-a-HTML-CSS-y-JavaScript-Gu\xeda-b\xe1sica-para-principiantes-en-desarrollo-web.md","title":"Introducci\xf3n a HTML, CSS y JavaScript","description":"El desarrollo web es una habilidad apasionante y cada vez m\xe1s demandada en el mundo digital actual. Si eres nuevo en este campo y te preguntas por d\xf3nde empezar, est\xe1s en el lugar correcto. En este art\xedculo, te daremos una introducci\xf3n a tres pilares fundamentales del desarrollo web: HTML, CSS y JavaScript. Estos lenguajes de programaci\xf3n son esenciales para construir sitios web interactivos y atractivos. \xa1Vamos a empezar!","date":"2022-05-01T00:00:00.000Z","formattedDate":"1 de mayo de 2022","tags":[],"readingTime":2.85,"hasTruncateMarker":true,"authors":[{"name":"Santiago Ramirez","title":"web developer","url":"https://santidev.com.ar","imageURL":"https://avatars.githubusercontent.com/u/66737901?v=4","key":"santy"}],"frontMatter":{"slug":"Introducci\xf3n-a-HTML-CSS-y-JavaScript","title":"Introducci\xf3n a HTML, CSS y JavaScript","authors":["santy"]},"prevItem":{"title":"Dominio personalizado con nic.ar y github-pages","permalink":"/blog/dominio-personalizado-nic.ar-git-pages"},"nextItem":{"title":"Paginas web para aprender html","permalink":"/blog/paginas-web-para-aprender-html"}},"content":"El desarrollo web es una habilidad apasionante y cada vez m\xe1s demandada en el mundo digital actual. Si eres nuevo en este campo y te preguntas por d\xf3nde empezar\x3c!--truncate--\x3e, est\xe1s en el lugar correcto. En este art\xedculo, te daremos una introducci\xf3n a tres pilares fundamentales del desarrollo web: HTML, CSS y JavaScript. Estos lenguajes de programaci\xf3n son esenciales para construir sitios web interactivos y atractivos. \xa1Vamos a empezar!\\n\\nHTML (HyperText Markup Language):\\nHTML es el lenguaje de marcado est\xe1ndar para crear la estructura de las p\xe1ginas web. Permite definir el contenido y la organizaci\xf3n de un sitio mediante etiquetas. Las etiquetas son elementos rodeados por corchetes angulares (\\"< >\\") que indican al navegador c\xf3mo mostrar el contenido. Por ejemplo:\\n\\n```html live\\n<html>\\n  <head>\\n    <title>Mi primer sitio web</title>\\n  </head>\\n  <body>\\n    <h1>Bienvenido a mi sitio web</h1>\\n    <p>Este es un p\xe1rrafo de ejemplo.</p>\\n  </body>\\n</html>\\n```\\n\\nEn el ejemplo anterior, hemos creado un documento HTML b\xe1sico. La etiqueta `<!DOCTYPE html> `especifica la versi\xf3n de HTML que estamos utilizando (HTML5 en este caso). El contenido principal del sitio web est\xe1 dentro de las etiquetas` <html>` y` </html>`, y dentro de ellas, encontramos las etiquetas` <head>` y `<body>`. El encabezado (head) contiene informaci\xf3n sobre el documento, mientras que el cuerpo (body) contiene el contenido visible del sitio web.\\n\\nCSS (Cascading Style Sheets):\\nCSS es el lenguaje de hojas de estilo que define c\xf3mo se presenta el contenido HTML. Permite dar estilo y dise\xf1o a las p\xe1ginas web, controlando aspectos como colores, fuentes, m\xe1rgenes y tama\xf1os. Para utilizar CSS, se deben seleccionar los elementos HTML y aplicarles propiedades de estilo. Por ejemplo:\\n\\n```css\\nbody {\\n  font-family: Arial, sans-serif;\\n  background-color: #f0f0f0;\\n}\\n\\nh1 {\\n  color: #333333;\\n}\\n\\np {\\n  font-size: 16px;\\n}\\n```\\n\\nEn el ejemplo anterior, hemos definido estilos para el cuerpo del documento (background-color y font-family), el encabezado h1 (color) y los p\xe1rrafos (font-size). Al guardar este c\xf3digo en un archivo separado con extensi\xf3n .css y enlazarlo con nuestro documento HTML usando` <link>` en la secci\xf3n `<head>`, los estilos se aplicar\xe1n autom\xe1ticamente a todo el contenido correspondiente.\\n\\nJavaScript:\\nJavaScript es un lenguaje de programaci\xf3n que permite agregar interactividad y dinamismo a las p\xe1ginas web. Con JavaScript, podemos responder a acciones del usuario, modificar el contenido en tiempo real y acceder y manipular datos. Aqu\xed hay un ejemplo simple de JavaScript:\\n\\n```html\\n<button onclick=\\"saludar()\\">Haz clic</button>\\n\\n<script>\\n  function saludar() {\\n    alert(\\"\xa1Hola, bienvenido!\\");\\n  }\\n<\/script>\\n```\\n\\nEn el ejemplo anterior, hemos creado un bot\xf3n que, al hacer clic, activa la funci\xf3n saludar() y muestra una ventana emergente con el mensaje \\"\xa1Hola, bienvenido!\\".\\n\\nAhora veamos como integrar esta tres tecnologias\\n\\n```html\\n<!DOCTYPE html>\\n<html>\\n  <head>\\n    <title>Mi primer sitio web</title>\\n    <style>\\n      body {\\n        font-family: Arial, sans-serif;\\n        background-color: #f0f0f0;\\n      }\\n\\n      h1 {\\n        color: #333333;\\n      }\\n\\n      p {\\n        font-size: 16px;\\n      }\\n    </style>\\n  </head>\\n  <body>\\n    <h1>Bienvenido a mi sitio web</h1>\\n    <p>Este es un p\xe1rrafo de ejemplo.</p>\\n    <button onclick=\\"saludar()\\">Haz clic</button>\\n\\n    <script>\\n      function saludar() {\\n        alert(\\"\xa1Hola, bienvenido!\\");\\n      }\\n    <\/script>\\n  </body>\\n</html>\\n```\\n\\nEn este ejemplo, hemos incluido el c\xf3digo CSS en l\xednea, dentro de las etiquetas `<style>` en la secci\xf3n `<head>`. Tambi\xe9n hemos agregado un bot\xf3n con una funci\xf3n JavaScript que muestra una ventana emergente al hacer clic en \xe9l. Esta es solo una muestra b\xe1sica de c\xf3mo las tres tecnologias pueden trabajar juntos para crear una p\xe1gina web funcional y con estilo. A medida que avances, podr\xe1s explorar m\xe1s t\xe9cnicas y caracter\xedsticas para crear sitios web m\xe1s sofisticados. \xa1Buena suerte con tu desarrollo web!"},{"id":"paginas-web-para-aprender-html","metadata":{"permalink":"/blog/paginas-web-para-aprender-html","editUrl":" https://github.com/santy-ramirez/my-blog/edit/main/blog/2022-04-17-Donde-aprender-html/index.md","source":"@site/blog/2022-04-17-Donde-aprender-html/index.md","title":"Paginas web para aprender html","description":"Para dedicarte al desarrollo web sin duda unas de las primeros recursos que uno tiene que aprender es html, que es el encargado de darle estructura a nuestras paginas web,\xbf Que es html?","date":"2022-04-17T00:00:00.000Z","formattedDate":"17 de abril de 2022","tags":[{"label":"recursos","permalink":"/blog/tags/recursos"}],"readingTime":0.885,"hasTruncateMarker":true,"authors":[{"name":"Santiago Ramirez","title":"web developer","url":"https://santidev.com.ar","imageURL":"https://avatars.githubusercontent.com/u/66737901?v=4","key":"santy"}],"frontMatter":{"slug":"paginas-web-para-aprender-html","title":"Paginas web para aprender html","authors":["santy"],"tags":["recursos"]},"prevItem":{"title":"Introducci\xf3n a HTML, CSS y JavaScript","permalink":"/blog/Introducci\xf3n-a-HTML-CSS-y-JavaScript"},"nextItem":{"title":"Comenzar en el desarrollo web","permalink":"/blog/2022/04/14/Comenzar-en-el-Desarrollo-web"}},"content":"Para dedicarte al desarrollo web sin duda unas de las primeros recursos que uno tiene que aprender es html, que es el encargado de darle estructura a nuestras paginas web,\xbf Que es html?\x3c!--truncate--\x3e\\n\\n\\nHTML sus siglas en ingl\xe9s de\xa0**HyperText Markup Language**\xa0(lenguaje de marcado de hipertexto), hace referencia al\xa0lenguaje de marcado \xa0para la elaboraci\xf3n de\xa0p\xe1ginas web , es el encargado de presentar los datos en nuestra web es a continuacion dejo algunas paginas donde podemos podemos profundizar en el aprendizaje conocer los diferentes etiquetas y propiedades:\\n\\n- 1 <a href=\\"https://www.w3schools.com/html/default.asp\\" >w3school</a>: Es un sitio web para aprender tecnolog\xedas web . Contiene tutoriales ademas de HTML, de CSS, JavaScript, SQL, PHP ymucho mas.\\n\\n![Untitled](./Untitled.png)\\n\\n- 2 <a href=\\"https://developer.mozilla.org/es/docs/Web/HTML\\" >MDN Web Docs</a>: es el sitio web oficial de\xa0Mozilla para la documentaci\xf3n de est\xe1ndares web aloja muchos documentos sobre diferentestes tecnolog\xedas web,como\xa0HTML5,\xa0JavaScript,\xa0CSS, y mucho mas, exelente si quieres profundizar en html.\\n\\n![Untitled](./Untitled1.png)\\n\\n- 3 <a href=\\"https://htmlreference.io/\\" >HTMLreference</a>: Cheetseet de tags de html, exelente para consultar cuando olvidas como usar los tags, te muestra una lista con ejemplos de como implimentarlos.\\n\\n![Untitled](./cheetSeet.png)"},{"id":"/2022/04/14/Comenzar-en-el-Desarrollo-web","metadata":{"permalink":"/blog/2022/04/14/Comenzar-en-el-Desarrollo-web","editUrl":" https://github.com/santy-ramirez/my-blog/edit/main/blog/2022-04-14-Comenzar-en-el-Desarrollo-web/index.md","source":"@site/blog/2022-04-14-Comenzar-en-el-Desarrollo-web/index.md","title":"Comenzar en el desarrollo web","description":"Cuando se comienza en el desarrollo web muchas veces no se sabe por donde empezar o nos vemos abrumado por la cantidad de informaci\xf3n que podemos llegar a encontrar en Internet, podemos encontrar blog, videos en YouTube y plataformas de pago que ense\xf1an desde cero, esto muchas veces nos puede jugar encontra.La intensi\xf3n de este blog es facilitar una gu\xeda.","date":"2022-04-14T00:00:00.000Z","formattedDate":"14 de abril de 2022","tags":[{"label":"recursos","permalink":"/blog/tags/recursos"}],"readingTime":2.315,"hasTruncateMarker":true,"authors":[{"name":"Santiago Ramirez","title":"web developer","url":"https://santidev.com.ar","imageURL":"https://avatars.githubusercontent.com/u/66737901?v=4","key":"santy"}],"frontMatter":{"authors":"santy","tags":["recursos"]},"prevItem":{"title":"Paginas web para aprender html","permalink":"/blog/paginas-web-para-aprender-html"},"nextItem":{"title":"Hello-World","permalink":"/blog/Hello-World"}},"content":"Cuando se comienza en el desarrollo web muchas veces no se sabe por donde empezar o nos vemos abrumado por la cantidad de informaci\xf3n que podemos llegar a encontrar en Internet, \x3c!--truncate--\x3epodemos encontrar blog, videos en YouTube y plataformas de pago que ense\xf1an desde cero, esto muchas veces nos puede jugar encontra.La intensi\xf3n de este blog es facilitar una gu\xeda.\\n\\n![Untitled](./Untitled.png)\\n\\nEn el desarrollo web podemos encontrar diferentes tipos de desarrolladores o ramas a la que se puede dedicar un desarrollador web, est\xe1n los frontend, los backend y los fullstack.\\n\\nLos frontend se dedican a codear la interfaz de usuario y su funcionalidad, la parte frontal o la parte visible de una aplicaci\xf3n web con la que interaccionan los usuarios de la misma, se encargan de escribir el c\xf3digo que se ejecutar\xe1 en el navegador de un usuario, es decir, todo lo que el visitante ve y experimenta de forma directa . En otras palabras del dise\xf1o , desde la estructura del sitio hasta los estilos como colores, fondos, tama\xf1os hasta llegar a las animaciones y efectos.\\n\\nPara desempe\xf1ar en esta rema es necesarios poseer conocimientos en HTML,CSS y  javascript:\\n\\n- HTML\xa0lenguaje de marcado de hipertexto, se utilizan etiquetas que estructuran y organizan el contenido de la web.\\n- CSS\xa0se encarga del formato y dise\xf1o visual de las p\xe1ginas web escritas en html para darle estructura y estilo al sitio\\n- Javascript:\xa0un lenguaje de programaci\xf3n para darle dinamismo a los sitios web\\n\\nDe ellos se generan una gran cantidad de frameworks y librer\xedas que  aumentan las capacidades que se tiene para generar cualquier tipo de interfaz de usuario, como React, Redux, Angular, Bootstrap, Foundation, LESS y Sass, , entre otros.\\n\\nLos backend se deducan a codear la logica de una aplicacion web que trabajo en los servidores y se encargan de recibir los datos intrudicidos en el ui de la aplicacion, procesar y administrar y Adem\xe1s de velar por la seguridad de los sitios web y optimizar al m\xe1ximo los recursos para que las p\xe1ginas sean ligeras.\\n\\nUn\xa0desarrollador Back end\xa0debe tener amplios conocimientos de los siguientes lenguajes: frameworks y los tipos de base de datos:ASP.NET , PHP, Python, Ruby, Node.js, Java, MySQL, SQL Server, PostgreSQL, Oracle, MongoDB\\n\\nPor otro lado, un\xa0desarrollador Full Stack,\xa0es el encargado de manejar cada uno de los aspectos relacionados con la creaci\xf3n y el mantenimiento de una aplicaci\xf3n web. Para ello es fundamental que el desarrollador Full Stack tenga conocimientos en desarrollo\xa0Front-End y Back-End\xa0\\nadem\xe1s de manejar diferentes sistemas operativos y lenguajes de programaci\xf3n.\\n\\nSabiendo esto unos de los recursos que nos puede ayudar en esta situaci\xf3n es <a href=\\"https://roadmap.sh\\">roadmap.sh</a>, un sitio web que se actualiza constantemente, donde podemos encontrar el camino a seguir y las herramientas y habilidades que debemos de  aprender para convertirnos en un desarrollador web."},{"id":"Hello-World","metadata":{"permalink":"/blog/Hello-World","editUrl":" https://github.com/santy-ramirez/my-blog/edit/main/blog/2022-03-11-Hello-World.md","source":"@site/blog/2022-03-11-Hello-World.md","title":"Hello-World","description":"Bienvenidos a mi blog personal,Mi nombre es santiago Ramirez, soy Desarrollador web orientado al desarrollo backend con java junto con spring, en este blog encontraras posts de recursos de programacion y soluciones de problemas que se me van presentando a medida que voy desarrollando proyectos, El objetivo de este blog tiene un doble sentido, primero para ayudar a las personas que pueden llegar a tener los mismos problemas que yo y el segundo como una heramienta de fijaci\xf3n de contenido,de lo que voy aprendiendo durante toda mi carrera como desarrollador web","date":"2022-03-11T00:00:00.000Z","formattedDate":"11 de marzo de 2022","tags":[],"readingTime":0.455,"hasTruncateMarker":true,"authors":[{"name":"Santiago Ramirez","title":"web developer","url":"https://santidev.com.ar","imageURL":"https://avatars.githubusercontent.com/u/66737901?v=4","key":"santy"}],"frontMatter":{"slug":"Hello-World","title":"Hello-World","authors":["santy"]},"prevItem":{"title":"Comenzar en el desarrollo web","permalink":"/blog/2022/04/14/Comenzar-en-el-Desarrollo-web"}},"content":"Bienvenidos a mi blog personal,Mi nombre es santiago Ramirez, soy Desarrollador web orientado al desarrollo backend con java junto con spring, en este blog \x3c!--truncate--\x3eencontraras posts de recursos de programacion y soluciones de problemas que se me van presentando a medida que voy desarrollando proyectos, El objetivo de este blog tiene un doble sentido, primero para ayudar a las personas que pueden llegar a tener los mismos problemas que yo y el segundo como una heramienta de fijaci\xf3n de contenido,de lo que voy aprendiendo durante toda mi carrera como desarrollador web"}]}')}}]);