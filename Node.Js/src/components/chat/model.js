import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema({
    users: [{type: mongoose.Schema.ObjectId, ref: 'user', required: true}]
});

const chatModel = mongoose.model('chat', chatSchema)

export {chatModel};