import React, {useState} from "react";
import {Container, Row, Col} from 'react-bootstrap';

import images from "../../commons/images";
import icons from "../../commons/icons";
import {faFacebookSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './style.scss';
import MyPortfolio from "../../data/MyPortfolio";
import CVPort from '../../assets/files/cv-pawnpunnarai.zip';
import {Chrono} from "react-chrono";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const PortfolioDetailScreen = () => {
    const [menu, setMenu] = useState('PORTFOLIO');
    const [namePortfolio, setNamePortfolio] = useState({});

    const renderMenu = () => {
        return (
            <Row className="navbarMenu" style={{margin: 0}}>
                <Col xs={12} md={6}>
                    <Row className="navbar-sec1" style={{alignItems: 'center'}}>
                        <img style={{width: 50, cursor: 'pointer'}}
                             src={images.imgLogo.default} onClick={() => setMenu('HOME')}/>
                        <p onClick={() => setMenu('HOME')}
                           style={{margin: 0, paddingLeft: 10, fontWeight: 600, cursor: 'pointer'}}>Pawnpunnarai's
                            Portfolio</p>
                    </Row>
                </Col>
                <Col xs={12} md={6} className="navbar-sec2">
                    <Row>
                        <div className={menu === 'HOME' ? 'menuActive' : 'menu'} onClick={() => setMenu('ABOUT')}>
                            <a>About Me</a>
                        </div>
                        <div className={menu === 'RESUME' ? 'menuActive' : 'menu'} onClick={() => setMenu('RESUME')}>
                            <a>Resume</a>
                        </div>
                        <div className={menu === 'PORTFOLIO' ? 'menuActive' : 'menu'}
                             onClick={() => setMenu('PORTFOLIO')}>
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

    const renderPortfolioDetail = (name) => {
        return (
            <div style={{paddingTop: 130}}>
                <h3 style={{textAlign: 'center'}}><b>{namePortfolio.name}</b></h3>
                <h6 style={{paddingTop: 20}}><b>Description: {namePortfolio.description}</b></h6>
                <h6><b>Skill: {namePortfolio.skill}</b></h6>
                <h6 style={{paddingBottom: 50}}>
                    <b>Ref:
                        <a className="onHover"
                           href={namePortfolio.route}>{namePortfolio.name === 'SMART SIGNAGE' ? 'SMART SIGNAGE' : namePortfolio.route}</a>
                    </b>
                </h6>
                <Carousel autoPlay>
                    {namePortfolio && namePortfolio.img.map(att => {
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
