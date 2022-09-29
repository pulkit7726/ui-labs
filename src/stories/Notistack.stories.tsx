import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SnackBar } from "components/Snackbars";
import { Button } from "@mui/material";

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

export const Stacked= Template.bind({});
Stacked.args = {
  maxsnack: 4,
  notistack: true,
  autoHideDuration: 3000,
  message: "this is Notistack",
};
