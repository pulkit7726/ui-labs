import React from 'react';
import { Box, Button, styled } from '@mui/material';

const CssBox = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  marginTop: '20px',
}));

const UserProfileButton = ({ ...props }) => (
  <CssBox
    sx={{
      justifyContent: props.display || 'left',
    }}
  >
    <Button
      color={props.myAccountButtonColor || 'primary'}
      variant={props.myAccountButtonVariant || 'contained'}
      size={props.myAccountButtonSize || 'medium'}
    >
      {props.myAccount}
    </Button>
    <Button
      style={{ marginLeft: '10px' }}
      color={props.logoutButtonColor || 'secondary'}
      variant={props.logoutButtonVariant || 'outlined'}
      size={props.logoutButtonSize || 'medium'}
    >
      {props.logout}
    </Button>
  </CssBox>
);

export default UserProfileButton;
