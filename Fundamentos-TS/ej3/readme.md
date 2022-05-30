#Tipado en TypeScript

*Explicito:
Define una sintaxis para la creación de variables con tipo de dato

-Notación POSTFIJA

 nombrevariable : Tipo de dato
---------------------------------
*Inferido:
TypeScript tiene la habilidad de deducir el tipo en función de un valor.

- Notación implícita


nombreVariable = Valor


-Tipos primitivos:

Number - Boolean - String - Array
Tuple - Enum - Any - Void - Null
Undefined - Never - Object


-Number:

Valores Numéricos
Valores Hexadecimales
Valores Binarios
Valores Octales

-Any:

Usado para capturar valores dinámicos, seria siempre un ultimo recurso cuando no sepamos que es nuestra variable.

Los valores pueden cambiar de tipo en el tiempo:

*API's Externas
*Librerías de terceros.

-Void:

Es lo opuesto a any, representa la ausencia de tipo, es utilizado en la declaración de funciones
para indicar el tipo de retorno de las mismas, y se utiliza cuando las funciones
no retornan ningún valor.

-Never:

Representa el tipo de valor que NUNCa ocurre:
Funciones que lanzan excepciones.
Funciones que nunca retornan un valor.

-Null y Undefined:

En TypeScript, ambos 'valores' tienen sus respectivos tipos:
*null
*undefined

Ambos pueden ser subtipos de los otros tipos de datos, lo cual significa que se puede asignar null y undefined
a una variable de tipo string por ejemplo.


-Object

Object es el tipo de dato que representa un valor no primitivo

Es el tipo para variable que no sea number, string, boolean, null, etc;


-Tuplas

Comparte la sintaxis con los arrays

-Enum

Los enumerados permiten definir un conjunto de constantes con nombre
Tienen la ventaja de adaptarse al contexto de la aplicacion

-Union de Tipos

En typescript se puede definir una variable con multiples tipos de datos: union type.

Se utiliza el simbolo de pipe ('|') entre los tipos

-Alias de Tipos

Typescript permite crear un alias como nuevo nombre para un tipo

El alias se puede aplicar tambien un conjunto de combinacion de tipos

Se usa la palabra reservada "Type"

-Aserciones de Tipo

Cuando el programador puede conocer mas que Typescript sobre el valor de una variable

Se parece al casting de tipos en otros lenguajes de programacion

Usa dos sintaxis <Angle Brackets> y (variable as tipo)

-Funciones en typescript

Los parametros son tipados

Se pueden definir parametros opcionales

El tipo de retorno puede ser un tipo basico, enum, alias, tipo literal o una combinacion de ellos.

-Interfaces

Una interfaz (En TypeScript) es un tipo (como string, boolean, number, etc) mas “complejo”, en el cual defines (como enun contrato) las propiedades y metodos que se deben cumplir de cualquier objeto que lo instancie.

La diferencia entre una interfaz y una clase es que en la interfaz solo hacemos mencion de que esperamos de un objeto, en una clase mencionamos las propiedades (igual que una interfaz) pero definimos los metodos (osea, especificamos que hara ese metodo, en la interfaz solo mencionamos el nombre de la funcion)

--Interfaces con propiedades opcionales

No todas las propiedades de una interfaz podrian ser requeridas.

Establecemos una propiedad como opcional con el simbolo (?) despues del nombre

--Interfaces extendibles

Las interfaces pueden extenderse unas de otras. Esto permite copiar los miembros ya definidos en una interfaz a otra, ganando flexibilidad y reusabilidad de componentes

--Clases Publicas

Typescript define un modificador de acceso publico por defecto para los miembros de clase
Tambien es posible marcar un miembro como publico usando la palabra reservada public;

--Clases Privadas

Typescript define una manera propia de declarar o marcar un miembro como privado usando palabra reservada private.

--Set y Get

Typescript soporta los métodos accesores set y get como una forma de interceptar los accesos a los miembros privados de un objeto.

--Herencia en clases y propiedades estaticas

Para extender una clase, se utiliza la palabra extends, pero al ser privada debemos hacer sobre la clase "madre" usar la palabra protected en lugar private.
En el constructor que recibe el extends, se coloca  en las PROPIEDADES(donde se coloca this.xxx) super(), las propiedades que hereda de la clase madre.


--Clases abstractas

Las clases abstractas son la base de donde otras clases podrian derivarse a diferencia de una interfaz, una clase abstracta puede implementar funciones para sus instancias.
La palabra reservada es abstract

--Propiedades estaticas y propiedades solo lectura

Las clases por lo general definen atributos y metodos aplicables a las instancias de las mismas.
A traves de la palabra reservada estatic se puede definir un miembro visible a nivel de clase

--Modules

existen los path alias para que no tengamos que lidiar con esa mano de puntos y slash en nuestros proyectos.
Esta configuración la pueden poner en el ts.config.json dentro de compilerOptions y así pueden acceder al shortcut @item para llegar a esa carpeta en específico que están buscando.
Para el ejemplo yo tengo una carpeta item y dentro el archivo index.ts.
"paths": { 
      "@item": ["item/index.ts"],
    }
y así se podría importar

import { Item }  from  '@item'


Instalación de Typescript y WebPACK

-npm init -y
-npm i typescript webpack webpack-cli ts-loader --save-dev
-Crear archivo webpack.config.js
y pegarle esto adentro

module.exports = {
    mode: 'production', //para ponerlo en produccion
    entry: './src/main.ts', // le decimos de donde sale la data que le vamos a pasar.
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader0,
                exclude: /node_modules/
            }
        ]
    }
    resolve: {
        extensions: ['.ts', '.js'], //le decimos que soportamos ts y js
    },
    output: {
        filename: 'bundle.js', //sale en un archivo js llamado bundle
    }
}

-Agregar el SCRIPT en package.json "build": "webpack";
-npm run build (haciendo que pase de tsc a js)

