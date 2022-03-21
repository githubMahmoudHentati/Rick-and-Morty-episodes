import React from "react";
import {Card, Row, Col} from 'antd';


export const CardMedia = ({name,description,image,textNameStyle,textDescriptionStyle}) => {
    return (
            <Card
                className={'Card-Media'}
                hoverable={true}
                cover={<img alt="example" src={image}/>}
            >
                <Row gutter={[0,5]}>
                    <Col className={textNameStyle} span={24}>
                        {name}
                    </Col>
                    <Col className={textDescriptionStyle} span={24}>
                        {description}
                    </Col>
                </Row>
            </Card>
    )
}