import express from 'express';
import multer from 'multer';
import { success, error } from '../../network/response.js';
import { addMessage, getMessages, updateMessages, deleteMessage } from './controller.js';

const messageRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files/')
},
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage });

messageRouter.get('/', (req, res) => {
    const filterMessages = req.query.chat || null;
    getMessages(filterMessages)
        .then(messages => {
            success(req, res, messages, 200);
        })
        .catch(err => {
            error(req, res, 'No se pudo obtener la lista de mensajes', 500, err);
        });
});

messageRouter.post('/', upload.single('file'),(req, res) => {
  
  addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((fullMessage) => {
        res.send(success(req, res, fullMessage, 201));
    })
    .catch((err) => {
        res.send(error(req, res, 'Error al agregar el mensaje', 500, err));
    });
});

messageRouter.patch('/:id', (req, res) => {
    
    updateMessages(req.params.id, req.body.message)
        .then((patchedMessage) => {
            res.send(success(req, res, patchedMessage, 200));
        })
        .catch((err) => {
            res.send(error(req, res, 'Error al actualizar el mensaje', 500, err));
        });
})

messageRouter.delete('/:id', (req, res) => {

    deleteMessage(req.params.id)
        .then((deletedMessage) => {
            res.send(success(req, res, deletedMessage, 200));
        })
        .catch((err)=>{
            res.send(error(req, res, 'Error al eliminar el mensaje', 500, err));
        }
        )
})

export { messageRouter };
