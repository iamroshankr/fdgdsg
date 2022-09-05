import React from 'react';
import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`;

const SearchIconBox = styled(Box)`
    color: blue;
    padding: 5px;
    display: flex;
`;

const Search = () => {
    return(
        <SearchContainer style={{display: 'flex'}}>
            <InputSearchBase placeholder='Search for products, brands and more' />
            <SearchIconBox>
                <SearchIcon />
            </SearchIconBox>
        </SearchContainer>
    );
}

export default Search;