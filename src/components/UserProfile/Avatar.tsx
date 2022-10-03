import React from 'react';
import {
  Avatar,
  Grid,
  Stack,
} from '@mui/material';

const CssAvatar = ({ ...props }) => {
  return (
    <Grid item xs={12}
      sx={{
        display: 'flex',
        justifyContent: props.display === 'basic' ? 'flex-start' : 'center',
      }}>

      <Stack
        spacing={2}
        title={props.avatarImage.avatarTitle}
        sx={{
          marginBottom: props.display === 'center' ? '40px' : null,
          marginTop: props.display === 'center' ? '-34px' : null,
          transform: props.display === 'center' ? 'scale(1.8)' : null,
        }}>

        <Avatar

          src={props.avatarImage.avatarImg}
          sx={{
            height: props.display === 'center' ? 70
              : props.display === 'basic' ? 100
                : 200,
            width: props.display === 'center' ? 70
              : props.display === 'basic' ? 100
                : 200,
            borderRadius: props.display === 'center' ? null : 0,

          }} />

      </Stack>
    </Grid>
  )
}

export default CssAvatar;
