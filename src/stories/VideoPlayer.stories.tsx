import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VideoPlayerComponent } from 'components/VideoPlayer';

export default {
  title: 'UI/Video Player',
  component: VideoPlayerComponent,
} as ComponentMeta<typeof VideoPlayerComponent>;

const Template: ComponentStory<typeof VideoPlayerComponent> = (args) => {
  return (
    <>
      <VideoPlayerComponent {...args}/>
    </>
  );
};


export const VideoWithControls = Template.bind({});
VideoWithControls.args = {
  customControls:false,
  url:"https://www.youtube.com/watch?v=HteQt1mkRfM",
  iconColor:"blue",
  rangeColor:"red",
};
