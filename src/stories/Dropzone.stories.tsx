import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DropzoneComponent from "../components/Dropzone"

export default {
    title: 'Functional/DropzoneComponent',
    component: DropzoneComponent,
    parameters: {
      layout: 'fullscreen',
    },
  } as ComponentMeta<typeof DropzoneComponent>;
  const img = [".jpg", ".png", ".xls", ".zip",".mp4"]
  const Template: ComponentStory<typeof DropzoneComponent> = (args) => <DropzoneComponent {...args} />;
  export const DropzoneList = Template.bind({});
  DropzoneList.args = {
    fileTypes: img,
    fileSize: 1e+7,
    backgroundColor:'#CFD8DC'
  }
