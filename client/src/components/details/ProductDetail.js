import { Box, Typography, Table, TableBody, TableCell, styled, TableRow } from "@mui/material";

import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const SmallText = styled(Box)`
    font-size: 14px;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    };
`;

const Badge = styled(LocalOfferIcon)`
    vertical-align: text-top;
    margin-right: 10px;
    color: #00CC00;
    font-size: 16px;
`;

const EmiIcon = styled(EventAvailableIcon)`
    vertical-align: text-top;
    margin-right: 10px;
    color: #00CC00;
    font-size: 16px;
`;

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;

    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none;
        & > p {
            font-size: 14px;
        };
    };
`;

const ProductDetail = ({ product }) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const supercoin = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);

    return (
        <>
            <Typography>{product.title.longTitle}</Typography>

            <Typography style={{ marginTop: 5, color: '#878787', fontSize: 15 }}>
                8 Ratings & 1 review
                <Box component='span'><img src={fassured} alt='fAssured' style={{ width: 75, marginLeft: 20 }} /></Box>
            </Typography>

            <Typography>
                <Box component='span' style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;
                <Box component='span' style={{ color: '#878787' }}><strike>₹{product.price.mrp}</strike></Box>&nbsp;
                <Box component='span' style={{ color: '#388E3C' }}>{product.price.discount}</Box>
            </Typography>

            <Typography>Available Offers</Typography>

            <SmallText>
                <Typography>
                    <Badge />
                    5% Cashback on Flipkart Axis Bank Card
                    <Box component="span" style={{color: '#2874f0', fontWeight: 600, cursor: 'pointer'}}> T&C</Box>
                </Typography>

                <Typography>
                    <Badge />
                    Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹500*
                    <Box component="span" style={{color: '#2874f0', fontWeight: 600, cursor: 'pointer'}}> Know More</Box>
                </Typography>

                <Typography>
                    <Badge />
                    Buy this product and get upto ₹500 off on Flipkart Furniture
                    <Box component="span" style={{color: '#2874f0', fontWeight: 600, cursor: 'pointer'}}> Know More</Box>
                </Typography>

                <Typography>
                    <Badge />
                    Purchase this product & win a surprise cashback coupon for The Big Billion Days Sale 2022
                    <Box component="span" style={{color: '#2874f0', fontWeight: 600, cursor: 'pointer'}}> Know More</Box>
                </Typography>

                <Typography>
                    <EmiIcon />
                    EMI starting from ₹{Math.floor(product.price.cost/3)}/month
                    <Box component="span" style={{color: '#2874f0', fontWeight: 600, cursor: 'pointer'}}> View Plans</Box>
                </Typography>
            </SmallText>

            <Table>
                <TableBody>

                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery By {deliveryDate.toDateString()} | ₹40</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>None</TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component='span' style={{ color: '#2874f0' }} > SuperComNet </Box>
                            <Typography>GST Invoice Available</Typography>
                            <Typography>View More Sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={supercoin} width={390} alt='supercoins'/>
                        </TableCell>
                    </ColumnText>

                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>

                </TableBody>
            </Table>
        </>
    );
};

export default ProductDetail;
