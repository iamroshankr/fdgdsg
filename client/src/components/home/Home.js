import React, { useEffect } from "react";
import { styled, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import { getProducts } from "../../redux/actions/productActions";
import LoadingSpinner from "../Loading/Loading";

const Component = styled(Box)`
    padding: 15px 10px;
    background: #f1f3f6;
`;

const Home = () => {

    const { loading, products } = useSelector(state => state.getProducts);

    const type1prods = products.filter( prod => prod.category === 'type1');
    const type2prods = products.filter( prod => prod.category === 'type11');

    // console.log(type1prods);
    // console.log(type2prods);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                {
                    loading ?
                        <LoadingSpinner /> :
                        <>
                            <MidSlide products={type1prods} title="Deal of the Day" timer={true} />
                            <Slide products={type2prods} title="Discounts for You" timer={false} />
                            <Slide products={type1prods} title="Suggested Items" timer={false} />
                            <Slide products={type2prods} title="Top Selection" timer={false} />
                            <MidSection />
                            <Slide products={type1prods} title="Recommended Items" timer={false} />
                            <Slide products={type2prods} title="Trending Offers" timer={false} />
                            <Slide products={type1prods} title="Season's Top Picks" timer={false} />
                            <Slide products={type2prods} title="Top Deals on Accessories" timer={false} />
                        </>
                }
            </Component>
        </>
    );
};

export default Home;