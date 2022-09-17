import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { AlertTitle, Box, IconButton } from "@mui/material";

import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import { SnackbarProvider, useSnackbar } from "notistack";
import Grow from "@mui/material/Grow";

type NotiFicationProps = {
  open?: boolean;
  action?: any;
  notistackButton?: any;
  grow?: boolean;
  fade?: boolean;
  slide?: boolean;
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
  slideTransition?: boolean;
  fadeTransition?: boolean;
  growTransition?: boolean;
  position?: {
    horizontal: "center" | "left" | "right";
    vertical: "bottom" | "top";
  };
};

export const Notification = ({
  color,
  open,
  slide,
  fade,
  grow,
  action,
  variant,
  message,
  maxsnack,
  notistackButton,
  slideTransition,
  fadeTransition,
  growTransition,
  direction,
  title,
  basic,
  notistackVariant,
  notistack,
  autoHideDuration,
  position,
  ...props
}: NotiFicationProps) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
  };
  const SlideTransition = ({ ...props }: any) => {
    return <Slide {...props} direction={direction} />;
  };

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
        {basic && (
          <>
            <Snackbar
              open={open}
              message={message}
              autoHideDuration={6000}
              onClose={handleClose}
              action={action}
            />
          </>
        )}
        {slideTransition && (
          <>
            <Snackbar
              open={slide}
              message={message}
              autoHideDuration={autoHideDuration}
              TransitionComponent={SlideTransition}
              onClose={handleClose}
              action={action}
            />
          </>
        )}
        {fadeTransition && (
          <>
            <Snackbar
              open={fade}
              message={message}
              autoHideDuration={autoHideDuration}
              TransitionComponent={Fade}
              onClose={handleClose}
              action={action}
            />
          </>
        )}
        {growTransition && (
          <>
            <Snackbar
              open={grow}
              message={message}
              autoHideDuration={autoHideDuration}
              TransitionComponent={Grow}
              onClose={handleClose}
              action={action}
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
        {!basic && !slideTransition && !fadeTransition && !notistack && (
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
