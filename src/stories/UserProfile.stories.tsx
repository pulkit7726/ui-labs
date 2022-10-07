import React from 'react';
import UserProfile from 'components/UserProfile';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { data, avatarImage } from '../Data/UserProfile.json'

type UserProfileProps = {
  alContent?: string;
  myAccountButtonColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning';
  myAccountButtonSize?: 'small' | 'medium' | 'large';
  myAccountButtonVariant?: 'contained' | 'outlined' | 'text';
  logoutButtonColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning';
  logoutButtonSize?: 'small' | 'medium' | 'large';
  logoutButtonVariant?: 'contained' | 'outlined' | 'text';
  display?: string;
  avatarImage?: { avatarImg: string, avatarTitle: string };
  data?: Array<Object>;
  profileHeading?: string;
  width?: string;
  fontSize?: number;
};


const UserProfileStories = (props: UserProfileProps) => (
  <div>
    <UserProfile {...props} />
  </div>
);

export default {
  title: 'UI/User Profile',
  argTypes: {
    myAccountButtonColor: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'info', 'warning'],
      },
    },
    myAccountButtonSize: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    myAccountButtonVariant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
    logoutButtonColor: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'info', 'warning'],
      },
    },
    logoutButtonSize: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    logoutButtonVariant: {
      control: {
        type: 'select',
        options: ['contained', 'outlined', 'text'],
      },
    },
    width: {
      control: {
        type: 'range', min: 200, max: 1200, step: 50,
      },
    },
  },

} as ComponentMeta<typeof UserProfileStories>;

const Template: ComponentStory<typeof UserProfileStories> = (args) => <UserProfileStories {...args} />;

export const BasicProfile = Template.bind({});

BasicProfile.args = {
  display: 'basic',
  fontSize: 12,
  avatarImage,
  data,
};

export const CenterProfile = Template.bind({});
CenterProfile.args = {
  display: 'center',
  avatarImage,
  data,
};

export const LeftAlignmentAvatar = Template.bind({});
LeftAlignmentAvatar.args = {
  display: 'custom',
  fontSize: 12,
  avatarImage,
  data,
  profileHeading: 'View User Profile',
};

export const LeftProfileWithDrawer = Template.bind({});
LeftProfileWithDrawer.args = {
  alContent: 'left',
  display: 'drawer',
  fontSize: 12,
  avatarImage,
  data,
};

export const RightProfileWithDrawer = Template.bind({});
RightProfileWithDrawer.args = {
  alContent: 'right',
  display: 'drawer',
  fontSize: 12,
  avatarImage,
  data,
};
