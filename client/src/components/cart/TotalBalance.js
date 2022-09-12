import React from "react";
import { Box, Typography, styled } from "@mui/material";

const HeadingBox = styled(Box)`
    padding: 15px 20px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
    color: #878787;
`;

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;

    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    };

    & > h6 {
        padding: 10px 0;
        margin-bottom: 20px;
        font-weight: 600;
        border-top: 1px solid #f0f0f0;
        border-bottom: 1px solid #f0f0f0;
    };
`;

const Price = styled(Box)`
    float: right;
`;

const Discount = styled(Typography)`
    color: green;
    font-weight: 500;
`;

const TotalBalance = ({ cartSize, price, discount }) => {
    
    return(
        <Box>

            <HeadingBox>
                <Heading>PRICE DETAILS</Heading>
            </HeadingBox>

            <Container>
                <Typography>Price ({cartSize} items)
                    <Price component='span'>₹{price}</Price>
                </Typography>
                <Typography>Discount
                    <Price component='span'>-₹{discount}</Price>
                </Typography>
                <Typography>Delivery Charges
                    <Price component='span'>₹40</Price>
                </Typography>
                <Typography variant="h6">Total Amount
                    <Price component='span'>₹{ price - discount + 40 }</Price>
                </Typography>
                <Discount>You will save ₹{ discount - 40 } on this order!</Discount>
            </Container>
        </Box>
    );
};

export default TotalBalance;