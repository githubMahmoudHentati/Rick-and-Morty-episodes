import './characterEpisodesList.scss';
import React, {useEffect, useCallback, useRef, useState} from "react";
import {Row, Col, Pagination, Spin, Card} from 'antd'
import {GraphQLFetchData} from "./utils/graphQLFetchData";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {useDispatch, useSelector} from "react-redux";
import{CardMedia} from "../components/cardMedia";
import {setConstraintDataEpisodeList} from "./store/actions";
import {OwlCarouselComponent} from "./components/owlCarousel";
import {EpisodeList} from "./components/episodeList";

export const CharacterEpisodeList =() =>{
    const dispatch = useDispatch()
    const {getEpisodeDataCall}=GraphQLFetchData()
    const characterEpisodesList = useSelector((state) => state.CharacterEpisodesListReducer)

    /**  Get the height of the character card-media selected **/
    const episodesListHeightRef = useCallback(node => {
        if (node !== null && !characterEpisodesList.constraintData.listMediaCardLoading ) {
            dispatch(setConstraintDataEpisodeList({constraintDataName:'episodeCardHeight',constraintDataValue:node.getBoundingClientRect().height}))
        }
    }, [characterEpisodesList.constraintData.listMediaCardLoading]);

    return (
        <Spin size="middle" spinning={characterEpisodesList.constraintData.listMediaCardLoading}>
            {!characterEpisodesList.constraintData.listMediaCardLoading ?
                <Row className={"Character-Episodes-List-Container"} gutter={[0, 20]}>
                    <Col span={24}>
                        <Row className={'Episodes-List-Container'} gutter={[12, 0]}>
                            <Col ref={episodesListHeightRef} span={8}>
                                <CardMedia image={characterEpisodesList.CardMediaEpisodeInfoList.image}
                                           name={characterEpisodesList.CardMediaEpisodeInfoList.name}
                                           description={characterEpisodesList.CardMediaEpisodeInfoList.species}
                                           textNameStyle={'Text-Big-Card-media'} textDescriptionStyle={'Description-Big-Card-media'}
                                />
                            </Col>
                            {characterEpisodesList.constraintData.episodeCardHeight !== null &&
                                <Col span={16}>
                                    <EpisodeList characterEpisodesList={characterEpisodesList}/>
                                </Col>
                            }
                        </Row>
                    </Col>
                    <Col className={'Recomended-Character-List-Container'} span={24}>
                        <Row >
                            <Col className={'Recomended-Characters-title-Header'} span={24}>
                                <span>Recomended for you</span>
                            </Col>
                            <Col span={24}>
                               <OwlCarouselComponent characterEpisodesList={characterEpisodesList}/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                :
                <div style={{height: '100vh'}}/>
            }
        </Spin>
    );
}

