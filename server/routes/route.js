import express from "express";
import { userSignUp, userLogin } from "../controller/userController.js";
import { getProducts } from "../controller/productController.js";

const Router = express.Router();

Router.post('/signup', userSignUp);
Router.post('/login', userLogin);

Router.get('/products', getProducts);

export default Router;