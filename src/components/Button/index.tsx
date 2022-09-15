import React from 'react';
import { memo, FC } from 'react';
import Button from '@mui/material/Button';

export interface ButtonComponent {
  title?: string;
}
export const ButtonComponent: FC<ButtonComponent> = ({
  title = "Click me !"
}) => {
  return <Button>{title}</Button>;
};

export default memo(ButtonComponent);
