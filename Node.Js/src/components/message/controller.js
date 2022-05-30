import { socket } from "../../../socket.js";
import { addMessage as add, getMessage as get, updateMessage as update, deleteMessage as deleted } from "./store.js";

const addMessage = (chat, user, message, file) => {
    return new Promise((resolve, reject) => {
        if(!chat ||!user || !message){
            console.error('[messageController] No se pudo agregar el mensaje');
            reject('[messageController] No se pudo agregar el mensaje');
            return false
        }
        let fileUrl = '';
        if(file){
            fileUrl = 'http://localhost:8080/public/files/' + file.filename;
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            file: fileUrl,
            date: new Date()
        }
        add(fullMessage);

        socket.io.emit('message', fullMessage)

        resolve(fullMessage)
}   
)}

const getMessages = (filterUser) => {
    return new Promise((resolve, reject) => {
        if(get().length === 0){
            console.error('[messageController] No se pudo obtener la lista de mensajes');
            reject('[messageController] No se pudo obtener la lista de mensajes');
        }
        resolve(get(filterUser));
    })
}

const updateMessages = (id, messages) =>{
    return new Promise(async(resolve, reject) => {
        if(!id || !messages){
            reject('[messageController] Datos incorrectos');
            return false;
        }
        const result = await update(id, messages);
        resolve(result);
    }
    )
}

const deleteMessage = (id) =>{
    return new Promise(async(resolve, reject) =>{
        if(!id){
            reject('[messageController] ID Invalido');
            return false;
        }
        const result = await deleted(id);
        resolve(result);
    })
}


export { addMessage, getMessages, updateMessages, deleteMessage };
