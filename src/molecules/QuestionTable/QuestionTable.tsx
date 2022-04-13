import React, { useEffect, useState } from 'react';

import { Table, Tag, Space } from 'antd';
import { getAllQuestions } from '../../services/Question.service';
import { Question } from '../../types/Question.type';

export interface Props {
    Questions: Question[];
}

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
  ];

export const QuestionTable = ({Questions}: Props) => {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getAllQuestions()
      .then(res => {
        setQuestions(res);
      });
  }, []);

  return <Table columns={columns} dataSource={questions} />;
};

export default QuestionTable;
