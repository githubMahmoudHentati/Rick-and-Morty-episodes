import React from "react";
import {Row, Col,Card} from 'antd';
import '../characterEpisodesList.scss';
import OwlCarousel from "react-owl-carousel";


export const OwlCarouselComponent =({characterEpisodesList})=>{
    return(
        <OwlCarousel className={'owlCarousel'} items={6} loop margin={10}
                     nav
                     navText={[

                         "<span class='owl-prev' aria-hidden='true'>&#8249;</span>",
                         "<span class='owl-prev' aria-hidden='true'>&#8250;</span>"
                     ]}
        >
            {characterEpisodesList.charactersSameSpeciesList.length > 0 && characterEpisodesList.charactersSameSpeciesList.map((character,characterIndex) => {
                return (
                    <li key={characterIndex.toString()}>
                        <Row key={characterIndex} gutter={[0, 10]} className="Card-Character-Species">
                            <Col  span={24}>
                                <img
                                    src={character.image}/>
                            </Col>
                            <Col className={"Title-Character-Species"} span={23} offset={1}>
                                <span >{character.name}</span>
                            </Col>
                        </Row>
                    </li>
                )
            })
            }
        </OwlCarousel>
    )
}