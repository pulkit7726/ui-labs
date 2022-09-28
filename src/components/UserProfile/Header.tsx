import React from 'react';
import {
  Avatar,
  Box,
  Grid,
  Stack,
  styled,
  Typography
} from '@mui/material';
import { HeaderProps } from './UserProfileInterface';

const StyledAvtar = styled(Avatar)(({ theme }) => ({
  width: '100px',
  height: '100px',

}));

const Header = ({
  userId,
  userName,
  email,
  departmentTitle,
  designationTitle,
}: HeaderProps) => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100px',
          backgroundColor: 'cadetblue',
        }}>
      </Box>
    </>
  )
}

export default Header