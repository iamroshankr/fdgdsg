import express from "express";
import { userSignUp, userLogin } from "../controller/userController.js";
import { getProducts, getProductById } from "../controller/productController.js";

const Router = express.Router();

Router.post('/signup', userSignUp);
Router.post('/login', userLogin);

Router.get('/products', getProducts);
Router.get('/product/:id', getProductById);

export default Router;