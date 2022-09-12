import React, { useState, useEffect } from 'react';
import { Box, Grid, Button, Typography, styled } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

import { resetCart } from '../../redux/actions/cartActions';
import { payWithPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

import CartItem from './CartItem';
import TotalBalance from './TotalBalance';
import EmptyCart from './EmptyCart';

const Container = styled(Grid)( ({ theme }) => ({
    padding: '30px 100px',

    [theme.breakpoints.down('lg')]: {
        padding: '30px 45px'
    },

    [theme.breakpoints.down('md')]: {
        padding: 15
    }
}));

const LeftComponent = styled(Grid)( ({ theme }) => ({
    paddingRight: 15,

    [theme.breakpoints.down('md')]: {
        marginBottom: 15
    }
}));
    
const Header = styled(Box)`
    padding: 15px 24px;
`;

const ButtonWrapper = styled(Box)`
    display: flex;
    justify-content: end;
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
`;

const OrderButton = styled(Button)`
    display: flex;
    margin-left: 15px;
    color: #fff;
    background: #fb641b;
    width: 250px;
    height: 51px;
    border-radius: 2px;
`;

const ResetButton = styled(Button)`
    display: flex;
    color: #fff;
    background: #FF4433;
    width: 250px;
    height: 51px;
    border-radius: 2px;
`;

const Cart = () => {

    const dispatch = useDispatch();

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [cartSize, setCartSize] = useState(0);

    const { cartItems } = useSelector( state => state.cart);

    const emptyCart = () => {
        dispatch(resetCart());
    };

    const buyNow = async () => {

        const resp = await payWithPaytm({ amount: (price-discount+40).toString(), email: 'a@b.com' });

        const information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: resp
        };

        post(information);

    };

    useEffect( () => {

        totalAmount();
        if(cartItems) {
            setCartSize(cartItems.length);
        }
        else {
            setCartSize(0);
        }

    }, [cartItems])

    const totalAmount = () => {

        let price = 0, disc = 0;

        cartItems.map( item => {
            price += item.price.mrp;
            disc += (item.price.mrp - item.price.cost);
        });

        setPrice(price);
        setDiscount(disc);

    };

    return (
        <>
            {
                cartItems.length ?
                    <Container container>

                        <LeftComponent item lg={9} md={9} sm={12} xs={12}>

                            <Header style={{background: '#fff'}}>
                                <Typography>My Cart ({cartItems.length})</Typography>
                            </Header>

                            {
                                cartItems.map( item => (
                                    <CartItem item={item} />
                                ))
                            }

                            <ButtonWrapper>
                                <ResetButton variant='contained' onClick={emptyCart} >Remove All</ResetButton>
                                <OrderButton variant='contained' onClick={buyNow} >Place Order</OrderButton>
                            </ButtonWrapper>

                        </LeftComponent>

                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBalance cartSize={cartSize} price={price} discount={discount} />
                        </Grid>

                    </Container>
                :
                    <EmptyCart />
            }
        </>
    );
};

export default Cart;