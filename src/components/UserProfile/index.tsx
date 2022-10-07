import {
  Box, Drawer, Grid, Paper, Typography, Button,
} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import UserProfileButton from './UserProfileButton';
import CssAvatar from './Avatar';
import Body from './Body';

const StyledBox = styled(Box)(({ theme }) => ({
  width: '235px',
  '@media (min-width:600px)': {
    width: '300px',
  },
}));

const CssBox = styled(Box)(({ theme }) => ({
  width: '100%',
  '@media (min-width:850px)': {
    width: '60%',
  },
}));

const CustomMainBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'lightgray',
  height: '30px',
  display: 'flex',
  alignItems: 'center',

}));

const CustomParentBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'lightgray',
  height: '300px',
  width: '300px',
  display: 'flex',
  alignItems: 'center',
}));

const CenterProfileBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100px',
  backgroundColor: 'cadetblue',
}));

type UserProfileProps = {
  alContent?: string;
  myAccountButtonColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning';
  myAccountButtonSize?: 'small' | 'medium' | 'large';
  myAccountButtonVariant?: 'contained' | 'outlined' | 'text';
  logoutButtonColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning';
  logoutButtonSize?: 'small' | 'medium' | 'large';
  logoutButtonVariant?: 'contained' | 'outlined' | 'text';
  display?: string;
  avatarImage?: { avatarImg: string, avatarTitle: string };
  data?: Array<Object>;
  profileHeading?: string;
  width?: string;
  fontSize?: number;
};

const BasicProfile = ({ ...props }) => (
  <Paper
    elevation={3}
    style={{ margin: '10px', padding: '10px' }}
  >
    <Box>
      <CssAvatar {...props} />
      {props.data.map((obj) => (
        <Grid item xs={12} key={obj.id}>
          <Typography>{obj.userName}</Typography>
          <Typography>{obj.email}</Typography>
        </Grid>
      ))}
      <Body {...props} />
      <UserProfileButton />
    </Box>
  </Paper>
);

const CenterProfile = ({ ...props }) => (
  <Paper elevation={5} style={{ margin: '10px', padding: '10px' }}>
    <CenterProfileBox />
    <CssAvatar {...props} />
    <Body {...props} />
    <UserProfileButton {...props} />
  </Paper>
);

const Custom = ({ ...props }) => (
  <>
    <CustomMainBox data-testid="custom-main-box">
      <Typography style={{ marginLeft: '10px' }}>
        {props.profileHeading}
      </Typography>
    </CustomMainBox>
    <Grid container marginTop={5}>
      <CustomParentBox>
        <CssAvatar {...props} />
      </CustomParentBox>
      <CssBox>
        <Body {...props} />
      </CssBox>
    </Grid>
    <UserProfileButton />
  </>
);

const SideDrawer = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button
        color="primary"
        variant="contained"
        size="medium"
        onClick={() => setOpen(!open)}
      >
        Open Drawer
      </Button>
      <Drawer
        anchor={props.alContent}
        open={open}
        onClose={() => setOpen(false)}
      >
        <StyledBox p={2}>
          <CssAvatar {...props} />
          <Body {...props} />
          <UserProfileButton />
        </StyledBox>
      </Drawer>
    </>
  );
};

const UserProfile = ({ ...props }: UserProfileProps) => (
  <div className="user-profile-class" data-testid="user-profile">
    {props.display === 'center' ? <CenterProfile {...props} />
      : props.display === 'drawer' ? <SideDrawer {...props} />
        : props.display === 'basic' ? <BasicProfile {...props} />
          : <Custom {...props} />}
  </div>
);

export default UserProfile;
