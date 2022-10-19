import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SideBar } from "../components/SideBar/index";
import HomeIcon from "@mui/icons-material/Home";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import PagesIcon from "@mui/icons-material/Pages";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";

export default {
  title: "UI/Sidebar",
  component: SideBar,

  argTypes: {
<<<<<<< HEAD:src/stories/position.stories.tsx
    backgroundColor: { control: "color" },
    color: { control: "color" },
=======
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b:src/stories/Position.stories.tsx
  },
} as ComponentMeta<typeof SideBar>;

const MenuItems = [
  {
    Id: 1,
<<<<<<< HEAD:src/stories/position.stories.tsx
    Name: "Home",
=======
    Name: 'Home',
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b:src/stories/Position.stories.tsx
    icon: (
      <div>
        <HomeIcon />
      </div>
    ),
  },
  {
    Id: 2,
<<<<<<< HEAD:src/stories/position.stories.tsx
    Name: "Content",
=======
    Name: 'Content',
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b:src/stories/Position.stories.tsx
    icon: (
      <div>
        <ContentPasteIcon />
      </div>
    ),

    SubMenu: [
      {
        Id: 1,
<<<<<<< HEAD:src/stories/position.stories.tsx
        Name: "New Content Sync",
=======
        Name: 'New Content Sync',
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b:src/stories/Position.stories.tsx
        icon: (
          <div>
            <AddCircleOutlineIcon />
          </div>
        ),
      },
      {
        Id: 2,
<<<<<<< HEAD:src/stories/position.stories.tsx
        Name: "Existing Content",
=======
        Name: 'Existing Content',
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b:src/stories/Position.stories.tsx
        icon: (
          <div>
            <FolderCopyIcon />
          </div>
        ),
      },
    ],
  },

  {
    Id: 3,
<<<<<<< HEAD:src/stories/position.stories.tsx
    Name: "Pages",
=======
    Name: 'Pages',
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b:src/stories/Position.stories.tsx
    icon: (
      <div>
        <PagesIcon />
      </div>
    ),
  },
  {
    Id: 4,
<<<<<<< HEAD:src/stories/position.stories.tsx
    Name: "Settings",
=======
    Name: 'Settings',
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b:src/stories/Position.stories.tsx
    icon: (
      <div>
        <SettingsIcon />
      </div>
    ),

    SubMenu: [
      {
        Id: 3,
<<<<<<< HEAD:src/stories/position.stories.tsx
        Name: "Notification",
=======
        Name: 'Notification',
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b:src/stories/Position.stories.tsx
        icon: (
          <div>
            <NotificationsIcon />
          </div>
        ),
      },
      {
        Id: 4,
<<<<<<< HEAD:src/stories/position.stories.tsx
        Name: "Account",
=======
        Name: 'Account',
>>>>>>> efdb20a4c957b0cbcafb4f352d9955c90b55054b:src/stories/Position.stories.tsx
        icon: (
          <div>
            <PersonIcon />
          </div>
        ),
      },
    ],
  },
];

const Template: ComponentStory<typeof SideBar> = args => <SideBar {...args} />;

export const Position = Template.bind({});
Position.args = {
  MenuItems,
  title: "",
  position: "right",
};
