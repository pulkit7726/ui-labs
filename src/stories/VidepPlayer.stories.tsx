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

 export const VideoPlayInDailogBox = Template.bind({});
 VideoPlayInDailogBox.args = {
  open: false,
  VideoPath: "assets/video.mp4",
};

export const VideoPlay = Template.bind({});
VideoPlay.args = {
  open: true,
  VideoPath: "assets/video.mp4",
};
