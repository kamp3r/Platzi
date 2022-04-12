//Tipo Never:

function handleError(code: number, message: string): never{

    //process your code here
    //generate a message

    throw new Error(`${message}. Code: ${code}`)
}

function sumNumbers (limit: number): never{
    let sum = 0
    while(true){
        sum++;
    }
}