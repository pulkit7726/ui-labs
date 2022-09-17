import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertTitle, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { SnackbarProvider, useSnackbar } from "notistack";
import Grow from "@mui/material/Grow";

type NotiFicationProps = {
  open?: boolean;
  notistackButton?: any;
  color?: "error" | "info" | "success" | "warning";
  variant?: "filled" | "outlined" | "standard";
  message?: string;
  notistackVariant?: "error" | "info" | "success" | "warning";
  title?: string;
  basic?: boolean;
  notistack?: boolean;
  maxsnack?: number;
  direction?: "down" | "left" | "right" | "up";
  autoHideDuration?: number;
  transition?: "slide" | "grow" | "fade",
  position?: {
    horizontal: "center" | "left" | "right";
    vertical: "bottom" | "top";
  };
};

export const Notification = ({
  color,
  open,
  variant,
  message,
  maxsnack,
  notistackButton,
  direction,
  title,
  basic,
  notistackVariant,
  notistack,
  autoHideDuration,
  position,
  transition,
  ...props
}: NotiFicationProps) => {


  const SlideTransition = ({ ...props }: any) => {
    return <Slide {...props} direction={direction} />;
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const MyButton = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleNotisClick = () => {
      enqueueSnackbar(`${message}`);
    };
    const handleClickVariant = (variant: any) => () => {
      enqueueSnackbar(`${message}`, { variant });
    };
    return (
      <>
        {" "}
        <Box>
          <Button
            variant="outlined"
            onClick={handleNotisClick}
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            open Notification
          </Button>
          <Button
            variant="outlined"
            onClick={handleClickVariant(`${notistackVariant}`)}
            style={{
              marginTop: "5px",
              whiteSpace: "nowrap",
            }}
          >
            open Notification
          </Button>
        </Box>
      </>
    );
  };

  return (
    <>
      <Stack spacing={2} sx={{ width: "50px" }}>
        {(basic || transition) && (
          <>
            <Snackbar
              open={open}
              message={message}
              autoHideDuration={6000}
              onClose={handleClose}
              action={action}
              TransitionComponent={transition === 'slide' ? SlideTransition : transition === 'grow' ? Grow : Fade}
            />
          </>
        )}

        {notistack && (
          <SnackbarProvider
            maxSnack={maxsnack}
            autoHideDuration={autoHideDuration}
          >
            <MyButton />
          </SnackbarProvider>
        )}
        {!basic && !transition && !notistack && (
          <>
            <Snackbar
              onClose={handleClose}
              open={open}
              autoHideDuration={autoHideDuration}
              anchorOrigin={{
                horizontal: position?.horizontal || "left",
                vertical: position?.vertical || "bottom",
              }}
            >
              <Alert
                onClose={handleClose}
                color={color}
                severity={color}
                variant={variant}
                sx={{ width: "100%" }}
              >
                <AlertTitle> {title}</AlertTitle>
                {message}
              </Alert>
            </Snackbar>
          </>
        )}
      </Stack>
    </>
  );
};
