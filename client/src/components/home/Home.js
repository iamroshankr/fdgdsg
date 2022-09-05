import React from "react";  
import NavBar from "./NavBar"; 
import Banner from "./Banner";
import { styled, Box } from '@mui/material';

const Component = styled(Box)`
    padding: 15px 10px;
    background: #f1f3f6;
`;

const Home = () => {
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