import React, { useEffect } from "react";  
import { styled, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
// these are custom hooks used for dispatching an action to call a reducer and 
// access the state from the redux store respectively.
// redux = front-end database

import NavBar from "./NavBar"; 
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import { getProducts } from "../../redux/actions/productActions";

const Component = styled(Box)`
    padding: 15px 10px;
    background: #f1f3f6;
`;

const Home = () => {

    const { products } = useSelector( state => state.getProducts );

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
    

    return(
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <Slide products={products} title="Discounts for You" timer={false} />
                <Slide products={products} title="Suggested Items" timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />
                <MidSection />
                <Slide products={products} title="Recommended Items" timer={false} />
                <Slide products={products} title="Trending Offers" timer={false} />
                <Slide products={products} title="Season's Top Picks" timer={false} />
                <Slide products={products} title="Top Deals on Accessories" timer={false} />
            </Component>
        </>
    );
};

export default Home;