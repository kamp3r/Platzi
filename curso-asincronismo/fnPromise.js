const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error('Error', url));
      }
    };
    xhttp.send();
  });
};

module.exports = fetchData;
