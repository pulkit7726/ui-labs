import React from 'react';
import {
  Box,
  Grid,
  Typography,
} from '@mui/material';

const ProfileBody = ({ ...props }) => {
  return (
    <>
      <Grid container style={{
        display: 'flex',
        // justifyContent: 'center',
        justifyContent: props.alContent === 'center' ? 'center' :
          props.alContent === 'right' ? 'right' : 'left',
          backgroundColor: 'white',
      }}>
        {props.alContent === 'left' ? (
          <Grid item xs={3}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <Typography id="modal-modal-description" >
                {props.value}
              </Typography>
            </Box>
          </Grid>
        ) : props.alContent === 'center' ? (
          <Grid item xs={3}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <Typography id="modal-modal-description" >
                {props.value}
              </Typography>
            </Box>
          </Grid>
        ) : (<Grid item xs={3}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Typography id="modal-modal-description" >
              {props.value}
            </Typography>
          </Box>
        </Grid>)}

      </Grid>
    </>
  )
}

export default ProfileBody;
