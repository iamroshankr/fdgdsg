import https from 'https';
import formidable from 'formidable';

import paytmchecksum from "../paytm/PaytmChecksum.js";
import { paytmMerchantKey, paytmParams } from "../index.js";

export const addPaymentGateway = async (req, res) => {
    try {
        
        // const updatedParams = {
        //     ...paytmParams,
        //     'TXN_AMOUNT': req.body.amount
        // };

        const paytmChecksum =  await paytmchecksum.generateSignature( paytmParams, paytmMerchantKey );

        const params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmChecksum
        };

        res.status(200).json(params);
    }
    catch(err) {
        res.status(500).json({message: err.message});
    }
};

export const paytmResponse = async (req, res) => {

    const form = new formidable.IncomingForm();
    let paytmChecksum = req.body.CHECKSUMHASH;
    delete req.body.CHECKSUMHASH;

    let isVerifySignature = paytmchecksum.verifySignature( req.body, paytmMerchantKey, paytmChecksum );
    if (isVerifySignature) {

        let paytmParams = {};
        paytmParams['MID'] = req.body.MID;
        paytmParams['ORDERID'] = req.body.ORDERID;

        paytmchecksum.generateSignature( paytmParams, paytmMerchantKey ).then( (checksum) => {
            
            paytmParams['CHECKSUMHASH'] = checksum;
            let post_data = JSON.stringify(paytmParams);

            let options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };

            let resp = '';
            let post_req = https.request(options, (post_res) => {

                post_res.on('data', (chunk) => {
                    resp += chunk;
                });

                post_res.on('end', () => {
                    let result = JSON.parse(resp);
                    res.redirect('http://localhost:3000/');
                });
            });

            post_req.write(post_data);
            post_req.end();

        });

    }
    else {
        console.log('CheckSum Mismatched');
    }

};