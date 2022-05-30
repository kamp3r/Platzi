"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, date, orientation) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.orientation = orientation;
    }
    toString() {
        return `[id: ${this.id}, title: ${this.title}, date: ${this.date}, orientation: ${this.orientation}]`;
    }
}
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'My Holidays');
const picture = new Picture(1, 'The sunset', '2021-02-10', PhotoOrientation.Panorama);
album.addPicture(picture);
console.log('album', album);
