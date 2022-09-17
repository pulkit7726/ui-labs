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
  const [open, setOpen] = useState(false);

  const toggleNotification = () => setOpen((open) => !open);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
      <Button variant="outlined" onClick={toggleNotification}>
        Open Notification
      </Button>

      <Notification {...args} open={open} action={action} />
    </>
  );
};
export const Customized = Template.bind({});
Customized.args = {
  color: "error",
  basic: true,
  message: "this is error message ",
  title: "Error",
  autoHideDuration: 3000,
};

export const Variant = Template.bind({});
Variant.args = {
  variant: "outlined",
  message: "you can choose any type variant",
};
export const Position = Template.bind({});
Position.args = {
  position: { vertical: "bottom", horizontal: "left" },
  message: "You can change the position ",
};
