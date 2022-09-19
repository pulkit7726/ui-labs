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
  return <Notification {...args} />;
};

export const EnqueNotification = Template.bind({});
EnqueNotification.args = {
  maxsnack: 4,
  notistack: true,
  notistackVariant: "info",
  autoHideDuration: 3000,
  withVariant: false,
  message: "this is Notistack",
};
