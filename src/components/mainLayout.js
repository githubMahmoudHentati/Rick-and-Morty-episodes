import React from "react";
import {Row, Col,Card} from 'antd'
import RoutingList from "../router/routingList";

export const MainLayout =() =>{
    return (
        <Row className={"MainLayout"} >
            <Col span={24} className={'Page-Header'}>
                <Row style={{height:"100%"}}justify={"space-between"}>
                    <Col  className={'Title-Header'}  >
                        <span >Perseus Application</span>
                    </Col>
                </Row>

            </Col>
            <Col className={"Card"} span={24}>
                <Row className={"Mini-Card"}>
                    <Col span={24}>
                        <RoutingList/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
