import React from "react";
import {Row, Col,Card} from 'antd';
import '../characterEpisodesList.scss';
import {RightCircleFilled} from "@ant-design/icons";


export const EpisodeList = ({characterEpisodesList}) => {


    return (
        <Card
            style={{height: `${characterEpisodesList.constraintData.episodeCardHeight - 5}px`}}
            className={'List-Episodes'}>
            <Row gutter={[0, 10]}>
                <Col className={'Episodes-title-Header'} span={24}>
                    <span>Episodes List</span>
                </Col>
                <Col span={24}>
                    <Row>
                        {characterEpisodesList.CardMediaEpisodeInfoList.episode && characterEpisodesList.CardMediaEpisodeInfoList.episode.map((episode, episodeIndex) => {
                            return (
                                <Col key={episodeIndex} className={"Episode-Title"}
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