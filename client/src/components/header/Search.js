import React, { useState, useEffect } from 'react';

import { InputBase, Box, List, ListItem, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getProducts } from '../../redux/actions/productActions';

const SearchContainer = styled(Box) ( ({ theme }) => ({
    background: '#fff',
    width: '38%',
    borderRadius: 2,
    marginLeft: 10,
    marginRight: 20,

    [theme.breakpoints.down('lg')]: {
        width: '30%'
    },

    [theme.breakpoints.down('md')]: {
        marginLeft: 35,
        width: '50%'
    }
}));

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconBox = styled(Box) ( () => ({
    color: 'blue',
    padding: 5,
    display: 'flex'
}));

const ListWrapper = styled(List) ( () => ({
    position: 'absolute',
    background: '#FFFFFF',
    color: '#000',
    marginTop: 36
}));

const Search = () => {

    const [searchText, setSearchText] = useState('');

    const { products } = useSelector( state => state.getProducts);

    const dispatch = useDispatch();
    
    useEffect( () => {
        dispatch(getProducts)
    }), [];

    const getSearchText = (evt) => {
        setSearchText(evt.target.value);
    };

    const matchingProds = products.filter(prod => prod.title.longTitle.toLowerCase().includes(searchText.toLowerCase()));

    return(
        <SearchContainer style={{display: 'flex'}}>

            <InputSearchBase 
                placeholder='Search for products, brands and more' 
                onChange={getSearchText}
                value={searchText}
            />

            <SearchIconBox>
                <SearchIcon />
            </SearchIconBox>

            {
                searchText && 
                    <ListWrapper>
                        {
                            matchingProds.map( p => (
                                <ListItem>
                                    <Link 
                                        to={`/product/${p.id}`}
                                        onClick={ () => setSearchText('') }
                                        style={{textDecoration: 'none', color: 'inherit'}}
                                    >
                                        {p.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }

        </SearchContainer>
    );
}

export default Search;