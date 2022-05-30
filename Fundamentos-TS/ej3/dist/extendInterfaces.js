"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var picOrientation;
(function (picOrientation) {
    picOrientation[picOrientation["Landscape"] = 0] = "Landscape";
    picOrientation[picOrientation["Portrait"] = 1] = "Portrait";
    picOrientation[picOrientation["Square"] = 2] = "Square";
    picOrientation[picOrientation["Panorama"] = 3] = "Panorama";
})(picOrientation || (picOrientation = {}));
const album = {
    id: 1,
    title: 'My Holidays',
    description: 'Photos from my vacations'
};
const foto = {
    id: 1,
    title: 'The sunset',
    orientation: picOrientation.Panorama
};
const newPhoto = {};
newPhoto.id = 2;
newPhoto.title = 'The sea';
newPhoto.orientation = picOrientation.Landscape;
console.log('album', album);
console.log('foto', foto);
console.log('newPhoto', newPhoto);
