import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Notifications } from 'components/Notifications';

export default {
  title: 'UI/Notifications',
  component: Notifications,
} as ComponentMeta<typeof Notifications>;

const Template: ComponentStory<typeof Notifications> = (args) => {
  return (
    <>
      <Notifications />
    </>
  );
};

 export const Notification = Template.bind({});
 Notification.args = {
};
