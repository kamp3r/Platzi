import { modelUser } from "./model.js";

const addUser = (user) => {
    const myUser = new modelUser(user);
    myUser.save();
};

const getUser = async(filterUser) =>{
    let filter = {};
    if(filterUser !== null){
        filter = {username: filterUser}
    }
    const users = await modelUser.find(filter);
    return users;
}

const updateUser = async(id, user)=>{
    const myUser = await modelUser.findByIdAndUpdate({_id: id}, {username: user});
    return myUser
}

const deleteUser = async(id)=>{
    const myUser = await modelUser.findByIdAndRemove({_id: id});
    return myUser
}

export {addUser,getUser, updateUser, deleteUser};