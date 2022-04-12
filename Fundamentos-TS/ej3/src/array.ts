//Corchetes []

//Tipo explicito

let users : string[];
users = ['FerroLoco', 'CrazyTrain', 'Mancoco'];
//users = [1, tru, 'test'] Da error ya que definimos un array para strings

//Tipo Inferido
let userNames = ['FerroLoco', 'CrazyTrain', 'Mancoco'];//Si le queremos redefinir otro tipo de valor dara error.

//declarando de esta manera permite todos los tipos que se declararon adentro
let otherUsers = [1, true, 'Perrosky'];


//Array<TIPO>

let pictureTitles: Array<string>;
pictureTitles = ['Sunset', 'Family', 'Cats']

//Acceder a los valores de un array;

console.log('first user', users[0]);
console.log('first title', pictureTitles[2])