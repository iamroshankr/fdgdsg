import { useState, useEffect } from "react";
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from '../../redux/actions/cartActions';
import { payWithPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

const Image = styled('img')({
    padding: '15px',
    width: '95%'
});

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    height: 50,
    borderRadius: 2,
    marginTop: 10,

    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },

    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }
}));

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',

    [theme.breakpoints.down('lg')]: {
        padding: '20px 0 0 40px'
    }
}));

const ActionItem = ({ product }) => {

    const [qty, setQty] = useState(1);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(product.id, qty));
        navigate('/cart');
    };

    const buyNow = async () => {

        const resp = await payWithPaytm({ amount: (product.price.cost+40).toString(), email: 'a@b.com' });

        const information = {
            action: 'https://securegw-stage.paytm.in/order/process',
            params: resp
        };

        post(information);

    };
    
    return(
        <LeftContainer>
            <Box style={{width: '90%', padding: '15px 20px', border: '1px solid #f0f0f0'}}>
                <Image src={product.detailUrl} alt='image' />
            </Box>
            <StyledButton variant="contained" onClick={addItemToCart} style={{marginRight: 10, background: '#ff9f00'}}><ShoppingCartIcon /> Add to Cart</StyledButton>
            <StyledButton variant="contained" onClick={buyNow} style={{background: '#fb541b'}}><FlashOnIcon /> Buy Now</StyledButton>
        </LeftContainer>
    );
};

export default ActionItem;