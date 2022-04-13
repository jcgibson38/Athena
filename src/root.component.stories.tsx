import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Root from './root.component';

export default {
  title: 'App/Root',
  component: Root,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Root>;

const Template: ComponentStory<typeof Root> = (args) => <Root {...args} />;

export const Demo = Template.bind({});
Demo.args = {
    name: "Athena"
};
