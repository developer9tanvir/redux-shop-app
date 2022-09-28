import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser, userLogin, userRegister } from '../controllers/userControllers.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';





// init Route
const Router = express.Router();


// Route REST API
Router.route('/').get(authMiddleware, getAllUser).post(authMiddleware, createUser);
Router.route('/:id').get(authMiddleware, getSingleUser).delete(authMiddleware, deleteUser).put(authMiddleware, updateUser).patch(authMiddleware, updateUser);


// USER auth route
Router.post('/login', userLogin);
Router.post('/register', userRegister);


// export Default Router
export default Router;