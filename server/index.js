import express from 'express';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import DefaultData from './default.js';

const app = express();

dotenv.config(); //initializing the dotenv file

const port = 8000;

const USER = process.env.DB_USER;
const PWD = process.env.DB_PWD;

Connection(USER, PWD);

app.listen(port, () => {
    console.log("Server is up and running on port ", port);
});

DefaultData();