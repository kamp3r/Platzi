import {addChat as add, getChat as get} from './store.js';

const addChat = (users) => {
    if(!users || !Array.isArray(users)){
        return new Promise((resolve, reject)=>{
            reject('[chatController] Datos incorrectos');
        })
    }
    const chat = {
        users: users
    }
    return add(chat);
}

const getChat = (userId) => {
    return get(userId);
}

export { addChat, getChat };