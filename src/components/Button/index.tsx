import React from 'react';
import { memo } from 'react';
import Button from '@mui/material/Button';

export const ButtonComponent = () => {
  return (
    <Button>Click me!</Button>
  )
};

export default memo(ButtonComponent);