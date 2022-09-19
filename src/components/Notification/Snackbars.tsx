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
  /**open is a state  */
  open?: boolean;
  /**To change the type of Notification */
  color?: "error" | "info" | "success" | "warning";
  /**To change the type of variant */
  variant?: "filled" | "outlined" | "standard";
  /**To display the message*/
  message?: string;
  /**If withVarient is true can change the type of notistack else can't */
  withVariant?: boolean;
  /** To change the type of Notistack*/
  notistackVariant?: "error" | "info" | "success" | "warning";
  /** To display the title */
  title?: string;
  /**If Basic is true basic notification is display else Customize */
  basic?: boolean;
  notistack?: boolean;
  /** To change the number of Notification */
  maxsnack?: number;
  /** To change the direction of slide */
  direction?: "down" | "left" | "right" | "up";
  /** The number of milliseconds to wait before dismissing after user interaction. */
  autoHideDuration?: number;
  /**Can Choose any type of transition */
  transition?: "slide" | "grow" | "fade";
  /**The anchor of the Snackbar. On smaller screens, the component grows to occupy all the available width, the horizontal alignment is ignored. */
  position?: {
    horizontal: "center" | "left" | "right";
    vertical: "bottom" | "top";
  };
};

export const SnackBars = ({
  color,
  open,
  withVariant,
  variant,
  message,
  maxsnack,
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

    const handleNotisClick = (variant: any) => () => {
      enqueueSnackbar(`${message}`, { variant });
    };

    return (
      <>
        {" "}
        <Box>
          <Button
            variant="outlined"
            onClick={handleNotisClick(
              `${withVariant ? notistackVariant : false}`
            )}
            sx={{
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
              TransitionComponent={
                transition === "slide"
                  ? SlideTransition
                  : transition === "grow"
                  ? Grow
                  : Fade
              }
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
              action={action}
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
