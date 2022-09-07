import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';

const app = express();

dotenv.config(); //initializing the dotenv file

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/', Router);

const port = 8000;

const USER = process.env.DB_USER;
const PWD = process.env.DB_PWD;

Connection(USER, PWD);

app.listen(port, () => {
    console.log("Server is up and running on port ", port);
});

DefaultData();