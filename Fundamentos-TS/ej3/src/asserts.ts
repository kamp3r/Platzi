// Angle Brackets Syntax <> //

let username : any
username = 'Perraxo';

//Tenemos una cadena, TS confia en mi!

let message : string = (<string>username).length > 5 ? `Welcome ${username}` : `Username must be at least 5 characters long`;

// console.log('message', message);

let usernameWithId: any = 'Ponchapelo 1';
//Como obtener el user name?

username = (<string>usernameWithId).substring(0, 10);
console.log ('username Only', username)

// Sintaxis 'as'

message = (username as string).length > 5 ? `Welcome ${username}` : `Username must be at least 5 characters long`;
console.log('message', message);