import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { v4 as uuid } from 'uuid';

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

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;

export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
paytmParams['EMAIL'] = 'a@b.com';
paytmParams['MOBILE_NO'] = '9638521470';