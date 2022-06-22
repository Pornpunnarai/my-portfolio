import React, {useState} from "react";
import {Container, Row, Col} from 'react-bootstrap';

import images from "../../commons/images";
import {faFacebookSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './style.scss';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useHistory} from "react-router-dom";

const PortfolioDetailScreen = (props) => {
    const history = useHistory();
    const {data} = props.location.state;
    const renderMenu = () => {
        return (
            <Row className="navbarMenu" style={{margin: 0}}>
                <Col xs={12} md={6}>
                    <Row className="navbar-sec1" style={{alignItems: 'center'}}>
                        <img style={{width: 50, cursor: 'pointer'}}
                             src={images.imgLogo.default} onClick={() => history.push(`/`)}/>
                        <p onClick={() => history.push(`/`)}
                           style={{margin: 0, paddingLeft: 10, fontWeight: 600, cursor: 'pointer'}}>Pawnpunnarai's
                            Portfolio</p>
                    </Row>
                </Col>
                <Col xs={12} md={6} className="navbar-sec2">
                    <Row>
                        <div className={'menu'} onClick={() => window.location.href = `/resume`}>
                            <a>Resume</a>
                        </div>
                        <div className={'menuActive'}
                             onClick={() => {
                                 window.location.href = `/portfolio`;
                             }}>
                            <a>Portfolio</a>
                        </div>
                        <div>
                            <a className="iconFac" href="https://www.facebook.com/kudokung.w/"><FontAwesomeIcon
                                style={{width: 30, cursor: 'pointer'}} icon={faFacebookSquare}/></a>
                            <a className="iconIns" href="https://www.instagram.com/kulzoul/"><FontAwesomeIcon
                                icon={faInstagram}/></a>
                        </div>
                    </Row>
                </Col>
            </Row>
        )
    }

    const renderPortfolioDetail = () => {
        return (
            data &&
            <div style={{paddingTop: 130}}>
                <h3 style={{textAlign: 'center'}}><b>{data.name}</b></h3>
                <h6 style={{paddingTop: 20}}><b>Description: {data.description}</b></h6>
                <h6><b>Skill: {data.skill}</b></h6>
                <h6 style={{paddingBottom: 50}}>
                    <b>Ref:
                        <a className="onHover"
                           href={data.route}>{data.name === 'SMART SIGNAGE' ? 'SMART SIGNAGE' : data.route}</a>
                    </b>
                </h6>
                <Carousel autoPlay>
                    {data && data.img.map(att => {
                        return (<div>
                            <img alt="" src={att}/>
                        </div>)
                    })}
                </Carousel>
            </div>
        )
    }

    return (
        <>
            {renderMenu()}
            <div className="portfolioSection">{renderPortfolioDetail()}</div>
        </>
    )
};

export default PortfolioDetailScreen;
