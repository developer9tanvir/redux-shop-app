import express from 'express';
import {  getAllProduct, createProduct } from '../controllers/productControllers.js';



// init Route
const Router = express.Router();


// Product Route
Router.get('/' , getAllProduct);
Router.post('/' , createProduct);






// export Default Router
export default Router;