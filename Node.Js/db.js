import mongoose from 'mongoose';

const db = mongoose;

db.Promise = global.Promise;

const connect = (URL) =>{
    mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log(`[DB] Conectada con exito a la base de datos`);
}

export {connect}

