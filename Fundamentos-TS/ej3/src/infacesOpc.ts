export{}

const pictureOrientation = {
    None: 'None',
    Landscape: 'Landscape',
    Portrait: 'Portrait',
    Square: 'Square',
    Panorama: 'Panorama'
}

interface PictureConfig{
    title: string;
    date: string;
}


function generatePicture(config: PictureConfig){
    const pic = {title: 'Default', date: '2020-01-01'}
    if(config.title){
        pic.title = config.title

    }
    if(config.date){
        pic.date = config.date
    }
    return pic
}

let picturita = generatePicture({title: 'My dog', date: '2021-02-10'})

interface User{
    readonly id: number; //SOLO LECTURA
    username: string;
    isPro: boolean;
}

let userito: User;
userito = {id: 10, username: 'juan', isPro: true}
console.log('user', user)
