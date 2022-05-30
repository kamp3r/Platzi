import express from 'express';
import { success, error } from '../../network/response.js';
import { addUser, getUser, updateUser, deleteUser } from './controller.js';

const userRouter = express.Router();

userRouter.get('/:user', (req, res) => {
  const user = req.params.user || null;
  getUser(user)
    .then((users) => {
      success(req, res, users, 200);
    })
    .catch((err) => {
      error(req, res, 'No se pudo obtener la lista de usuarios', 500, err);
    });
});

userRouter.post('/', (req, res) => {
  const user = req.body.user;
  addUser(user)
    .then((fullUser) => {
      res.send(success(req, res, fullUser, 201));
    })
    .catch((err) => {
      res.send(error(req, res, 'Error al agregar el usuario', 500, err));
    });
});

userRouter.patch('/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body.user;
    updateUser(id, user)
        .then((patchedUser) => {
        res.send(success(req, res, patchedUser, 200));
        })
        .catch((err) => {
        res.send(error(req, res, 'Error al actualizar el usuario', 500, err));
        });
})

userRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    deleteUser(id)
        .then((deletedUser) => {
        res.send(success(req, res, deletedUser, 200));
        })
        .catch((err) => {
        res.send(error(req, res, 'Error al eliminar el usuario', 500, err));
        });
})

export { userRouter };