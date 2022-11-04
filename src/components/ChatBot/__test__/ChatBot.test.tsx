import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { composeStories } from '@storybook/testing-react';
import * as ChatBotStories from 'stories/ChatBot.stories';
import ChatBot from '..';

const { Bot } = composeStories(ChatBotStories);

describe('should render a Chat Bot', () => {
  test('should render as chat bot', () => {
    render(<ChatBot title="" config={{}} onLoadMessage="" />);
    expect(Object.keys(Bot.args?.config).length > 0).toBeTruthy();
  });
  test('should render as chat bot name', () => {
    render(<ChatBot title="" config={{}} onLoadMessage="" />);
    expect(Bot.args?.config.botName === 'CoBot').toBeTruthy();
  });
  test('should render as chat bot welcome message', () => {
    render(<ChatBot title="" config={{}} onLoadMessage="" />);
    expect(Bot.args?.onLoadMessage.length > 0).toBeTruthy();
  });
});
