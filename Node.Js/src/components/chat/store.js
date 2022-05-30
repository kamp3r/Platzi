import { chatModel } from './model.js'

const addChat = (chat) => {
    const myChat = new chatModel(chat);
    return myChat.save();
};

const getChat = (userId) =>{
    return new Promise((resolve, reject)=>{
        let filter = {};
        if(userId){
            filter = {users: userId}
        }
        chatModel.find(filter)
            .populate('users')
            .exec((err, chats)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(chats);
                }
            })
    })
}

export {addChat, getChat}