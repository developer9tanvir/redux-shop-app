import Product from "../models/Product.js";
import createError from "./errorController.js";


// get all product
export const getAllProduct = async (req, res, next) => {

    try {
        // get all products
        const  products = await Product.find();
        res.status(200).json(products);
        
    } catch (error) {
        next(error)
        
    }
}


//creact product
export const createProduct = async (req, res, next) => {



    try {

        const Product = await Product.create(req.body);
        if(Product) {
            res.status(200).json({
                message : 'product created successfull'
            });

        }else {
            next(createError(401, 'product created fails'));
            
        }
        
    } catch (error) {
        next(createError(error));
        
    }

}




