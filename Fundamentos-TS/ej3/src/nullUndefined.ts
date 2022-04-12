//Tipo Null
//Notacion Explicita:

let nullVariable : null;//solo permite la asignación de null
nullVariable = null;

// Notación inferida
let otherNull = null
otherNull = 2;//figura como any

console.log('nullVariable', nullVariable)
console.log('otherNull', otherNull)


//Tipo Undefined

let undefinedVariable : undefined = undefined;

//undefinedVariable = 1; Da error porque solo admite undefined

let anotherUndefined = undefined;

anotherUndefined = 'PerroLoco' //soporta any

console.log('undefinedVariable', undefinedVariable)
console.log('anotherUndefined', anotherUndefined)

//null y undefined como subtipos;

let albumName : string;
// albumName = null;
// albumName = undefined;
