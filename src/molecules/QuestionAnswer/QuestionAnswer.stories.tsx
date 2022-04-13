import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { QuestionAnswer } from './QuestionAnswer';
import { Question } from '../../types/Question.type';

export default {
  title: 'Molecules/QuestionAnswer',
  component: QuestionAnswer,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof QuestionAnswer>;

const Template: ComponentStory<typeof QuestionAnswer> = (args) => <QuestionAnswer {...args} />;

export const Demo = Template.bind({});
Demo.args = {
    Question: {
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
    } as Question
};
