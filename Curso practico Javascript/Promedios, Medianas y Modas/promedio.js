const lista = [100, 200, 300, 400, 500, 600];

const promedioFn = (lista) =>{
const sumWithInitial = lista.reduce(
  (previousValue = 0, currentValue) => previousValue + currentValue,
  );
   const promedio = sumWithInitial / lista.length

   return promedio
}
