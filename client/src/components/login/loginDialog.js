import React, { useState, useContext } from 'react';
import { styled, Box, Dialog, TextField, Typography, Button } from "@mui/material";

import { authenticateSignUp, authenticateLogin } from "../../service/api";
import { DataContext } from '../../context/DataProvider';
import { jsx } from '@emotion/react';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    display: flex;
`;

const Image = styled(Box)`
    background: #2874f0 url('https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png') center 85% no-repeat;
    width: 28%;
    padding: 45px 35px;
    & > p {
        color: #ffffff;
    };
    & > h5 {
        color: #ffffff;
        font-weight: 600;
    };
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    font-weight: 600;
    background: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const OtpButton = styled(Button)`
    text-transform: none;
    font-weight: 600;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`;

const CreateAccount = styled(Typography)`
    font-size: 14px;
    color: #2874f0;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const accountInitialValues = {
    login: {
        view: 'login',
        heading: "Login",
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
};

const signUpInitVals = {
    fname: '',
    lname: '',
    username: '',
    email: '',
    phone: '',
    password: ''
};

const loginInitVals = {
    username: '',
    password: ''
};

const LoginDialog = ({ open, setOpen, drawer, closeDrawer }) => {

    const [account, toggleAccount] = useState(accountInitialValues.login)
    const [signUp, setSignUp] = useState(signUpInitVals);
    const [login, setLogin] = useState(loginInitVals);
    const [error, setError] = useState(false);

    const { setAccount } = useContext(DataContext);

    const closeDialog = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
        if(drawer) closeDrawer();
    };

    const handleLoginInputChange = (evt) => {
        setLogin({
            ...login,
            [evt.target.name]: evt.target.value
        });
    };

    const loginUser = async () => {
        let resp = await authenticateLogin(login);
        if(resp.status === 200) {
            closeDialog();
            setAccount(resp.data.data.fname);
            if(drawer) closeDrawer();
        }
        else {
            setError(true);
        }
    };

    const handleSignupInputChange = (evt) => {
        setSignUp({
            ...signUp,
            [evt.target.name]: evt.target.value
        });
    };

    const signUpUser = async () => {
        let resp = await authenticateSignUp(signUp);
        if(!resp) return;
        closeDialog();
        setAccount(signUp.fname);
        if(drawer) closeDrawer();
    };
 
    return(
        <Dialog open={open} onClose={closeDialog} PaperProps={{ sx: {maxWidth: 'unset'} }} >
            <Component>
                <Image>
                    <Typography variant='h5'>{account.heading}</Typography>
                    <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                </Image>
                {
                    account.view === 'login' ?
                    <Wrapper>
                        <TextField variant='standard' type='text' label='Enter Username' name='username' onChange={handleLoginInputChange} />
                        <TextField variant='standard' type='password' label='Enter Password' name='password' onChange={handleLoginInputChange} />
                        
                        {error && <Error>Invalid Username or Password!</Error>}
                        
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                        <LoginButton type='submit' onClick={loginUser}>Login</LoginButton>
                        <Typography style={{textAlign: 'center', color: '#878787'}}>OR</Typography>
                        <OtpButton type='submit'>Request OTP</OtpButton>
                        <CreateAccount onClick={() => toggleAccount(accountInitialValues.signup)}>New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField variant='standard' type='text' label='Enter First Name' name='fname' onChange={handleSignupInputChange} />
                        <TextField variant='standard' type='text' label='Enter Last Name' name='lname' onChange={handleSignupInputChange} />
                        <TextField variant='standard' type='text' label='Enter Username' name='username' onChange={handleSignupInputChange} />
                        <TextField variant='standard' type='email' label='Enter Email' name='email' onChange={handleSignupInputChange} />
                        <TextField variant='standard' type='password' label='Enter Password' name='password' onChange={handleSignupInputChange} />
                        <TextField variant='standard' type='text' label='Enter Mobile Number' name='phone' onChange={handleSignupInputChange} />
                        <LoginButton type='submit' onClick={signUpUser}>Continue</LoginButton>
                    </Wrapper>
                }
                
            </Component>
        </Dialog>
    );
};

export default LoginDialog;