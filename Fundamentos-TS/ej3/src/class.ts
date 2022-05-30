export{};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture{
    //Propiedades
    id: number;
    title: string;
    date: string;
    orientation: PhotoOrientation;
    constructor(id:number, title: string, date: string, orientation: PhotoOrientation){
        this.id = id;
        this.title = title;
        this.date = date;
        this.orientation = orientation;
    }

    toString(){
        return `[id: ${this.id}, title: ${this.title}, date: ${this.date}, orientation: ${this.orientation}]`;
    }
}

class Album{
    id: number;
    title: string;
    pictures: Picture[];
    constructor(id: number, title: string){
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(picture: Picture){
        this.pictures.push(picture);
    }
}

const album : Album = new Album(1, 'My Holidays');
const picture: Picture = new Picture(1, 'The sunset', '2021-02-10', PhotoOrientation.Panorama);
album.addPicture(picture);

console.log('album', album);