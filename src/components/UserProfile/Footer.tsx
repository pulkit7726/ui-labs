import React from 'react';
import {
  Box,
  Button,
} from '@mui/material';


const Footer = ({ ...props }) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          justifyContent: props.display === 'center' ? 'center' :
            props.display === 'right' ? 'right' : 'left',
          display: 'flex',
          marginTop: '20px'
        }}>
        <Button
          color={props.myAccountButtonColor || 'primary'}
          variant={props.myAccountButtonVariant || 'contained'}
          size={props.myAccountButtonSize || 'medium'}
        >
          My Account
        </Button>&nbsp;&nbsp;&nbsp;&nbsp;
        <Button
          color={props.logoutButtonColor || 'secondary'}
          variant={props.logoutButtonVariant || 'outlined'}
          size={props.logoutButtonSize || 'medium'}
        >
          Logout
        </Button>
      </Box>
    </>
  )
}

export default Footer;