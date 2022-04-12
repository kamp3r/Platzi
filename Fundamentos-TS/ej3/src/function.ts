export {}
// Crear una fotografia
//Tipos para los parametros

type SquareSize = '100x100' | '200x200' | '300x300' | '400x400' | '500x500'

// function createPicture(title : string, date: string, size: SquareSize){
//     console.log('create picture using', title, date, size)
// }

// createPicture('My cat', '2021-02-10', '300x300')


//Parametros opcionales

function createPicture(title?: string, date?: string, size?: SquareSize){
    console.log('create picture using', title, date, size)
}

createPicture('My cat', '300x300')

//Flat array function

let createPic = (title: string, date: string, size: SquareSize) : object => {
    return {
        title,
        date,
        size
    }
}

const picture = createPic('My dog', '2021-02-10', '300x300')

console.log(picture)

//Tipos de retorno con typescript

function handleError (code: number, message: string) : never | string{
    //Procesamiento del codigo, mensaje
    if(message === 'error'){
        throw new Error(`${message}. Code error: ${code}`)
    }else{
        return 'An error has ocurred'
    }
}

let result = handleError(200, 'ok') //string
console.log(result)

result = handleError(404, 'error') // error
console.log(result)