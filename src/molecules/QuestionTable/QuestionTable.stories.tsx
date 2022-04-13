import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { QuestionTable } from './QuestionTable';
import { Question } from '../../types/Question.type';

export default {
  title: 'Molecules/QuestionTable',
  component: QuestionTable,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof QuestionTable>;

const Template: ComponentStory<typeof QuestionTable> = (args) => <QuestionTable {...args} />;

export const Demo = Template.bind({});
Demo.args = {
    Questions: [{
        Id: "some-id",
        Title: "Why is processing a sorted array faster than processing an unsorted array?",
        Body: "Here is a piece of C++ code that shows some very peculiar behavior. For some strange reason, sorting the data (before the timed region) miraculously makes the loop almost six times faster.",
        Answers: [],
        Rating: 0,
        User: {
          UserName: "jcgibson38",
          FirstName: "Jordan",
          LastName: "Gibson"
        }
    } as Question]
};
