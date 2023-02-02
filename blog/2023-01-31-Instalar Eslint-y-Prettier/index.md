---
slug: Instalar-Eslint-y-prettier-para-react
title: Instalar Eslint y prettier para react
authors: [santy]
tags: [soluciones]
---

# Instalar Eslint y prettier para react

EsLint analiza estéticamente tu código para encontrar problemas rápidamente,sus reglas son configurables ,es dicir, se pueden definir por uno mismo o equipo, para que todos estén en la misma soncronia <!--truncate-->, te ayuda a detectar errores de sintaxis, código incorrecto, malas prácticas.Sin Embargo prettier es un formateador de código, que puedes definir reglas pero para formatear tu código automáticamente después de guardarlo.
:::info

- Eslint es un linter

- Prettier es un formateador

Linter : se entiende como una herramienta a cargo de la mejora del código a través del análisis del código fuente.

Formateador de Código : es para asegurar que el estilo del código escrito sea consistente en toda la base de código.
:::

### Instalar Eslint

```jsx
npm i -D eslint
yarn add -D eslint
```

Configuración de eslint: la forma mas fácil de configurar es con el siguiente comando que nos ejecutará un script, donde nos preguntará como queremos configurarlo:

```jsx
npm init @eslint/config || npx eslint --init
```

1_Primero nos preguntara como queremos usar Eslint, si solo para revisar la sintaxis, encontrar problemas o forzar un estilo de código.en mi caso elijo siempre la tercera opción: encontrar problemas o forzar un estilo del código

2_después nos preguntará que tipo de modulo javascript queremos utilizar (import o export). generalmente en backend se suele utilizar `require` y en frontend `import`.Elijimos import.

3_Seguimos con seleccionar el Framework que utilizaremos en nuestro proyecto, si **React**, **VueJs** o **Vanilla Javascript**. selecionamos react

4_También podemos seleccionar si queremos o estamos utilizando TypeScript, en este caso no voy a utilizar typeScript

5_seleccionar el tipo de **Enviroment** o **Entorno** para la ejecución de nuestro proyecto si en el Navegador o entorno de NodeJs, Seleccionamos browser

6\_ Una parte importante es que podemos utilizar una guía de estilo (generalmente elijo el standard para ahorrarme muchos problemas)ya definida, para inspeccionar nuestros archivos JavaScript, etc.

7_Y por ultimo Seleccionaremos el formato que queremos utilizar para nuestro archivo de configuración, en este caso utilizaremos **JSON** pero cualquier otro formato funciona de la misma manera.

Nos debería quedar de la siguiente manera:

```jsx
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard
✔ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-standard@latest
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest eslint-config-standard@latest eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
Installing eslint-plugin-react@latest, eslint-config-standard@latest, eslint@^8.0.1, eslint-plugin-import@^2.25.2, eslint-plugin-n@^15.0.0, eslint-plugin-promise@^6.0.0

added 74 packages, and audited 271 packages in 45s

78 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Successfully created .eslintrc.json file in /home/santiago/Documentos/proyectos/react/demoEslint
```

Como configurar las reglas: vamos al archivo de configuración de eslint y nos dirigimos a la sección de relus(como se muestra en la seccion de abajo), donde podemos definir nuestras reglas con el siguiente formato:

```jsx
relus:{
"rele":"0ff o 0"
{

```

:::tip
0 = quiero anular la regla

1=quiero que me marque como advertencia

2= quiero que me marque como error
:::

### Instalar prettier

```jsx
npm i -D prettier
```

El siguiente comando es para formatear tu código, corregir según las reglas impuestas (**solo se muestra en consola como lo va a formatear**).

```jsx
npx prettier src/App.jsx
```

`prettier --write .`es para sobrescribir todo, pero para un gran proyecto puede llevar un poco de tiempo. Puede ejecutar `prettier --write app/`para sobrescribir un determinado directorio.(**para que se vea reflejado efectivamente los cambios en tu editor de código**)

```jsx
npx prettier src/App.jsx --write
.
```

`--check`es como `--write`, pero solo verifica que los archivos ya estén formateados, en lugar de sobrescribirlos.

```jsx
npx prettier --check
```

Instalar un plugin que ayuda a trabajar de forma en conjunta a prettier y eslint, ya que muchas veces entran en conflictos, lo que hace este plugin es que en caso de que entren en conflictos toma como prioridad a prettier.

```jsx
npm i -D eslint-config-prettier

```

Agregar en package.json. el scrip para despues poder hacer npm run y el comando custumizado

```jsx

"format": "prettier --write .",
 "lint": "eslint --fix . --ext .js, .jsx"
```

:::tip

Agregar los archivos .prettierignore y .eslintignore en la raíz del proyecto para que la CLI de Prettier y eslint y los editores sepan qué archivos *no* formatear:en .prettierignore agregar los siguientes archivos : dist,package-lock.json y en .eslintignore agregar : dist
:::
