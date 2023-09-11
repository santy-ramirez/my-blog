"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[545],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return f}});var t=n(7294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?t.createElement(f,l(l({ref:a},c),{},{components:n})):t.createElement(f,l({ref:a},c))}));function f(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8091:function(e,a,n){n.r(a),n.d(a,{assets:function(){return x},contentTitle:function(){return E},default:function(){return I},frontMatter:function(){return V},metadata:function(){return P},toc:function(){return C}});var t=n(3117),r=n(7294),o=n(3905),l=n(4334),i=n(2466),s=n(6775),u=n(1980),c=n(7392),d=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}function m(e){const{values:a,children:n}=e;return(0,r.useMemo)((()=>{const e=a??p(n);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function f(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function v(e){let{queryString:a=!1,groupId:n}=e;const t=(0,s.k6)(),o=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(t.location.search);a.set(o,e),t.replace({...t.location,search:a.toString()})}),[o,t])]}function b(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!f({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:o}))),[s,u]=v({queryString:n,groupId:t}),[c,p]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,o]=(0,d.Nk)(n);return[t,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:t}),b=(()=>{const e=s??c;return f({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,o]),tabValues:o}}var g=n(2389),k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:a,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const a=e.currentTarget,n=c.indexOf(a),t=u[n].value;t!==o&&(d(a),s(t))},m=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},a)},u.map((e=>{let{value:a,label:n,attributes:i}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===a})}),n??a)})))}function h(e){let{lazy:a,children:n,selectedValue:t}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function w(e){const a=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(y,(0,t.Z)({},e,a)),r.createElement(h,(0,t.Z)({},e,a)))}function j(e){const a=(0,g.Z)();return r.createElement(w,(0,t.Z)({key:String(a)},e))}var J={tabItem:"tabItem_Ymn6"};function D(e){let{children:a,hidden:n,className:t}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(J.tabItem,t),hidden:n},a)}const V={sidebar_position:2},E="Desarrollo en Java:Visual Studio Code en Windows y Linux",P={unversionedId:"java/Desarrollo-en-Java-Visual-Studio-Code-en-Windows-y-Linux",id:"java/Desarrollo-en-Java-Visual-Studio-Code-en-Windows-y-Linux",title:"Desarrollo en Java:Visual Studio Code en Windows y Linux",description:"En este post, te guiar\xe9 a trav\xe9s del proceso de configuraci\xf3n de Visual Studio Code (tambi\xe9n conocido como VSCode) para programar en Java con funciones como autocompletado de c\xf3digo, importaci\xf3n de librer\xedas y autoformato de c\xf3digo, entre otras utilidades. En resumen, aprender\xe1s a establecer un entorno de programaci\xf3n Java eficiente y sencillo en VSCode.",source:"@site/docs/java/Desarrollo-en-Java-Visual-Studio-Code-en-Windows-y-Linux.md",sourceDirName:"java",slug:"/java/Desarrollo-en-Java-Visual-Studio-Code-en-Windows-y-Linux",permalink:"/docs/java/Desarrollo-en-Java-Visual-Studio-Code-en-Windows-y-Linux",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Sobre Java",permalink:"/docs/java/sobre-java"}},x={},C=[{value:"Intalar JDK en linux",id:"intalar-jdk-en-linux",level:2},{value:"Paso 1: Verificar si el JDK est\xe1 instalado",id:"paso-1-verificar-si-el-jdk-est\xe1-instalado",level:3},{value:"Paso 2: Instalar el JDK en Linux",id:"paso-2-instalar-el-jdk-en-linux",level:3},{value:"Paso 3: Verificar la instalaci\xf3n del JDK",id:"paso-3-verificar-la-instalaci\xf3n-del-jdk",level:3},{value:"Paso 4: Configurar las variables de entorno",id:"paso-4-configurar-las-variables-de-entorno",level:3},{value:"Paso 5: Verificar la configuraci\xf3n",id:"paso-5-verificar-la-configuraci\xf3n",level:3},{value:"Instalar JDK en windows",id:"instalar-jdk-en-windows",level:2},{value:"Paso 1: Descargar e Instalar el JDK",id:"paso-1-descargar-e-instalar-el-jdk",level:3},{value:"Paso 2: Configurar las Variables de Entorno",id:"paso-2-configurar-las-variables-de-entorno",level:3},{value:"Paso 3: Verificar la Instalaci\xf3n",id:"paso-3-verificar-la-instalaci\xf3n",level:3},{value:"Paso 4: Configurar un Entorno de Desarrollo",id:"paso-4-configurar-un-entorno-de-desarrollo",level:3}],O={toc:C},S="wrapper";function I(e){let{components:a,...r}=e;return(0,o.kt)(S,(0,t.Z)({},O,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"desarrollo-en-javavisual-studio-code-en-windows-y-linux"},"Desarrollo en Java:Visual Studio Code en Windows y Linux"),(0,o.kt)("p",null,"En este post, te guiar\xe9 a trav\xe9s del proceso de configuraci\xf3n de Visual Studio Code (tambi\xe9n conocido como VSCode) para programar en Java con funciones como autocompletado de c\xf3digo, importaci\xf3n de librer\xedas y autoformato de c\xf3digo, entre otras utilidades. En resumen, aprender\xe1s a establecer un entorno de programaci\xf3n Java eficiente y sencillo en VSCode."),(0,o.kt)("p",null,'Vamos a ver c\xf3mo crear el "Hola Mundo" en Java, tanto si est\xe1s utilizando un sistema operativo Linux como Windows.'),(0,o.kt)(j,{mdxType:"Tabs"},(0,o.kt)(D,{value:"linux",label:"Linux",default:!0,mdxType:"TabItem"},(0,o.kt)("h2",{id:"intalar-jdk-en-linux"},"Intalar JDK en linux"),(0,o.kt)("p",null,"Configurar el JDK (Java Development Kit) en Linux es un paso esencial para poder desarrollar aplicaciones Java en tu sistema. A continuaci\xf3n, te proporciono una gu\xeda para configurar el JDK en Linux"),(0,o.kt)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8467593326194844",crossorigin:"anonymous"}),(0,o.kt)("ins",{class:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-8467593326194844","data-ad-slot":"6324259488"}),(0,o.kt)("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");"),(0,o.kt)("h3",{id:"paso-1-verificar-si-el-jdk-est\xe1-instalado"},"Paso 1: Verificar si el JDK est\xe1 instalado"),(0,o.kt)("p",null,"Antes de instalar el JDK, es importante verificar si ya est\xe1 instalado en tu sistema. Abre una terminal y ejecuta el siguiente comando para verificar si Java est\xe1 instalado:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -version\n")),(0,o.kt)("p",null,"Si el JDK ya est\xe1 instalado, deber\xedas ver la versi\xf3n de Java que est\xe1 en tu sistema."),(0,o.kt)("h3",{id:"paso-2-instalar-el-jdk-en-linux"},"Paso 2: Instalar el JDK en Linux"),(0,o.kt)("p",null,"Si Java no est\xe1 instalado o necesitas una versi\xf3n espec\xedfica, sigue estos pasos:"),(0,o.kt)("p",null,"Actualiza tu lista de paquetes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt update\n")),(0,o.kt)("p",null,"Instala el JDK:\nPuedes instalar OpenJDK, que es una implementaci\xf3n de c\xf3digo abierto del JDK oficial de Oracle:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt install openjdk-11-jdk\n")),(0,o.kt)("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8467593326194844",crossorigin:"anonymous"}),(0,o.kt)("ins",{class:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-8467593326194844","data-ad-slot":"6324259488"}),(0,o.kt)("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");"),(0,o.kt)("p",null,"Si deseas instalar una versi\xf3n espec\xedfica, puedes cambiar el n\xfamero despu\xe9s de openjdk- (por ejemplo, openjdk-8-jdk)."),(0,o.kt)("h3",{id:"paso-3-verificar-la-instalaci\xf3n-del-jdk"},"Paso 3: Verificar la instalaci\xf3n del JDK"),(0,o.kt)("p",null,"Para asegurarte de que el JDK se haya instalado correctamente, puedes verificar la versi\xf3n de Java y el compilador Java:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -version\njavac -version\n")),(0,o.kt)("p",null,"Ambos comandos deber\xedan mostrar la versi\xf3n del JDK que has instalado."),(0,o.kt)("h3",{id:"paso-4-configurar-las-variables-de-entorno"},"Paso 4: Configurar las variables de entorno"),(0,o.kt)("p",null,"Para que tu sistema pueda encontrar el JDK, es importante configurar las variables de entorno. Abre el archivo",(0,o.kt)("inlineCode",{parentName:"p"}," ~/.bashrc")," o ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," (dependiendo de tu distribuci\xf3n) con un editor de texto y a\xf1ade las siguientes l\xedneas al final del archivo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64 # La ruta puede variar dependiendo de tu instalaci\xf3n.\nexport PATH=$PATH:$JAVA_HOME/bin\n")),(0,o.kt)("p",null,"Guarda el archivo y ejecuta source ~/.bashrc (o source ~/.bash_profile) para aplicar los cambios en la sesi\xf3n actual de la terminal."),(0,o.kt)("h3",{id:"paso-5-verificar-la-configuraci\xf3n"},"Paso 5: Verificar la configuraci\xf3n"),(0,o.kt)("p",null,"Finalmente, verifica si la configuraci\xf3n se realiz\xf3 correctamente:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\necho $JAVA_HOME\n\n")),(0,o.kt)("p",null,"Deber\xedas ver la ruta del JDK que configuraste."),(0,o.kt)("p",null,"\xa1Listo! Ahora has configurado el JDK en tu sistema Linux. Puedes comenzar a desarrollar aplicaciones Java en tu entorno de preferencia, ya sea con Visual Studio Code, IntelliJ u otro IDE."),(0,o.kt)("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");")),(0,o.kt)(D,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("h2",{id:"instalar-jdk-en-windows"},"Instalar JDK en windows"),(0,o.kt)("h3",{id:"paso-1-descargar-e-instalar-el-jdk"},"Paso 1: Descargar e Instalar el JDK"),(0,o.kt)("p",null,"Ve al sitio web de ",(0,o.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/downloads/"},"Oracle JDK")," o ",(0,o.kt)("a",{parentName:"p",href:"https://jdk.java.net/"},"OpenJDK")," y descarga la \xfaltima versi\xf3n del JDK."),(0,o.kt)("p",null,"Ejecuta el instalador y sigue los pasos para instalar el JDK en tu sistema. Aseg\xfarate de recordar la ruta de instalaci\xf3n, ya que la necesitar\xe1s m\xe1s adelante.Por ejemplo yo lo guarde en:\n",(0,o.kt)("img",{alt:"image",src:n(9786).Z,width:"807",height:"522"})),(0,o.kt)("h3",{id:"paso-2-configurar-las-variables-de-entorno"},"Paso 2: Configurar las Variables de Entorno"),(0,o.kt)("p",null,'Busca "Variables de entorno" en el men\xfa de inicio y selecciona "Editar las variables de entorno del sistema".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image2",src:n(8327).Z,width:"640",height:"470"})),(0,o.kt)("p",null,'En la ventana de "Propiedades del sistema", haz clic en el bot\xf3n "Variables de entorno".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image2",src:n(4662).Z,width:"412",height:"486"})),(0,o.kt)("p",null,'En la secci\xf3n "Variables del sistema", selecciona la variable Path y haz clic en "Editar".'),(0,o.kt)("p",null,'Haz clic en "Nuevo" y agrega la ruta al directorio bin de tu instalaci\xf3n del JDK. Por ejemplo, si instalaste el JDK en ',(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Java\\jdk-17.0.1"),", a\xf1ade",(0,o.kt)("inlineCode",{parentName:"p"}," C:\\Program Files\\Java\\jdk-17.0.1\\bin"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image2",src:n(1245).Z,width:"618",height:"585"})),(0,o.kt)("p",null,"Ahora, crea una nueva variable de entorno llamada ",(0,o.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," y establece su valor como la ruta a tu instalaci\xf3n del JDK (por ejemplo, ",(0,o.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Java\\jdk-17.0.1)"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image2",src:n(466).Z,width:"618",height:"585"})),(0,o.kt)("p",null,'Haz clic en ok y luego en "Aceptar" para cerrar todas las ventanas y guardar todas las configuraciones que hiciste.'),(0,o.kt)("h3",{id:"paso-3-verificar-la-instalaci\xf3n"},"Paso 3: Verificar la Instalaci\xf3n"),(0,o.kt)("p",null,"Para verificar si el JDK se ha instalado correctamente, abre una nueva ventana del s\xedmbolo del sistema y ejecuta los siguientes comandos:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -version\n")),(0,o.kt)("p",null,"Deber\xedas ver la versi\xf3n de Java que instalaste."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"javac -version\n")),(0,o.kt)("p",null,"Esto deber\xeda mostrar la versi\xf3n del compilador Java."),(0,o.kt)("h3",{id:"paso-4-configurar-un-entorno-de-desarrollo"},"Paso 4: Configurar un Entorno de Desarrollo"),(0,o.kt)("p",null,"Ahora que has configurado el JDK, puedes usar un IDE como Visual Studio Code para comenzar a desarrollar aplicaciones Java."),(0,o.kt)("p",null,"\xa1Listo! Has configurado el JDK en tu sistema Windows y est\xe1s listo para empezar a programar en Java. Si tienes alguna otra pregunta o necesitas m\xe1s ayuda, no dudes en dec\xedrmelo. \xa1Buena suerte con tus proyectos!"))))}I.isMDXComponent=!0},1245:function(e,a,n){a.Z=n.p+"assets/images/wind-8ad1683d057b0184e683cf11965a038e.png"},9786:function(e,a,n){a.Z=n.p+"assets/images/windowsbonos-b28a7284c079b7be8e9a7bedd62b94d2.png"},4662:function(e,a,n){a.Z=n.p+"assets/images/windowsimag2-79ac068b52e3bac58a05c88e56c0aaa0.png"},8327:function(e,a,n){a.Z=n.p+"assets/images/windowsimage1-f74b75d6a5742afb9f60c46b953a2392.png"},466:function(e,a,n){a.Z=n.p+"assets/images/windowsimg3-2485560c774c099ba45918af9684f595.png"}}]);