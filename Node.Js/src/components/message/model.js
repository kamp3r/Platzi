import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    chat: {type: mongoose.Schema.ObjectId, ref: 'Chat', required: true},
    user: {type: mongoose.Schema.ObjectId, ref: 'user', required: true},
    message: {type: String, required: true},
    file: {type: String},
    date: Date
});

const modelMessage = mongoose.model('messages', messageSchema);

export {modelMessage};

