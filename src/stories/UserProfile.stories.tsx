import React from 'react';
import UserProfile from 'components/UserProfile';
import { ComponentMeta, ComponentStory } from '@storybook/react';

type UserProfileProps = {
    label: string;
    type?: string;
    alContent?: string;
    keepMounted?: boolean;
}
const data = [
  {
    id: "avatar",
    label: "Avatar",
    img: "img",
    subLabel: "To display with Avatar",
    orientation: 'center'
  },
  {
      id: "userName",
      label: "User Name",
      value: "James",
      orientation: 'center'
  },
  {
      id: "phoneNo",
      label: "Contact No.",
      value: "+9112340000",
      orientation: 'center'
  },
  {
      id: "email",
      label: "Email",
      value: "abc@wavelabs.ai",
      orientation: 'center'
  },
  {
    id: "designation",
    label: "DesignationName",
    value: "Software Engineer",
    orientation: 'center'
}
]
// display="modal | card | center | left | right"
const UserProfileStories = (props: UserProfileProps) => {
  return (
    <div>
        <UserProfile data={data} {...props} display="modal"/>
    </div>
  ) 
}
 
export default {
    title: 'User Profile',
   
} as ComponentMeta<typeof UserProfileStories>;

const Template: ComponentStory<typeof UserProfileStories> = (args) => <UserProfileStories {...args}/>

export const CenterProfile = Template.bind({});
CenterProfile.args = {
  alContent: 'center',
  keepMounted: true,
}    

export const LeftProfile = Template.bind({});
LeftProfile.args = {
  alContent: 'right',
}

export const RightProfile = Template.bind({});
RightProfile.args = {
  alContent: 'left',
}