import React from 'react';
import UserProfile from 'components/UserProfile';
import { ComponentMeta, ComponentStory } from '@storybook/react';

type UserProfileProps = {
    title?: string;
    idName?: any;
    designation?: any;
    department?: any;
    email?: any;
    personalDetails?: any;
    professionalDetails?: any;
}

const UserProfileStories = (props: UserProfileProps) => {
  return (
    <div>
        <UserProfile {...props}/>
    </div>
  ) 
}
 
export default {
    title: 'User Profile',
} as ComponentMeta<typeof UserProfileStories>;

const Template: ComponentStory<typeof UserProfileStories> = (args) => <UserProfileStories {...args}/>

export const Profile = Template.bind({});
Profile.args = {
  personalDetails: 'About Me',
  professionalDetails: 'Professional Details',
  idName: 'WL12345-James Williams',
  designation: 'Software Engineer',
  department: 'Digital',
  email: 'james@wavelabs.ai',
}              