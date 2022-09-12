import React, { useState, useContext } from 'react';
import { Box, Typography, Button, Badge, Menu, MenuItem, ListItemText, ListItemIcon, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import LoginDialog from '../login/loginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import MovingIcon from '@mui/icons-material/Moving';
import DownloadIcon from '@mui/icons-material/Download';

const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 3% 0 auto',

    '& > p': {
        fontWeight: 600
    },

    '& > div, & > p, & > button': {
        marginRight: '40px',
        fontSize: '16px',
        alignItems: 'center',
        cursor: 'pointer'
    },

    [theme.breakpoints.down('md')]: {
        display: 'block',

        '& > div, & > p, & > button': {
            marginBottom: 10,
        }

    },

    [theme.breakpoints.down('lg')]: {
        '& > div, & > p, & > button': {
            marginRight: '10px'
        }
    }

}));

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    marginTop: '2px'

    // [theme.breakpoints.down('md')]: {
    //     display: 'block'
    // }
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#2874f0',
    background: '#fff',
    textTransform: 'none',
    padding: '5px 40px',
    borderRadius: 2,
    boxShadow: 'none',
    fontWeight: 600,
    height: 32,

    [theme.breakpoints.down('md')]: {
        color: '#fff',
        background: '#2874f0'
    }
}));

const MoreOptions = styled(Menu)`
    margin-top: 5px;
`;

const MoreOptionsItemText = styled(ListItemText)`
    font-size: 14px;
    border-bottom: 1px solid #f2f2f2;
`;

const CustomButtons = ({ drawer, closeDrawer }) => {

    const [open, setOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);

    const [menuOpen, setMenuOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext);

    const { cartItems } = useSelector(state => state.cart);

    const handleClick = () => {
        setOpen(true);
    };

    const handleMoreOpen = (evt) => {
        setMoreOpen(evt.currentTarget);
        setMenuOpen(true);
    };

    const handleMoreClose = () => {
        setMoreOpen('');
        setMenuOpen(false);
    };

    return (
        <Wrapper>

            {
                account ? 
                    <Profile account={account} setAccount={setAccount} drawer={drawer} closeDrawer={closeDrawer} /> 
                : 
                    <LoginButton onClick={handleClick} variant="contained">Login</LoginButton>
            }

            <Typography 
                style={{ marginTop: 3, width: 135 }}
                onClick={() => { if(drawer) closeDrawer(); }}
            >
                Beome a Seller
            </Typography>

            <Box onClick={handleMoreOpen} style={{ cursor: 'pointer', fontWeight: 600, display: 'flex' }} >
                More
                {menuOpen ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" />}
            </Box>

            <MoreOptions anchorEl={moreOpen} open={Boolean(moreOpen)} onClose={handleMoreClose} >

                <MenuItem onClick={() => { handleMoreClose(); if(drawer) closeDrawer(); }}>
                    <ListItemIcon>
                        <NotificationsIcon fontSize="small" color='primary'/>
                    </ListItemIcon>
                    <MoreOptionsItemText>Notification Preferences</MoreOptionsItemText>
                </MenuItem>

                <MenuItem onClick={() => { handleMoreClose(); if(drawer) closeDrawer(); }}>
                    <ListItemIcon>
                        <LiveHelpIcon fontSize="small" color='primary'/>
                    </ListItemIcon>
                    <MoreOptionsItemText>24x7 Customer Care</MoreOptionsItemText>
                </MenuItem>

                <MenuItem onClick={() => { handleMoreClose(); if(drawer) closeDrawer(); }}>
                    <ListItemIcon>
                        <MovingIcon fontSize="small" color='primary'/>
                    </ListItemIcon>
                    <MoreOptionsItemText>Advertise</MoreOptionsItemText>
                </MenuItem>

                <MenuItem onClick={() => { handleMoreClose(); if(drawer) closeDrawer(); }} >
                    <ListItemIcon>
                        <DownloadIcon fontSize="small" color='primary'/>
                    </ListItemIcon>
                    <MoreOptionsItemText style={{ border: 'none' }}>Download App</MoreOptionsItemText>
                </MenuItem>

            </MoreOptions>

            <Container to='/cart' onClick={() => { if(drawer) closeDrawer(); if(drawer) closeDrawer(); }} >

                <Badge badgeContent={cartItems.length} color='secondary' >
                    <ShoppingCart />
                </Badge>

                <Typography style={{ marginLeft: 10 }}>Cart</Typography>

            </Container>
            <LoginDialog open={open} setOpen={setOpen} drawer={drawer} closeDrawer={closeDrawer} />
        </Wrapper>
    );
}

export default CustomButtons;