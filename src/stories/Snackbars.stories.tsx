import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@mui/material";
import { SnackBar } from "components/Snackbars";

export default {
  title: "SnackBars",
  component: SnackBar,
} as ComponentMeta<typeof SnackBar>;

const Template: ComponentStory<typeof SnackBar> = (args) => {
  const [open, setOpen] = useState(false);

  const toggleNotification = () => {
    setOpen((open) => !open);
  }

  return (
    <>
      <Button variant="outlined" onClick={toggleNotification}>

        Open Notification 

      </Button>
      <SnackBar {...args} open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export const Customized = Template.bind({});
Customized.args = {
  color: "error",
  basic: false,
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

export const Transition = Template.bind({});
Transition.args = {
  transition: "slide",
  slideDirection: "right",
  autoHideDuration: 2000,
  message: "you can choose transition of snackbar",
};

