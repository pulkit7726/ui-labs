import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Notification } from "components/Notification/Notification";
import { Button, IconButton } from "@mui/material";
import Slide from "@mui/material/Slide";

export default {
  title: "Notification",
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => {
  const [open, setOpen] = useState(false);

  const toggleNotification = () => setOpen((open) => !open);

  return (
    <>
      <Button variant="outlined" onClick={toggleNotification} >
        Open Notification
      </Button>
      <Notification {...args} open={open} />
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

export const SlideTransition = Template.bind({});
SlideTransition.args = {
  transition: 'slide',
  direction: "right",
  autoHideDuration: 2000,
  message: "you can choose transition of snackbar",
};

export const GrowTransition = Template.bind({});
GrowTransition.args = {
  transition: 'grow',
  autoHideDuration: 2000,
  message: "you can choose transition of snackbar",
};

export const FadeTransition = Template.bind({});
FadeTransition.args = {
  transition: 'fade',
  autoHideDuration: 2000,
  message: "you can choose transition of snackbar",
};


