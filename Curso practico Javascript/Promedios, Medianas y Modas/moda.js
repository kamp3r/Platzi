const lista = [1, 2, 3, 4, 5, 5, 6, 4, 2, 3, 5];

const listaCount = {};

lista.map((elem) => {
  if (listaCount[elem]) {
    listaCount[elem] += 1;
  } else {
    listaCount[elem] = 1;
  }
});

const listaArray = Object.entries(listaCount).sort((a, b) => {
  a[1] - b[1];
});


const moda = listaArray[listaArray.length - 1]