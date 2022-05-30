"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pictureOrientation = {
    None: 'None',
    Landscape: 'Landscape',
    Portrait: 'Portrait',
    Square: 'Square',
    Panorama: 'Panorama'
};
function generatePicture(config) {
    const pic = { title: 'Default', date: '2020-01-01' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picturita = generatePicture({ title: 'My dog', date: '2021-02-10' });
let userito;
userito = { id: 10, username: 'juan', isPro: true };
console.log('user', user);
