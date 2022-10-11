import React from 'react';
import {
  Avatar,
  Grid,
  Stack,
  styled,
} from '@mui/material';

const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: ${({ display }) => display === 'basic' ? 'flex-start' : 'center'}
`;

const StyledStack = styled(Stack)`
  margin-bottom: ${({ display }) => display === 'center' ? '40px' : null};
  margin-top: ${({ display }) => display === 'center' ? '-34px' : null};
  transform: ${({ display }) => display === 'center' ? 'scale(1.8)' : null};
`;
const StyledAvatar = styled(Avatar)`
  height: ${({ imgProps }) => imgProps === 'center' ? '70px' : imgProps === 'basic' ? '100px' : '200px'};
  width: ${({ imgProps }) => imgProps === 'center' ? '70px' : imgProps === 'basic' ? '100px' : '200px'};
  border-radius: ${({ imgProps }) => imgProps === 'center' ? null : '0px'};
`;

const CssAvatar = ({ ...props }) => {
  return (
    <StyledGrid item xs={12} display={props.display}>
      <StyledStack
        spacing={2}
        title={props.avatarImage.avatarTitle}
        display={props.display}
      >
        <StyledAvatar
          src={props.avatarImage.avatarImg}
          imgProps={props.display}
        />
      </StyledStack>
    </StyledGrid>
  )
}

export default CssAvatar;
