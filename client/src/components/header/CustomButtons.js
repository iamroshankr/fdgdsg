import React, { useState, useContext } from 'react';
import { Box, styled, Typography, Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import LoginDialog from '../login/loginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)( ({ theme }) => ({
    display: 'flex',
    marginRight: '3%',
    marginLeft: 'auto',

    '& > div, & > p, & > button': {
        marginRight: '40px',
        fontSize: '16px',
        alignItems: 'center'
    },

    [theme.breakpoints.down('md')]: {
        display: 'block',
    },

    [theme.breakpoints.down('lg')]: {
        '& > div, & > p, & > button': {
            marginRight: '10px'
        }
    }

}));

const Container = styled(Box)( ({ theme }) => ({
    display: 'flex',

    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

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