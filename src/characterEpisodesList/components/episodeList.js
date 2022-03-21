import React from "react";
import {Row, Col,Card} from 'antd';
import '../characterEpisodesList.scss';
import {RightCircleFilled} from "@ant-design/icons";


export const EpisodeList = ({episodeCardHeight,episodes}) => {


    return (
        <Card
            style={{height: `${episodeCardHeight - 5}px`}}
            className={'List-Episodes'}>
            <Row gutter={[0, 10]}>
                <Col className={'Episodes-title-Header'} span={24}>
                    <span>Episodes List</span>
                </Col>
                <Col span={24}>
                    <Row>
                        {episodes&& episodes.map((episode) => {
                            return (
                                <Col key={episode.id} className={"Episode-Title"}
                                     span={24}>
                                    <Row justify={"space-between"}>
                                        <Col>
                                            <span>{episode.id}. {episode.name}</span>
                                        </Col>
                                        <Col>
                                            <RightCircleFilled
                                                className={"Episode-Display"}/>
                                        </Col>
                                    </Row>

                                </Col>
                            )
                        })
                        }
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}