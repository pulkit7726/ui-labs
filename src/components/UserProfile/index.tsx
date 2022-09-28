import { Grid, Avatar, Modal, Stack, Box, Typography, Paper } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

type AvatarProps = {
    alContent?: 'center';
    keepMounted?: boolean;
}

const CssAvatar = ({alContent, keepMounted}: AvatarProps) => {
    console.log(alContent)
    return (      
        <Grid item xs={12}  
        sx={{ display: 'flex', 
        justifyContent: alContent === 'center' ? 'center' : 'left' , 
        backgroundColor: 'white' }}>
    
        <Stack
            direction="row"
            spacing={2}
            sx={{
                marginBottom: '40px',
                marginTop: '-34px',
                transform: 'scale(1.8)'
            }}>
            <Avatar
                style={{ height: 70, width: 70 }}
                src="https://thumbs.dreamstime.com/z/businessman-vector-icon-avatar-sign-man-business-suit-male-face-flat-design-man-avatars-profile-concept-concept-boss-85517342.jpg"
            />
        </Stack>
    </Grid>
    )
}

const Body = (props) => {
    return (
        <Grid item xs={12}
            style={{ display: 'flex', 
            justifyContent: 'center',
            backgroundColor: 'white' }}>
            <Box>
                <Typography id="modal-modal-description" >
                    {props.value}
                </Typography>
            </Box>
        </Grid>
    )
}

const Records = (props) => {
    return <div>
        <Paper elevation={5} style={{ margin: '20px', padding: '10px' }}>
            <Header />
            <CssAvatar />
            {props.data.map((obj, i) => {
                return <div key={i}>
                    <Body value={obj.value} orientation={obj.orientation} />
                </div>
            })}
            <Footer />
        </Paper>
    </div>
}

const UserProfile = ({ ...props }) => {
    return (
        <div>
            {props.display === 'modal' &&
                <Modal open={true}>
                        <Records {...props} />
                </Modal>}
        </div>
    )
}

export default UserProfile;