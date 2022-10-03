import React from 'react';
import UserProfile from 'components/UserProfile';
import { ComponentMeta, ComponentStory } from '@storybook/react';

type UserProfileProps = {
  alContent?: string;
  myAccountButtonColor?: number;
  myAccountButtonSize?: number;
  myAccountButtonVariant?: number;
  logoutButtonColor?: number;
  logoutButtonSize?: number;
  logoutButtonVariant?: number;
  display?: string;
  avatarImage?: { avatarImg: string, avatarTitle: string };
  data?: Array<Object>;
  profileHeading?: string;
};

const avatarImage = {
  avatarImg: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-business-user-profile-vector-png-image_4830519.jpg',
  avatarTitle: 'Profile Image',
};

const data = [
  {
    id: 'userName',
    label: 'Name',
    userName: 'William James',
    value: 'William James',
  },
  {
    id: 'phoneNo',
    label: 'Contact',
    contact: '+9112340000',
    value: '+9112340000',
  },
  {
    id: 'email',
    label: 'Email',
    email: 'abc@wavelabs.ai',
    value: 'abc@wavelabs.ai',
  },
  {
    id: 'designation',
    label: 'Designation',
    value: 'Software Engineer',
    designation: 'Software Engineer',
  },
  {
    id: 'company',
    label: 'Company',
    value: 'Wavelabs Technologies',
    company: 'Wavelabs Technologies',
  },
];

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
  },

} as ComponentMeta<typeof UserProfileStories>;

const Template: ComponentStory<typeof UserProfileStories> = (args) => <UserProfileStories {...args} />;

export const BasicProfile = Template.bind({});

BasicProfile.args = {
  display: 'basic',
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
  avatarImage,
  data,
  profileHeading: 'View User Profile',
};

export const LeftProfileWithDrawer = Template.bind({});
LeftProfileWithDrawer.args = {
  alContent: 'left',
  display: 'drawer',
  avatarImage,
  data,
};

export const RightProfileWithDrawer = Template.bind({});
RightProfileWithDrawer.args = {
  alContent: 'right',
  display: 'drawer',
  avatarImage,
  data,
};
