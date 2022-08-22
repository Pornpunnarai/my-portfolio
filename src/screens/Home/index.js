import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {faFacebookSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useHistory} from "react-router-dom";

// Commons
import images from "../../commons/images";
import icons from "../../commons/icons";

// Styles
import './style.scss';
import CVPort from '../../assets/files/cv-pawnpunnarai.zip';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomeScreen = () => {
    const history = useHistory();
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
                        <div className={'menu'}
                             onClick={() => history.push(`/resume`)}>
                            <a>Resume</a>
                        </div>
                        <div className={'menu'}
                             onClick={() => history.push(`/portfolio`)}>
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

    const renderHome = () => {
        return (
            <div className="section section-header">
                <div className="points">
                    <div className="point point-floating-1"></div>
                    <div className="point point-floating-2"></div>
                    <div className="point point-floating-3"></div>
                    <div className="point point-floating-4"></div>
                    <div className="point point-floating-5"></div>
                    <div className="point point-floating-6"></div>
                    <div className="point point-floating-7"></div>
                    <div className="point point-floating-8"></div>
                    <div className="point point-floating-9"></div>
                </div>

                <Container>
                    <Row className="container-intro" style={{margin: 0}}>
                        <Col xs="12" md="6">
                            <img style={{width: '100%'}}
                                 src={images.imgIntro.default}/>
                        </Col>
                        <Col xs="12" md="6" style={{color: '#635c53'}}>
                            <h1 style={{fontWeight: 600}}>Pawnpunnarai Saimoonkham</h1>
                            <h4 style={{fontWeight: 300}}>Front End Developer, Web Developer, Mobile Developer and
                                Software
                                Engineering</h4>
                            <Row style={{paddingTop: 30}}>
                                <Col>
                                    <Row style={{margin: 0}}>
                                        <img style={{width: 50, height: 50}}
                                             src={icons.iconExperience.default}/>
                                        <Row style={{margin: 0, alignItems: 'center'}}>
                                            <p style={{margin: 0, fontWeight: 600}}>
                                                <span>4+ Years</span>
                                                <br/>
                                                <span className="text-experience">Experience</span>
                                            </p>
                                        </Row>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <img style={{width: 50, height: 50}}
                                             src={icons.iconAchieve.default}/>
                                        <Row style={{margin: 0, alignItems: 'center'}}>
                                            <p style={{margin: 0, fontWeight: 600}}>
                                                <span>10+ Projects</span>
                                                <br/>
                                                <span className="text-complete">Complete</span>
                                            </p>
                                        </Row>
                                    </Row>
                                </Col><Col>
                                <Row>
                                    <img style={{width: 50, height: 50}}
                                         src={icons.iconCV.default}/>
                                    <Row style={{margin: 0, alignItems: 'center'}}>
                                        <a href={CVPort} style={{margin: 0, fontWeight: 600}}
                                           className="text-download-cv">Download
                                            CV</a>
                                        {/*<div onClick={() => renderPDF()} style={{margin: 0, fontWeight: 600}}*/}
                                        {/*   className="text-download-cv">Go to Resume*/}
                                        {/*    CV</div>*/}
                                    </Row>
                                </Row>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

    return (
        <>
            {renderMenu()}
            {renderHome()}
        </>
    )
};

export default HomeScreen;
