import React, { useEffect } from "react";  
import { styled, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// these are custom hooks used for dispatching an action to call a reducer and 
// access the state from the redux store respectively.
// redux = front-end database

import NavBar from "./NavBar"; 
import Banner from "./Banner";
import { getProducts } from "../../redux/actions/productActions";

const Component = styled(Box)`
    padding: 15px 10px;
    background: #f1f3f6;
`;

const Home = () => {

    const { products } = useSelector( state => state.getProducts );
    console.log(products);

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
    

    return(
        <>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </>
    );
};

export default Home;