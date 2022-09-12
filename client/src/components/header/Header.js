import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem, styled } from '@mui/material';
import { Link } from "react-router-dom";

import Search from './Search';
import CustomButtons from './CustomButtons';
import MenuIcon from '@mui/icons-material/Menu';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Link) ( ({ theme }) => ({
    marginLeft: '12%',
    lineHeight: 0,
    textDecoration: 'none',
    color: 'inherit',
    width: 100,

    [theme.breakpoints.down('lg')]: {
        marginLeft: '8%' 
    }
}));

const SubHeading = styled(Typography)`
    font-size: 11px;
    font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});

const CustomButtonBox = styled(Box)(({ theme }) => ({
    marginRight: '5%',
    marginLeft: 'auto',

    [theme.breakpoints.down('lg')]: {
        marginRight: 'auto',
        marginLeft: 10 
    },

    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));

const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const openDrawer = () => {
        setOpen(true);
    };

    const closeDrawer = () => {
        setOpen(false);
    };

    const renderList = () => {

        return (
            <Box>
                <List>
                    <ListItem button>
                        <CustomButtons drawer={true} closeDrawer={closeDrawer} />
                    </ListItem>
                </List>
            </Box>
        );
    };

    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>

                <MenuButton color='inherit' onClick={openDrawer}>
                    <MenuIcon />
                </MenuButton>

                <Drawer open={open} onClose={closeDrawer} >
                    {renderList()}
                </Drawer>

                <Component to='/'>
                    <img src={logoURL} alt='logo' style={{ width: 75 }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Explore &nbsp;
                            <Box component='span' style={{ color: '#FFE500' }}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt='sub-logo' />
                    </Box>
                </Component>

                <Search />

                <CustomButtonBox>
                    <CustomButtons drawer={false} closeDrawer={closeDrawer} />
                </CustomButtonBox>

            </Toolbar>
        </StyledHeader>
    );
};
export default Header;