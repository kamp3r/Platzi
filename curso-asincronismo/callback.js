const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

let api = 'https://rickandmortyapi.com/api/character/';

const fetchData = (url, callback) => {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange = (event) => {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const error = new Error('error' + url);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
};

fetchData(api, function (error1, data1) {
  if (error1) return console.error(error1);
  // luego buscamos en la api el id de Rick
  fetchData(api + data1.results[0].id, (error2, data2) => {
    // si error, matamos retornando un error
    if (error2) return console.error(error2);
    // por ultimo la consulta a la api que contiene su dimension
    fetchData(data2.origin.url, (error3, data3) => {
      // si error, matamos retornando un error
      if (error3) return console.error(error3);

      // mostramos los resultados :)
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
