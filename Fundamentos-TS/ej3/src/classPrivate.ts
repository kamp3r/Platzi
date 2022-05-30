export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  //Propiedades
  private id: number;
  private title: string;
  date: string;
  orientation: PhotoOrientation;
  public constructor(
    id: number,
    title: string,
    date: string,
    orientation: PhotoOrientation
  ) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.orientation = orientation;
  }

  public toString() {
    return `[id: ${this.id}, title: ${this.title}, date: ${this.date}, orientation: ${this.orientation}]`;
  }
}

class Album {
  private id: number;
  private title: string;
  pictures: Picture[];
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }
  addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, 'My Holidays');
const picture: Picture = new Picture(
  1,
  'The sunset',
  '2021-02-10',
  PhotoOrientation.Panorama
);
album.addPicture(picture);

console.log('album', album);

//picture.id = 100; //Private
//picture.title = 'The new sunset'; //Private
//Tambien podemos utilizar '#' para darle nombre a los metodos privados
