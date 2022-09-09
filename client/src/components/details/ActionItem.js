import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const Image = styled('img')({
    padding: '15px'
});

const StyledButton = styled(Button)`
    width: 48%;
    height: 50px;
    border-radius: 2px;
    ${'' /* margin-top: 5px; */}
`;

const LeftContainer = styled(Box)`
    min-width: 40%;
    padding: 40px 0 0 80px;
`; 

const ActionItem = ({ product }) => {
    
    return(
        <LeftContainer>
            <Box style={{width: '90%', padding: '15px 20px', border: '1px solid #f0f0f0'}}>
                <Image src={product.detailUrl} alt='image' width='100%' />
            </Box>
            <StyledButton variant="contained" style={{marginRight: 10, background: '#ff9f00'}}><ShoppingCartIcon /> Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{background: '#fb541b'}}><FlashOnIcon /> Buy Now</StyledButton>
        </LeftContainer>
    );
};

export default ActionItem;