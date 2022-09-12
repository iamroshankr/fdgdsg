import React, { useState } from "react";
import { Box, Typography, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 15px;
`;

const Profile = ({ account, setAccount, drawer, closeDrawer }) => {

    const [open, setOpen] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (evt) => {
        setOpen(evt.currentTarget);
        setMenuOpen(true);
    };

    const handleClose = () => {
        setOpen('');
        setMenuOpen(false);
    };

    const logoutUser = () => {
        setAccount('');
        if(drawer) closeDrawer();
    };

    return (
        <>
            <Box onClick={handleClick}>
                <Box style={{ marginTop: 5, cursor: 'pointer', fontWeight: 600, display: 'flex' }}>
                    {account}
                    { menuOpen ? <ExpandLessIcon fontSize="small" /> : <ExpandMoreIcon fontSize="small" /> }
                </Box>
            </Box>
            <Component anchorEl={open} open={Boolean(open)} onClose={handleClose} >
                <MenuItem onClick={() => { handleClose(); logoutUser(); }}>
                    <PowerSettingsNewIcon color="primary" fontSize="small"/>
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    );
};

export default Profile;