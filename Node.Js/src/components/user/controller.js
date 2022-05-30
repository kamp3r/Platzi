import { addUser as add, getUser as get, updateUser as update, deleteUser as deleted } from "./store.js";

const addUser = (user) => {
    return new Promise ((resolve, reject)=>{
        if(!user){
            reject('[userController] Datos ingresados, no validos!');
            return false
        }
        const fullUser = {
            username: user,
            date: new Date()
        }
        add(fullUser)
        resolve(fullUser);
    })
}

const getUser = (filterUser)=>{
    return new Promise((resolve, reject)=>{
        if(get().length === 0){
            reject('[userController] No se pudo obtener la lista de usuarios');
            return false;
        }
        resolve(get(filterUser));
    })
}

const updateUser = (id, user) =>{
    return new Promise(async(resolve, reject)=>{
        if(!id || !user){
            reject('[userController] Datos incorrectos');
            return false;
        }
        const result = await update(id, user);
        resolve(result);
    })
}

const deleteUser = (id) =>{
    return new Promise(async(resolve, reject)=>{
        if(!id){
            reject('[userController] ID Invalido');
            return false;
        }
        const result = await deleted(id);
        resolve(result);
    })
}

export { addUser, getUser, updateUser, deleteUser };