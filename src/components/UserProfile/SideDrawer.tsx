import React, { forwardRef } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import styled from '@emotion/styled';
import { Dialog, DialogContent, DialogTitle, IconButton, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import CloseIcon from "@mui/icons-material/Close";


const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {  
      backgroundColor: 'white',
      width: '400px',
    },
    
    display: 'flex',
    justifyContent: 'end',
}));

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction='left' ref={ref} {...props} />;
  });
  

type SideDrawerProps = {
    children?: any; 
    title?: any;
    open?: any;
    handleClose?: any; 
    className?: any; 
} 

function SideDrawer({ 
    children, 
    title, 
    open, 
    handleClose, 
    className 
}: SideDrawerProps) {
    
 
  return (
    <div>
      <StyledDialog
        fullScreen
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle className='modal-title'>
          <div className="form-title">{title}</div>
          <IconButton
            edge='start'
            onClick={handleClose}
            aria-label='close'
            className='icon-close'
            size='large'
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </StyledDialog>
    </div>
  );
};

export default SideDrawer;