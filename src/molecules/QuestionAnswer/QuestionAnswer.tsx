import React from 'react';

import { Descriptions, PageHeader, Row } from 'antd';
import { Question } from '../../types/Question.type';

export interface Props {
    Question: Question;
}

export const QuestionAnswer = ({Question}: Props) => (
    <PageHeader
        title={Question.Title}
    >
        <Descriptions size="small" column={3}>
            <Descriptions.Item label="Asked by">{`${Question.User.FirstName} ${Question.User.LastName}`}</Descriptions.Item>
        </Descriptions>
        <Row>
            <div style={{ flex: 1 }}>{Question.Body}</div>
        </Row>
    </PageHeader>
);

export default QuestionAnswer;
