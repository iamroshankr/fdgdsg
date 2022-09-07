import React, { useState, useContext } from 'react';
import { Box, styled, Typography, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import LoginDialog from '../login/loginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div {
        margin-right: 40px;
        font-size: 16px;
        align-items: center;
    }
`;

const Container = styled(Box)`
    display: flex;
`;

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`;

const CustomButtons = () => {

    const [open, setOpen] = useState(false); 

    const { account, setAccount } = useContext(DataContext);

    const handleClick = () => {
        setOpen(true);
    };
    
    return(
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> : <LoginButton onClick={handleClick} variant="contained">Login</LoginButton>
            }
            <Typography style={{marginTop: 3, width: 135}}>Beome a Seller</Typography>
            <Typography style={{marginTop: 3}}>More</Typography>

            <Container>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    );
}

export default CustomButtons;