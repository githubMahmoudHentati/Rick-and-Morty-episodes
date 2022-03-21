import React from "react";
import {Row, Col,Card,Spin} from 'antd';
import '../charactersList.scss';
import {CardMedia} from "../../components/cardMedia/cardMedia";
import {Hooks} from "../utils/hooks";


export const ListCardMedia = ({listCardMediaInfo,listMediaCardLoading}) => {

    const {getCharacterEpisodesList}=Hooks()
    return (
        <div>
            <Spin size="middle" spinning={listMediaCardLoading}>
                <Card className={"List-Card-Media"}>
                    <Row gutter={[0,20]}  className={"Card-Media-Container"} >
                        {
                            listCardMediaInfo && listCardMediaInfo.map((media, index) => {
                                return (
                                    <Col onClick={async () => {
                                        await getCharacterEpisodesList(media)
                                    }} key={index}
                                         lg={5}md={11} sm={20} xs={20}>
                                        {!listMediaCardLoading &&
                                            <CardMedia index={index} name={media.name} description={media.species}
                                                       image={media.image} textNameStyle={'Text-Card-media'}
                                                       textDescriptionStyle={'Description-Card-media'}
                                            />
                                        }
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Card>
            </Spin>
        </div>
    )
}