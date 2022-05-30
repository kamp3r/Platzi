import express from 'express';
import { success, error } from '../../network/response.js';
import { addChat, getChat} from './controler.js'

const chatRouter = express.Router();

chatRouter.post('/', (req, res) => {
  const users = req.body.users;
  addChat(users)
    .then((chat) => {
      res.send(success(req, res, chat, 201));
    })
    .catch((err) => {
      res.send(error(req, res, 'Error al agregar el chat', 500, err));
    });
});

chatRouter.get('/:userId', (req, res) => {
  const listChat = req.params.userId;
  getChat(listChat)
    .then((chat) => {
      res.send(success(req, res, chat, 200));
    })
    .catch((err) => {
      res.send(error(req, res, 'Error al obtener los chats', 500, err));
    });
});

export { chatRouter };