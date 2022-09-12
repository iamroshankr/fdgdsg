import { Typography, Grid, styled } from "@mui/material";

const Component = styled(Grid) ( ({ theme }) => ({
    height: '65vh',
    width: '80%',
    background: '#fff',
    margin: '80px 140px',
    justifyContent: 'center',

    [theme.breakpoints.down('md')]: {
        margin: '80px auto'
    }
}));

const Container = styled(Grid)`
    text-align: center;
    padding-top: 70px;
`;

const EmptyCart = () => {

    const cartimg = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    
    return(
        <Component container>
            <Container item lg={3} md={3} sm={12} xs={12} >
                <img src={cartimg} alt='empty-cart' style={{width: '40%'}} />
                <Typography>Your Cart is Empty</Typography>
                <Typography>Add Items to it now</Typography>
            </Container>
        </Component>
    );
};

export default EmptyCart;