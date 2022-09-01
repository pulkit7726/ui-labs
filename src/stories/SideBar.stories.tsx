import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SideBar } from "components/SideBar/SideBar";


export default {
  title: "UI/SideBar",
  component: SideBar,

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
} as ComponentMeta<typeof SideBar>;

const MenuItems = [

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
    Name: "Setting", icon: "/icons/setting.svg",

    SubMenu: [
      { Id: 3, Name: "Notification", icon: "/icons/notifications.svg" },
      { Id: 4, Name: "Account", icon: "/icons/account.svg" },
    ],
  },

]


const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  MenuItems: MenuItems,
  title: "MyLogo",
  iconHide: false,
  position: "left",
  image:
    "https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854",
};


export const WithIcon = Template.bind({});
WithIcon.args = {
  iconHide: true,
  MenuItems: MenuItems,

};

export const CustomizeTheme = Template.bind({});
CustomizeTheme.args = {
  MenuItems: MenuItems,
  backgroundColor: "#464952",
  color: "#c1d5ce",
};


export const ActiveIndicator = Template.bind({});
ActiveIndicator.args = {
  MenuItems: MenuItems,
  showActiveTabs: false,
};


