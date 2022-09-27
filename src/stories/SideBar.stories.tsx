import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SideBar } from 'components/SideBar';
import HomeIcon from '@mui/icons-material/Home';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import PagesIcon from '@mui/icons-material/Pages';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

export default {
  title: 'SideBar',
  component: SideBar,

  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as ComponentMeta<typeof SideBar>;

const MenuItems = [
  {
    Id: 1,
    Name: 'Home',
    icon: (
      <div>
        <HomeIcon />
      </div>
    ),
  },
  {
    Id: 2,
    Name: 'Content',
    icon: (
      <div>
        <ContentPasteIcon />
      </div>
    ),

    SubMenu: [
      {
        Id: 3,
        Name: 'New Content Sync',
        icon: (
          <div>
            <AddCircleOutlineIcon />
          </div>
        ),
      },
      {
        Id: 4,
        Name: 'Existing Content',
        icon: (
          <div>
            <FolderCopyIcon />
          </div>
        ),
      },
    ],
  },

  {
    Id: 5,
    Name: 'Pages',
    icon: (
      <div>
        <PagesIcon />
      </div>
    ),
  },
  {
    Id: 6,
    Name: 'Settings',
    icon: (
      <div>
        <SettingsIcon />
      </div>
    ),

    SubMenu: [
      {
        Id: 7,
        Name: 'Notification',
        icon: (
          <div>
            <NotificationsIcon />
          </div>
        ),
      },

      {
        Id: 8,
        Name: 'Account',
        icon: (
          <div>
            <PersonIcon />
          </div>
        ),
      },
    ],
  },
];

const Template: ComponentStory<typeof SideBar> = (args) => (
  <SideBar {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  MenuItems: [
    { Id: 1, Name: 'Home' },
    {
      Id: 2,
      Name: 'Content',

      SubMenu: [
        { Id: 1, Name: 'New Content Sync' },
        { Id: 2, Name: 'Existing Content' },
      ],
    },

    { Id: 3, Name: 'Pages' },
    {
      Id: 4,
      Name: 'Settings',

      SubMenu: [
        { Id: 3, Name: 'Notification' },
        { Id: 4, Name: 'Account' },
      ],
    },
  ],
  title: 'MyLogo',
  image:
    'https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  MenuItems,
  title: 'MyLogo',
  image:
    'https://audimediacenter-a.akamaihd.net/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_full.jpg?1581961854',
};

export const CustomizeTheme = Template.bind({});
CustomizeTheme.args = {
  MenuItems,
  backgroundColor: '#464952',
  color: '#c1d5ce',
};

export const ActiveIndicator = Template.bind({});
ActiveIndicator.args = {
  MenuItems,
  showActiveTabs: true,
};

export const Responsive = Template.bind({});

Responsive.args = {
  MenuItems,
  Responsive: true,
  showArrowIcon: true,
  tooltip: false,
};

export const WithIconTooltip = Template.bind({});

WithIconTooltip.args = {
  MenuItems,
  showArrowIcon: false,
  tooltip: true,
  Responsive: true,
};

// export const Position = Template.bind({});
// Position.args = {
//   MenuItems: MenuItems,
//   title: "",
//   position: "right",
// };
