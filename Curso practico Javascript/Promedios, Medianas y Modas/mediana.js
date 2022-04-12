const lista = [100, 200, 300, 500, 600];

const promedioFn = (lista) =>{
  const sumWithInitial = lista.reduce(
    (previousValue = 0, currentValue) => previousValue + currentValue,
    );
     const promedio = sumWithInitial / lista.length
  
     return promedio
  }



const esPar = (number) =>{
  if(number % 2 === 0){
    return true
  }else{
    return false
  }
}

const calcularMediana = (lista)=>{

  const listaOrdenada = lista.sort((a, b)=> a - b)  

  const mitadLista = parseInt(lista.length / 2)

  if(esPar(listaOrdenada.length)){
    const elem1 = lista[mitadLista - 1]
    const elem2 = lista[mitadLista]

  const medianaPromedio = promedioFn([elem1, elem2])

  return medianaPromedio
  }else{
    let mediana = lista[mitadLista]
    return mediana
  }
}
