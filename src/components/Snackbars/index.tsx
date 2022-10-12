import React, { useCallback } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { AlertTitle, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import Fade from '@mui/material/Fade';
import Slide, { SlideProps } from '@mui/material/Slide';
import { SnackbarProvider, useSnackbar } from 'notistack';
import Grow, { GrowProps } from '@mui/material/Grow';

type SnackbarProps = {
  /** open is a state  */
  open: boolean;
  /** To change the type of Notification */
  color?: 'error' | 'info' | 'success' | 'warning';
  /** To change the type of variant */
  variant?: 'filled' | 'outlined' | 'standard';
  /** To display the message */
  message?: string;
  /** To change the type of Notistack */
  notistackVariant?: 'error' | 'info' | 'success' | 'warning';
  /** To display the title */
  title?: string;
  /** If Basic is true basic notification is display else Customize */
  basic?: boolean;
  notistack?: boolean;
  /** To change the number of Notification */
  maxsnack?: number;
  /** To change the direction of slide */
  slideDirection?: 'down' | 'left' | 'right' | 'up';
  /** The number of milliseconds to wait before dismissing after user interaction. */
  autoHideDuration?: number;
  /** Can Choose any type of transition */
  transition?: 'slide' | 'grow' | 'fade';
  /** The anchor of the Snackbar. On smaller screens, the component grows to occupy all the available width, the horizontal alignment is ignored. */
  position?: {
    horizontal: 'center' | 'left' | 'right';
    vertical: 'bottom' | 'top';
  };
  /** callback function which fires when we click on cross icon inside snackbar */
  handleClose: () => void;
  /** show undo button in snackbar */
  showUndo?: boolean;
  /** callback function for undo button */
  handleUndo?: () => void;
};

function GrowTransition(props: GrowProps) {
  return <Grow {...props} />;
}

export function SnackBar({
  color,
  open,
  variant,
  message,
  maxsnack,
  slideDirection,
  title,
  basic,
  notistackVariant,
  notistack,
  autoHideDuration,
  position,
  transition,
  handleClose,
  showUndo,
  handleUndo,
}: SnackbarProps) {
  const SlideTransitionCallback = useCallback(SlideTransition, [slideDirection]);

  function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction={slideDirection} />;
  }

  const action = (
    <>
      {
        showUndo && (
        <Button color="secondary" size="small" onClick={handleUndo}>
          UNDO
        </Button>
        )
      }
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  function NotiStackComp() {
    const { enqueueSnackbar } = useSnackbar();

    const handleNotisClick = (variant: any) => !enqueueSnackbar(`${message}`, { variant });

    return (
      <>
        {open && handleNotisClick(notistackVariant)}
      </>
    );
  }

  return (
    <Stack spacing={2} sx={{ width: '50px' }}>
      {basic && (
      <Snackbar
        open={open}
        message={message}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        action={action}
      />
      )}

      {transition && (
      <Snackbar
        open={open}
        message={message}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
        action={action}
        TransitionComponent={transition === 'slide' ? SlideTransitionCallback : transition === 'grow' ? GrowTransition : Fade}
      />
      )}

      {notistack && (
      <SnackbarProvider
        maxSnack={maxsnack}
        autoHideDuration={autoHideDuration}
      >
        <NotiStackComp />
      </SnackbarProvider>
      )}
      {!basic && !transition && !notistack && (
      <Snackbar
        onClose={handleClose}
        open={open}
        action={action}
        autoHideDuration={autoHideDuration}
        anchorOrigin={{
          horizontal: position?.horizontal || 'left',
          vertical: position?.vertical || 'bottom',
        }}
      >
        <Alert
          onClose={handleClose}
          color={color}
          severity={color}
          variant={variant}
          sx={{ width: '100%' }}
        >
          <AlertTitle>
            {' '}
            {title}
          </AlertTitle>
          {message}
        </Alert>
      </Snackbar>
      )}
    </Stack>
  );
}

SnackBar.defaultProps = {
  autoHideDuration: 3000,
  maxsnack: 4,
  slideDirection: 'right',
};
