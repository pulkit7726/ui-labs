import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Notification } from "components/Notification/Notification";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useSnackbar } from "notistack";

export default {
  title: "Notification",
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => {
  const [slide, setOpenSlide] = React.useState(false);
  const [fade, setOpenFade] = React.useState(false);
  const [grow, setOpenGrow] = React.useState(false);

  const slideTransition = () => {
    setOpenSlide(true);
  };
  const fadeTransition = () => {
    setOpenFade(true);
  };

  const growTransition = () => {
    setOpenGrow(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSlide(false);
    setOpenFade(false);
    setOpenGrow(false);
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

  return (
    <>
      <Notification {...args} action={action} />
    </>
  );
};

export const enqueNotification = Template.bind({});
enqueNotification.args = {
  notistack: true,
  message: "this is enqueSnackbar",
  maxsnack: 4,
  notistackVariant: "info",
  autoHideDuration: 3000,
};
