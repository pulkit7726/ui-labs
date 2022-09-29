import { Scale } from '@mui/icons-material';
import { Grid, Avatar, Modal, Stack, Box, Typography, Paper } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ProfileBody from './ProfileBody';

// type AvatarProps = {
//     alContent?: string;
//     keepMounted?: boolean;
// }
 
const CssAvatar = ({...props}) => { 
    return (      
        <Grid item xs={12}  
        sx={{ display: 'flex', 
        // justifyContent: 'center',
        justifyContent: props.alContent === 'center' ? 'center' :
        props.alContent === 'right' ? 'right' : 'left',
        backgroundColor: 'white' }}>
    
        <Stack
            direction="row"
            spacing={2}
            sx={{
                marginBottom: '40px',
                marginTop: '-34px',
                transform:  'scale(1.8)',
                marginLeft: props.alContent === 'left' ? '100px' : null,
                marginRight: props.alContent === 'right' ? '100px' : null
            }}>
            <Avatar
                style={{ height: 70, width: 70 }}
                src="https://thumbs.dreamstime.com/z/businessman-vector-icon-avatar-sign-man-business-suit-male-face-flat-design-man-avatars-profile-concept-concept-boss-85517342.jpg"
            />
        </Stack>
    </Grid>
    )
}

// const Body = (props) => {
//     return (
//         <Grid item xs={12}
//             style={{ display: 'flex', 
//             justifyContent: 'center',
//             // justifyContent: props.alContent === 'center' ? 'center' :
//             // props.alContent === 'right' ? 'right' : 'left',
//             backgroundColor: 'white',
//             border: '1px solid' }}>
//             <Box>
//                 <Typography id="modal-modal-description" >
//                     {props.value}
//                 </Typography>
//             </Box>
//         </Grid>
//     )
// }

const Records = ({...props}) => {
    return <div>
        <Paper elevation={5} style={{ margin: '20px', padding: '10px' }}>
            <Header />
            <CssAvatar {...props}/>
            {props.data.map((obj: any, i: any) => {
                return <div key={i}>
                    <ProfileBody value={obj.value} {...props} />
                </div>
            })}
            <Footer {...props}/>
        </Paper>
    </div>
}
type UserProfileProps ={
    buttonColor: string;
}
const UserProfile = ({...props}) => {
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