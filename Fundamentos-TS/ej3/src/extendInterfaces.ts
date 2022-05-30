export{}

enum picOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Entidad{
    id: number;
    title: string
}

interface Album extends Entidad{
    description: string;
}

interface photo extends Entidad{
    orientation: picOrientation;
}

const album: Album = {
    id: 1,
    title: 'My Holidays',
    description: 'Photos from my vacations'
}

const foto: photo = {
    id: 1,
    title: 'The sunset',
    orientation: picOrientation.Panorama
}

const newPhoto = {} as photo;
newPhoto.id = 2;
newPhoto.title = 'The sea';
newPhoto.orientation = picOrientation.Landscape;

console.log('album', album)
console.log('foto', foto)
console.log('newPhoto', newPhoto)
