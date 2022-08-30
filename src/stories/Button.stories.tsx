/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import ButtonMemo, { ButtonComponent } from "../components/Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Button",
  component: ButtonComponent
} as ComponentMeta<typeof ButtonComponent>;

const Basic: ComponentStory<typeof ButtonComponent> = args => {
  return <ButtonComponent {...args} />;
};

export const ButtonTest = Basic.bind({});

ButtonTest.args = {
  // imageList: []
};
