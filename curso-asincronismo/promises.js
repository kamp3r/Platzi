const fetchData = require('./fnPromise')

let api = 'https://rickandmortyapi.com/api/character/';

fetchData(api)
    .then(data =>{
        console.log(data.info.count);
        return fetchData(`${api}${data.results[0].id}`)
    })
    .then(data =>{
        console.log(data.name)
        return fetchData (data.origin.url)
    })
    .then(data =>{
        console.log(data.dimension)
    })