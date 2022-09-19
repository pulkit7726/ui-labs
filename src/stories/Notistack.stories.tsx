import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SnackBars } from "components/Notification/Snackbars";

export default {
  title: "SnackBars",
  component: SnackBars,
} as ComponentMeta<typeof SnackBars>;

const Template: ComponentStory<typeof SnackBars> = (args) => {
  return <SnackBars {...args} />;
};

export const StackSnackbars = Template.bind({});
StackSnackbars.args = {
  maxsnack: 4,
  withVariant: true,
  notistackVariant: "info",
  autoHideDuration: 3000,
  message: "this is Notistack",
  notistack: true,
};
