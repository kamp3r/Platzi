import { messageRouter } from '../components/message/network.js';
import { userRouter } from '../components/user/network.js';
import { chatRouter } from '../components/chat/network.js';

const routesAPI = (app)=>{
    app.use('/message', messageRouter);
    app.use('/user', userRouter);
    app.use('/chat', chatRouter);
}

export {routesAPI}