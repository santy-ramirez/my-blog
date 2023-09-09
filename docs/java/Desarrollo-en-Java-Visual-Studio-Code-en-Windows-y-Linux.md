---
sidebar_position: 2
---

# Desarrollo en Java:Visual Studio Code en Windows y Linux

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

En este post, te guiaré a través del proceso de configuración de Visual Studio Code (también conocido como VSCode) para programar en Java con funciones como autocompletado de código, importación de librerías y autoformato de código, entre otras utilidades. En resumen, aprenderás a establecer un entorno de programación Java eficiente y sencillo en VSCode.

Vamos a ver cómo crear el "Hola Mundo" en Java, tanto si estás utilizando un sistema operativo Linux como Windows.

<Tabs>
  <TabItem value="linux" label="Linux" default>

## Intalar JDK en linux

Configurar el JDK (Java Development Kit) en Linux es un paso esencial para poder desarrollar aplicaciones Java en tu sistema. A continuación, te proporciono una guía para configurar el JDK en Linux

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8467593326194844"
     crossorigin="anonymous"></script>

<ins class="adsbygoogle"
style={{ display: "block", textAlign: "center" }}
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-8467593326194844"
data-ad-slot="6324259488"></ins>

<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

### Paso 1: Verificar si el JDK está instalado

Antes de instalar el JDK, es importante verificar si ya está instalado en tu sistema. Abre una terminal y ejecuta el siguiente comando para verificar si Java está instalado:

```
java -version
```

Si el JDK ya está instalado, deberías ver la versión de Java que está en tu sistema.

### Paso 2: Instalar el JDK en Linux

Si Java no está instalado o necesitas una versión específica, sigue estos pasos:

Actualiza tu lista de paquetes:

```
sudo apt update
```

Instala el JDK:
Puedes instalar OpenJDK, que es una implementación de código abierto del JDK oficial de Oracle:

```
sudo apt install openjdk-11-jdk
```

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8467593326194844"
     crossorigin="anonymous"></script>

<ins class="adsbygoogle"
style={{ display: "block", textAlign: "center" }}
data-ad-layout="in-article"
data-ad-format="fluid"
data-ad-client="ca-pub-8467593326194844"
data-ad-slot="6324259488"></ins>

<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

Si deseas instalar una versión específica, puedes cambiar el número después de openjdk- (por ejemplo, openjdk-8-jdk).

### Paso 3: Verificar la instalación del JDK

Para asegurarte de que el JDK se haya instalado correctamente, puedes verificar la versión de Java y el compilador Java:

```
java -version
javac -version
```

Ambos comandos deberían mostrar la versión del JDK que has instalado.

### Paso 4: Configurar las variables de entorno

Para que tu sistema pueda encontrar el JDK, es importante configurar las variables de entorno. Abre el archivo` ~/.bashrc` o `~/.bash_profile` (dependiendo de tu distribución) con un editor de texto y añade las siguientes líneas al final del archivo:

```
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64 # La ruta puede variar dependiendo de tu instalación.
export PATH=$PATH:$JAVA_HOME/bin
```

Guarda el archivo y ejecuta source ~/.bashrc (o source ~/.bash_profile) para aplicar los cambios en la sesión actual de la terminal.

### Paso 5: Verificar la configuración

Finalmente, verifica si la configuración se realizó correctamente:

```

echo $JAVA_HOME

```

Deberías ver la ruta del JDK que configuraste.

¡Listo! Ahora has configurado el JDK en tu sistema Linux. Puedes comenzar a desarrollar aplicaciones Java en tu entorno de preferencia, ya sea con Visual Studio Code, IntelliJ u otro IDE.

<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

</TabItem>
<TabItem value="windows" label="Windows">

## Instalar JDK en windows

</TabItem>
</Tabs>
