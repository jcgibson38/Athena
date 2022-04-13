import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from './Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Demo = Template.bind({});
Demo.args = {
};
