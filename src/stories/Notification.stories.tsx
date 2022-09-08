import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Notification from "components/Notificaton/Notification";


export default {
    title: "Notification",
    component: Notification,



} as ComponentMeta<typeof Notification>;





const Template: ComponentStory<typeof Notification> = (args) => (
    <Notification {...args} />
);

export const Type = Template.bind({});
Type.args = {
    color: "error",
    iconShow: true

}
export const Variant = Template.bind({});
Variant.args = {
    variaent: "outlined"
}
export const Message = Template.bind({});
Message.args = {
    message: "this is success message"
}
export const Title = Template.bind({})
Title.args = {
    title: "Success",
    message: "this is success message",
    autoHideDuration: 3000
}