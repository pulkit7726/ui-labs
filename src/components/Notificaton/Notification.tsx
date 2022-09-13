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
  color?: "error" | "info" | "success" | "warning";
  variaent?: "filled" | "outlined" | "standard";
  message?: string;
  Variant?: "error" | "info" | "success" | "warning";
  title?: string;
  Basic?: boolean;
  Notistack?: boolean;
  maxsnack?: number;
  direction?: "down" | "left" | "right" | "up";
  BasicMessage?: string;
  autoHideDuration?: number;
  Slide_Transition?: boolean;
  Fade_Transition?: boolean;
  Grow_Transition?: boolean;
  position?: {
    horizontal: "center" | "left" | "right";
    vertical: "bottom" | "top";
  };
};

export const Notification = ({
  color,
  variaent,
  message,
  maxsnack,
  Slide_Transition,
  Fade_Transition,
  Grow_Transition,
  direction,
  BasicMessage,
  title,
  Basic,
  Variant,
  Notistack,
  autoHideDuration,
  position,
  ...props
}: NotiFicationProps) => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [slide, setOpenSlide] = React.useState(false);
  const [fade, setOpenFade] = React.useState(false);
  const [grow, setOpenGrow] = React.useState(false);
  const handleClick = () => {
    setOpenSnackbar(true);
  };
  const handleSlideClick = () => {
    setOpenSlide(true);
  };
  const handleFadeClick = () => {
    setOpenFade(true);
  };
  const handleGrowClick = () => {
    setOpenGrow(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
    setOpenSlide(false);
    setOpenFade(false);
    setOpenGrow(false);
  };
  const SlideTransition = ({ ...props }: any) => {
    return <Slide {...props} direction={direction} />;
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

  //   const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  //   const handleNoticeClick = () => {
  //     enqueueSnackbar("I love hooks");
  //   };
  const MyButton = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleNotisClick = () => {
      enqueueSnackbar(`${message}`);
    };
    const handleClickVariant = (variant: any) => () => {
      // variant could be success, error, warning, info, or default
      enqueueSnackbar("This is a success message!", { variant });
    };
    return (
      <>
        {" "}
        <Box mt={2} justifyContent="space-between" alignItems="center">
          <Button
            variant="outlined"
            onClick={handleNotisClick}
            sx={{ height: 40, width: 90, padding: "10px" }}
          >
            Basic
          </Button>
          <Button
            variant="outlined"
            onClick={handleClickVariant(`${Variant}`)}
            sx={{ height: 40, width: 100, marginTop: "5px", padding: "10px" }}
          >
            Customized
          </Button>
        </Box>
      </>
    );
  };

  return (
    <>
      <Stack spacing={2} sx={{ width: "50px" }}>
        {Basic && (
          <>
            <Button variant="outlined" onClick={handleClick}>
              Basic
            </Button>
            <Snackbar
              open={openSnackbar}
              message={BasicMessage || message}
              autoHideDuration={6000}
              onClose={handleClose}
              action={action}
            />
          </>
        )}
        {Slide_Transition && (
          <>
            <Button variant="outlined" onClick={handleSlideClick}>
              Slide
            </Button>
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
        {Fade_Transition && (
          <>
            <Button variant="outlined" onClick={handleFadeClick}>
              Fade
            </Button>
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
        {Grow_Transition && (
          <>
            <Button variant="outlined" onClick={handleGrowClick}>
              Grow
            </Button>
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
        {Notistack && !Slide_Transition && !Fade_Transition && !Basic && (
          <SnackbarProvider
            maxSnack={maxsnack}
            autoHideDuration={autoHideDuration}
          >
            <MyButton />
          </SnackbarProvider>
        )}
        {!Basic && !Slide_Transition && !Fade_Transition && !Notistack && (
          <>
            <Button variant="outlined" onClick={handleClick}>
              click
            </Button>
            <Snackbar
              onClose={handleClose}
              open={openSnackbar}
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
                variant={variaent}
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
