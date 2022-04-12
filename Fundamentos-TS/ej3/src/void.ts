//Void

// Notación explicita

function showInfo(user: any): any{
   console.log('User info', user.id, user.name, user.lastName)
}

// Notación inferida

function showThatInfo(user: any){
    console.log('User info', user.id, user.name, user.lastName)
 }

// Tipo void como tipo de dato en una variable

let uwu : void;
//uwu = null;
//uwu = undefined;