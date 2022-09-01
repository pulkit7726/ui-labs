import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ResponsiveSideBar from "components/SideBar/Responsive";

export default {
  title: "UI/SideBar/Responsive",
  component: ResponsiveSideBar,

  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },

    label: {
      options: ["Normal", "Bold", "Italic"],
      mapping: {
        Bold: <b>Bold</b>,
        Italic: <i>Italic</i>,
      },
    },
  },
} as ComponentMeta<typeof ResponsiveSideBar>;

const Template: ComponentStory<typeof ResponsiveSideBar> = (args) => (
  <ResponsiveSideBar {...args} />
);

export const Responsive = Template.bind({});
Responsive.args = {
  MenuItems: [
    { Id: 1, Name: "Home", icon: "/icons/home.svg" },
    {
      Id: 2,
      Name: "Content",
      icon: "/icons/content.svg",

      SubMenu: [
        { Id: 1, Name: "New Content Sync", icon: "/icons/content-sync.svg" },
        { Id: 2, Name: "Existing Content", icon: "/icons/existing-Content.svg" },
      ],
    },

    { Id: 3, Name: "Pages", icon: "/icons/page.svg" },
    {
      Id: 4,
      Name: "Setting",
      icon: "/icons/setting.svg",
      SubMenu: [
        { Id: 3, Name: "Notification", icon: "/icons/notifications.svg" },
        { Id: 4, Name: "Account", icon: "/icons/account.svg" },
      ],
    },
  ],
  title: "",
  iconHide: true,
  showActiveTabs: false,
  backgroundColor: "#464952",
  color: "#c1d5ce",
  image: "",
};
