import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SnackBars } from "components/Snackbars";
import { Button } from "@mui/material";

export default {
  title: "SnackBars",
  component: SnackBars,
} as ComponentMeta<typeof SnackBars>;

const Template: ComponentStory<typeof SnackBars> = (args) => {
  const [open, setOpen] = useState(false);

  const toggleNotification = () => {
    setOpen((open) => !open);
  }

  return (
    <>
      <Button variant="outlined" onClick={toggleNotification}>
        Open Notification
      </Button>
      <SnackBars {...args} open={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export const StackSnackbars = Template.bind({});
StackSnackbars.args = {
  maxsnack: 4,
  notistack: true,
  autoHideDuration: 3000,
  message: "this is Notistack",
};
