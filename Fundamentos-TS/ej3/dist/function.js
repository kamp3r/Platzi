"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPicture(title, date, size) {
    console.log('create picture using', title, date, size);
}
createPicture('My cat', '300x300');
let createPic = (title, date, size) => {
    return {
        title,
        date,
        size
    };
};
const picture = createPic('My dog', '2021-02-10', '300x300');
console.log(picture);
function handleError(code, message) {
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return 'An error has ocurred';
    }
}
let result = handleError(404, 'error');
console.log(result);
