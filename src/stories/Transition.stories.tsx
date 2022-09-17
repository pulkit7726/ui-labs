import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Notification } from "components/Notification/Notification";
import { Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

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
      <Button variant="outlined" onClick={slideTransition}>
        Slide Notification
      </Button>
      <Button variant="outlined" onClick={fadeTransition}>
        Fade Notification
      </Button>
      <Button variant="outlined" onClick={growTransition}>
        Grow Notification
      </Button>
      <Notification
        {...args}
        action={action}
        slide={slide}
        fade={fade}
        grow={grow}
      />
    </>
  );
};

export const transition = Template.bind({});
transition.args = {
  slideTransition: true,
  direction: "right",
  fadeTransition: true,
  growTransition: true,
  autoHideDuration: 2000,
  message: "you can choose transition of snackbar",
};
