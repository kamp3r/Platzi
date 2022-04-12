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