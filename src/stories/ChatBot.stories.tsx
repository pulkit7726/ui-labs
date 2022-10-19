import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ChatBot from 'components/ChatBot';
import { createChatBotMessage } from 'react-chatbot-kit';
import Overview from '../components/ChatBot/Widgets/OverView';
import GlobalStatistics from '../components/ChatBot/Widgets/GlobalStatistics';
import LocalStatistics from '../components/ChatBot/Widgets/LocalStatistics';
import CoBotAvatar from '../components/ChatBot/Config/CoBotAvatar';

export default {
  title: 'Functional/ChatBot',
  show: true,
  onClose: () => {},
} as ComponentMeta<typeof ChatBot>;
const Template: ComponentStory<typeof ChatBot> = args => <ChatBot {...args} />;

export const Bot = Template.bind({});
const config = {
  lang: 'no' as string,
  botName: 'CoBot' as string,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#04668a',
    },
    chatButton: {
      backgroundColor: '#0f5faf',
    },
  } as any,
  initialMessages: [
    createChatBotMessage(
      "Hi, I'm here to provide you with latest COVID 19 data to keep you safe!",
      {},
    ),
    createChatBotMessage(
      "Here's a quick overview of what I can help you with. You can also type in.",
      {
        delay: 400,
        widget: 'overview',
      },
    ),
  ] as any,
  state: {} as any,
  customComponents: {
    botAvatar: (props: any) => <CoBotAvatar {...props} />,
  } as any,
  widgets: [
    {
      widgetName: 'overview',
      widgetFunc: (props: any) => <Overview {...props} />,
      mapStateToProps: ['messages'],
    },
    {
      widgetName: 'globalStatistics',
      widgetFunc: (props: any) => <GlobalStatistics />,
    },
    {
      widgetName: 'localStatistics',
      widgetFunc: (props: any) => <LocalStatistics />,
    },
  ] as any,
};

const onLoadMessage = [
  'Click on the Bot icon to get started',
  'Type in tell a joke and see what happens...',
] as any;

Bot.args = {
  title: 'Bot',
  config,
  onLoadMessage,
};
