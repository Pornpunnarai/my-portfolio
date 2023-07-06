import React from "react";
import {Row, Col} from 'react-bootstrap';

import images from "../../commons/images";
import {faFacebookSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './style.scss';
import MyPortfolio from "../../data/MyPortfolio";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useHistory, Link} from "react-router-dom";

const PortfolioScreen = () => {
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
                        <div className={'menuActive'}
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
    const renderPortfolio = () => {
        return (
            <Row style={{margin: 0, paddingTop: 100}}>
                {MyPortfolio.MENU.map((att, index) => {

                    const fullImage = att.name === 'Urban Transit';
                    const squareImage = index === 2 || index === 3 || index === 6 || index === 8 || index === 17

                    return (
                        <Col xs="12" md="4" key={index}
                             className="cardPortfolio"
                             style={{
                                 borderColor: att.color,
                                 padding: fullImage ? 0 : 'auto',
                             }}
                        >
                            <>
                                <Link
                                    to={{
                                        pathname: '/portfolio/detail',
                                        state: {
                                            data: att
                                        }
                                    }}
                                >
                                    <p className="textSkill">{att.skill}</p>

                                    {fullImage ?
                                        <img src={att.image} className="cardPortfolioFullImg"/>
                                        :
                                        <div className="port">
                                            <div className="blockImage">
                                                <img src={att.image}
                                                     style={{width: squareImage ? '40%' : '70%'}}/>
                                            </div>
                                            <div>
                                                <p style={{
                                                    color: att.color,
                                                    textAlign: "center",
                                                    fontWeight: 900
                                                }}>{att.name}</p>
                                            </div>
                                        </div>
                                    }
                                </Link>
                            </>
                        </Col>
                    )
                })};
            </Row>
        )
    }

    return (
        <>
            {renderMenu()}
            <div className="portfolioSection">{renderPortfolio()}</div>
        </>
    )
};

export default PortfolioScreen;
