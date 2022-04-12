//Any

// Notación explicita

let idUser : any;//se le puede reasignar cualquier tipo de dato a la variable al ser definida como 'Any';
idUser = 1; // number
idUser = 'Joker'; //string

// Notación inferida

let otherId; //No se le asigna valor y  TS lo deja como 'Any'

let anotherId : any = 'Richard';
anotherId = 1337;

