import React, { useEffect } from 'react';
import { Box, Grid, styled } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; //used to extract params from the url

import { getProductDetails } from '../../redux/actions/productActions';
import ActionItem from './ActionItem';
import LoadingSpinner from '../Loading/Loading';
import ProductDetail from './ProductDetail';

const Component = styled(Box)`
    background: #F2F2F2;
    margin-top: 55px;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',

    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding-left: 20px;
`;

const DetailView = () => {

    const { loading, product } = useSelector(state => state.getProductDetails);

    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {

        if (product && id !== product.id)
            dispatch(getProductDetails(id));

    }, [dispatch, id, loading, product]);

    const renderDetails = () => {

        if (product && Object.keys(product).length) {
            return (
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>

                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetail product={product} />
                    </RightContainer>
                </Container>
            );
        }
        else {
            return <></>;
        }
    };

    return (
        <Component>
            {loading ? <LoadingSpinner /> : renderDetails()}
        </Component>
    );
};

export default DetailView;