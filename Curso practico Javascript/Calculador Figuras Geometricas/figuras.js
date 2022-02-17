//Codigo cuadrado
console.group('Cuadrados');

const ladoCuadrado = (lado) => lado;

const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;

console.groupEnd();

//Código triangulo

console.group('Triangulos');

const perimetroTriangulo = (ladoA, ladoB, base) =>
  Number(ladoA) + Number(ladoB) + Number(base);

const areaTriangulo = (base, altura) => (base * altura) / 2;

const trianguloIsoscelesAltura = (ladoA,ladoB,base) => {
  if (ladoA === ladoB) {
   const altura = Math.sqrt((ladoA ** 2) - (base ** 2) / 4).toFixed(2);
   return altura
  }else{
      alert('No es un triangulo isosceles')
  }
};


console.groupEnd();

//Código Circulo

console.group('Círculos');

const diametroCirculo = (radio) => radio * 2;

const PI = Math.PI;

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

const areaCirculo = (radio) => radio * radio * PI;

console.groupEnd();

//Cuadrado

const calcularPerimetroCuadrado = () => {
  const inputSqr = document.getElementById('inputCuadrado');
  const value = inputSqr.value;
  const perimetro = perimetroCuadrado(value);
  const parr = document.createElement('p');
  parr.innerHTML = `El perimetro de tu cuadrado es: ${perimetro}cm`;
  document.querySelector('#resultadoCuadrado').appendChild(parr);
};

const calcularAreaCuadrado = () => {
  const inputSqr = document.getElementById('inputCuadrado');
  const value = inputSqr.value;
  const area = areaCuadrado(value);
  const parr = document.createElement('p');
  parr.innerHTML = `El perimetro de tu cuadrado es: ${area}cm`;
  document.querySelector('#resultadoCuadrado').appendChild(parr);
};

const borrarCuadrado = () => {
  const container = document.querySelector('#resultadoCuadrado');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

//Triangulo

const calcularPerimetroTriangulo = () => {
  const inputTringA = document.getElementById('inputTrianguloA').value;
  const inputTringB = document.getElementById('inputTrianguloB').value;
  const inputTringBase = document.getElementById('inputTrianguloBase').value;
  const perimetro = perimetroTriangulo(
    inputTringA,
    inputTringB,
    inputTringBase
  );
  const parr = document.createElement('p');
  parr.innerHTML = `El perimetro de tu triangulo es: ${perimetro}cm`;
  document.querySelector('#resultadoTriangulo').appendChild(parr);
};

const calcularAreaTriangulo = () => {
  const inputTringBase = document.getElementById('inputTrianguloBase').value;
  const inputTringAlt = document.getElementById('inputTrianguloAlt').value;
  const area = areaTriangulo(inputTringBase, inputTringAlt);
  const parr = document.createElement('p');
  parr.innerHTML = `El area de tu cuadrado es: ${area}cm`;
  document.querySelector('#resultadoTriangulo').appendChild(parr);
};

const calcularAlturaIsosceles = () => {
    const inputTringA = document.getElementById('inputTrianguloA').value;
    const inputTringB = document.getElementById('inputTrianguloB').value;
    const inputTringBase = document.getElementById('inputTrianguloBase').value;
    const isosceles = trianguloIsoscelesAltura(inputTringA, inputTringB, inputTringBase);
    if(Number(isosceles)){
        const parr = document.createElement('p');
        parr.innerHTML = `La altura de tu triangulo isosceles es: ${Number(isosceles)}cm`;
        document.querySelector('#resultadoTriangulo').appendChild(parr);
    }
  };

const borrarTriangulo = () => {
  const container = document.querySelector('#resultadoTriangulo');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

//Circulo

const calcularDiametroCirculo = () => {
  const inputTringBase = document.getElementById('inputCirculo').value;
  const diametro = diametroCirculo(inputTringBase);
  const parr = document.createElement('p');
  parr.innerHTML = `El perimetro de tu cuadrado es: ${diametro}cm`;
  document.querySelector('#resultadoCirculo').appendChild(parr);
};

const calcularPerimetroCirculo = () => {
  const inputTringBase = document.getElementById('inputCirculo').value;
  const perimetro = perimetroCirculo(inputTringBase);
  const parr = document.createElement('p');
  parr.innerHTML = `El perimetro de tu cuadrado es: ${perimetro.toFixed(2)}cm`;
  document.querySelector('#resultadoCirculo').appendChild(parr);
};
const calcularAreaCirculo = () => {
  const inputTringBase = document.getElementById('inputCirculo').value;
  const area = areaCirculo(inputTringBase);
  const parr = document.createElement('p');
  parr.innerHTML = `El perimetro de tu cuadrado es: ${area.toFixed(2)}cm`;
  document.querySelector('#resultadoCirculo').appendChild(parr);
};

const borrarCirculo = () => {
  const container = document.querySelector('#resultadoCirculo');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};
