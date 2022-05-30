export{}
//Funcion para mostrar una fotografia

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation;
}

function showPicture(picture: Picture){ 
  console.log(
    `[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`
  );
}

let myPic = {
    title: "My dog",
    date: "2021-02-10",
    orientation: PhotoOrientation.Panorama
}

showPicture(myPic);
showPicture({
    title: "My cat",
    date: "2021-02-10",
    orientation: PhotoOrientation.Square
})