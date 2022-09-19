import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "@mui/material";
import { SnackBars } from "components/Snackbars";

export default {
  title: "SnackBars",
  component: SnackBars,
} as ComponentMeta<typeof SnackBars>;

const Template: ComponentStory<typeof SnackBars> = (args) => {
  const [open, setOpen] = useState(false);

  const toggleNotification = () => setOpen((open) => !open);

  return (
    <>
      <Button variant="outlined" onClick={toggleNotification}>
        Open SnackBars
      </Button>
      <SnackBars {...args} open={open} handleClose={() => setOpen(false)} />
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
  direction: "right",
  autoHideDuration: 2000,
  message: "you can choose transition of snackbar",
};

