import React from 'react';

import { Button, Col, Row, Space } from 'antd';

export interface Props {
}

export const Header = ({}: Props) => (
    <Row style={{padding: '16px'}}>
        <Col span={8}>
        </Col>
        <Col span={8} offset={8}>
            <Space style={{width: '100%', justifyContent: 'end'}}>
                <span>
                    Welcome, <b>Jordan</b>!
                </span>
                <Button size="small">Log out</Button>
            </Space>
        </Col>
    </Row>
);

export default Header;
