import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SideBar } from "components/SideBar/SideBar";
import HomeIcon from '@mui/icons-material/Home';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PagesIcon from '@mui/icons-material/Pages';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

export default {
    title: "SideBar",
    component: SideBar,

    argTypes: {
        backgroundColor: { control: "color" },
        color: { control: "color" },


    },
} as ComponentMeta<typeof SideBar>;

const MenuItems = [

    { Id: 1, Name: "Home", icon: <div><HomeIcon /></div> },
    {
        Id: 2,
        Name: "Content",
        icon: <div><ContentPasteIcon /></div>,

        SubMenu: [
            { Id: 1, Name: "New Content Sync", icon: <div><AddCircleOutlineIcon /></div> },
            { Id: 2, Name: "Existing Content", icon: <div><FolderCopyIcon /></div> },
        ],
    },

    { Id: 3, Name: "Pages", icon: <div><PagesIcon /></div> },
    {
        Id: 4,
        Name: "Settings", icon: <div><SettingsIcon /></div>,

        SubMenu: [
            { Id: 3, Name: "Notification", icon: <div><NotificationsIcon /></div> },
            { Id: 4, Name: "Account", icon: <div><PersonIcon /></div> },
        ],
    },

]


const Template: ComponentStory<typeof SideBar> = (args) => (
    <SideBar {...args} />
);

export const Position = Template.bind({});
Position.args = {
    MenuItems: MenuItems,
    title: "",
    position: "right",
};







