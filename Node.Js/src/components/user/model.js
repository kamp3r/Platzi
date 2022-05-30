import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    date: Date
})

const modelUser = mongoose.model('user', userSchema);

export {modelUser};