import React, { useState, useContext } from 'react';
import { Box, Typography, Button, Badge, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginDialog from '../login/loginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)( ({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',

    '& > div, & > p, & > button': {
        marginRight: '40px',
        fontSize: '16px',
        alignItems: 'center'
    },

    [theme.breakpoints.down('md')]: {
        display: 'block',

        '& > div, & > p, & > button': {
            marginBottom: 10,
        }
    
    },

    [theme.breakpoints.down('lg')]: {
        '& > div, & > p, & > button': {
            marginRight: '10px'
        }
    }

}));

const Container = styled(Link)( ({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    marginTop: '2px'

    // [theme.breakpoints.down('md')]: {
    //     display: 'block'
    // }
}));

const LoginButton = styled(Button)( ({ theme }) => ({
    color: '#2874f0',
    background: '#fff',
    textTransform: 'none',
    padding: '5px 40px',
    borderRadius: 2,
    boxShadow: 'none',
    fontWeight: 600,
    height: 32,

    [theme.breakpoints.down('md')]: {
        color: '#fff',
        background: '#2874f0'
    }
}));

const CustomButtons = () => {

    const [open, setOpen] = useState(false); 

    const { account, setAccount } = useContext(DataContext);

    const { cartItems } = useSelector( state => state.cart );

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

            <Container to='/cart'>

                <Badge badgeContent={cartItems.length} color='secondary' >
                    <ShoppingCart />
                </Badge>
                
                <Typography style={{marginLeft: 10}}>Cart</Typography>

            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    );
}

export default CustomButtons;