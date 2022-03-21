import './charactersList.scss';
import React, {useEffect, useState} from "react";
import {Row, Col,Pagination,Spin} from 'antd'
import {GraphQLFetchData} from "./utils/graphQLFetchData";
import{SearchHeader} from "./components/searchHeader";
import {ListCardMedia} from "./components/listCardMedia";
import {useSelector} from "react-redux";
import {Hooks} from "./utils/hooks";

export const CharactersList =() =>{
    const {getEpisodeDataCall,getEpisodeData}=GraphQLFetchData()
    const {getCurrentPage,getCharacterEpisodesList}=Hooks(getEpisodeDataCall)
    const charactersList = useSelector((state) => state.CharactersListReducer)



    return (
            <Row className={'Card-Characters-List'} gutter={[0, 20]}>
                <Col span={24}>
                    <SearchHeader charactersList={charactersList} getEpisodeDataCall={getEpisodeDataCall}/>
                </Col>
                <Col span={24}>
                    <Row gutter={[0, 10]}>
                        <Col  className={'Characters-title-Header'} span={24}>
                            <span >Morty Characters List On Perseus</span>
                        </Col>
                        <Col span={24}>
                            <ListCardMedia  listMediaCardLoading={charactersList.constraintData.listMediaCardLoading} listCardMediaInfo={charactersList.listCardMediaInfo}/>
                        </Col>
                        <Col  span={24}>
                            <Pagination onChange={getCurrentPage} defaultCurrent={charactersList.constraintData.currentPage} defaultPageSize={20} total={826} showSizeChanger={false}/>
                        </Col>
                    </Row>
                </Col>
            </Row>
    );
}

