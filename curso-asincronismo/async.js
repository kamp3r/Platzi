const fetchData = require('./fnPromise');
let api = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (urlApi) =>{
    try{
        const data = await fetchData(urlApi);
        const character = await fetchData(`${api}${data.results[0].id}`)
        const origin = await fetchData(character.origin.url)

        console.log(data.info.count)
        console.log(character.name)
        console.log(origin.dimension)
    }
    catch{
        const err = new Error ('Todo salio mal')
        console.error(err)
    }
}

anotherFunction(api)