const promedioFn = (lista) =>{
    const sumWithInitial = lista.reduce(
      (previousValue = 0, currentValue) => previousValue + currentValue,
      );
       const promedio = sumWithInitial / lista.length
    
       return promedio
}


const esPar = (cantidad) => {
    return (cantidad % 2 === 0)
  };

//Calculadora Mediana

const medianaSalarios = (lista) =>{
    const mitad = parseInt(lista.length / 2)

    if(esPar(lista.length)){
        const personaMedia1 = lista[mitad - 1]
        const personaMedia2 = lista[mitad]
        
        const mediana = promedioFn([personaMedia1, personaMedia2])
        return mediana

    }else{
        const personaMedia = lista[mitad]
        return personaMedia
    }
}  

// Mediana General

const salariosArg = argentina.map((people) => {
  return people.salary;
});

const salariosSorted = salariosArg.sort(
  (salaryA, salaryB) => salaryA - salaryB
);

const medianaGeneral = medianaSalarios(salariosSorted)

//Mediana Top

const sliceStart = (salariosSorted.length * 90)/100
const sliceEnd = salariosSorted.length - sliceStart

const topSalarios = salariosSorted.splice(sliceStart, sliceEnd)

const medianaTop10 = medianaSalarios(topSalarios)


console.log({
    medianaGeneral,
    medianaTop10
})


var alfa = 12.4
parseInt(alfa)
console.log(typeof alfa)