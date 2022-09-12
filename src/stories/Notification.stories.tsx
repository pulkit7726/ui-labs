import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Notification } from "components/Notificaton/Notification";

export default {
  title: "Notification",
  component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const Basic_Customized = Template.bind({});
Basic_Customized.args = {
  color: "error",
  Basic: false,
  message: "this is error message ",
  BasicMessage: "this is basic snackbar",
  title: "Error",
  autoHideDuration: 3000,
};

export const Variant = Template.bind({});
Variant.args = {
  variaent: "outlined",
  message: "you can choose any type variant",
};
export const position = Template.bind({});
position.args = {
  position: { vertical: "bottom", horizontal: "left" },
  message: "You can change the position ",
};
export const transition = Template.bind({});
transition.args = {
  Slide_Transition: true,
  direction: "right",
  Fade_Transition: true,
  Grow_Transition: true,
  autoHideDuration: 2000,
  message: "you can choose transition of snackbar",
};
export const enqueNotification = Template.bind({});
enqueNotification.args = {
  Notistack: true,
  message: "this is enqueSnackbar",
  maxsnack: 4,
  Variant: "info",
  autoHideDuration: 3000,
};
