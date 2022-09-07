import axios from "axios";

import * as actionTypes from '../constants/productConstants.js';

const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
    try {
        const { data } =  await axios.get(`${URL}/products`); //data coming from destructured response

        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data })
    }
    catch(err) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAILURE, payload: err.message })
    }
};

//calling dispatch calls the reducer