import React, {useState} from "react";
import {Row, Col} from 'react-bootstrap';

import images from "../../commons/images";
import icons from "../../commons/icons";
// import { faFac } from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// styles
import './style.scss';
import MyPortfolio from "../../data/MyPortfolio";
import CVPort from '../../assets/files/cv-pawnpunnarai.zip';
import {Chrono} from "react-chrono";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const HomeScreen = () => {
    const [menu, setMenu] = useState('HOME');
    const [namePortfolio, setNamePortfolio] = useState({});

    const renderMenu = () => {
        return (
            <Row className="navbarMenu" style={{margin: 0}}>
                <Col xs="12" md="6">
                    <Row className="navbar-sec1" style={{alignItems: 'center'}}>
                        <img style={{width: 50, cursor: 'pointer'}}
                             src={images.imgLogo.default} onClick={() => setMenu('HOME')}/>
                        <p onClick={() => setMenu('HOME')}
                           style={{margin: 0, paddingLeft: 10, fontWeight: 600, cursor: 'pointer'}}>Pawnpunnarai's
                            Portfolio</p>
                    </Row>
                </Col>
                <Col xs="12" md="6" className="navbar-sec2">
                    <Row>
                        {/*<div className={menu === 'HOME' ? 'menuActive' : 'menu'} onClick={() => setMenu('ABOUT')}>*/}
                        {/*    <a>About Me</a>*/}
                        {/*</div>*/}
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

                <Row className="container-intro" style={{margin: 0}}>
                    <Col xs="12" md="6">
                        <img style={{width: '100%'}}
                             src={images.imgIntro.default}/>
                    </Col>
                    <Col xs="12" md="6" style={{color: '#635c53'}}>
                        <h1 style={{fontWeight: 600}}>Pawnpunnarai Saimoonkham</h1>
                        <h4 style={{fontWeight: 300}}>FrontEnd Developer, Web Developer, Mobile Developer and Software
                            Engineering</h4>
                        <Row style={{paddingTop: 30}}>
                            <Col>
                                <Row style={{margin: 0}}>
                                    <img style={{width: 50, height: 50}}
                                         src={icons.iconExperience.default}/>
                                    <Row style={{margin: 0, alignItems: 'center'}}>
                                        <p style={{margin: 0, fontWeight: 600}}>
                                            <span>3+ Years</span>
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
                                    <a href={CVPort} style={{margin: 0, fontWeight: 600}} className="text-download-cv">Download
                                        CV</a>
                                </Row>
                            </Row>
                        </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }

    const renderPortfolio = () => {
        return (
            <Row style={{margin: 0, paddingTop: 100}}>
                {MyPortfolio.MENU.map((att, index) => {

                    const fullImage = att.name === 'Urban Transit';
                    const squareImage = index === 2 || index === 3 || index === 6 || index === 8

                    return (
                        <Col xs="12" md="4" key={index}
                             className="cardPortfolio"
                             style={{
                                 borderColor: att.color,
                                 padding: fullImage ? 0 : 'auto',
                             }}
                             onClick={() => {
                                 setNamePortfolio(att);
                                 setMenu('PORTFOLIO_DETAIL');
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
                        </Col>
                    )
                })};
            </Row>
        )
    }

    const renderAboutMe = () => {
        const items = [{
            title: "March 2017 – Oct 2017 (8M)",
            cardTitle: "PranWorks Co., Ltd.",
            cardSubtitle: "Software Engineering (Intern)",
            cardDetailedText: "Front-End Develop about Web application by ASP.NET MVC, Back-End Develop by SqlDataSource control to connect to MySql database",
        },
            {
                title: "Nov 2017 – Dec 2018 (1Y)",
                cardTitle: "School of Public Policy (SPP CMU),",
                cardSubtitle: "Web-Developer (Front-End)",
                cardDetailedText: "I created and design a new website for my organization (School of Public Policy, Political Science, CMU) and developed by HTML, CSS, PHP.",
            }, {
                title: "Jan 2019 - Present",
                cardTitle: "SiamDApp (Thailand) Co.,Ltd.",
                cardSubtitle: "Web and Mobile Developer (Front-End)",
                cardDetailedText: "I developed CM-transit, Om Wallet application (Crypto wallet), Om Merchant (POS), CM-Bus Sell Ticket (POS) by using React Native. For Website i developed many website such as Tokenization Platform and Crowdfunding are using React JS,  Om Platform is using WordPress and CM-Bus Admin is using Preact and React",
            }];


        return (
            <div className="index-page">
                <div className="page-header header-filter">
                    <div className="squares square1"/>
                    <div className="squares square2"/>
                    <div className="squares square3"/>
                    <div className="squares square4"/>
                    <div className="squares square5"/>
                    <div className="squares square6"/>
                    <div className="squares square7"/>

                    <div className="blogSection">
                        <Row style={{margin: 0, display: 'flex'}}>

                            <h3 style={{
                                fontWeight: 900,
                                textAlign: 'center',
                                width: '100%',
                                padding: '20px 0'
                            }}>Education</h3>
                            <Row style={{margin: 0, paddingBottom: 30, width: '100%'}}>
                                <Col lg={3}/>
                                <Col lg={6} style={{
                                    backgroundColor: 'white',
                                    textAlign: 'center',
                                    border: '1px solid #800180',
                                    padding: 20,
                                    borderRadius: 25,
                                    margin: '10px 20px'
                                }}>
                                    <div>
                                        <h5>2010-2013</h5>
                                        <h4><b>Lampang Kanlayanee School, Thailand</b></h4>
                                        <h5>
                                            Major: Mathematics-Sciences
                                        </h5>
                                    </div>
                                </Col>
                                <Col lg={3}/>
                            </Row>
                            <Row style={{margin: 0, paddingBottom: 30, width: '100%'}}>
                                <Col lg={3}/>
                                <Col lg={6} style={{
                                    backgroundColor: 'white',
                                    textAlign: 'center',
                                    border: '1px solid #800180',
                                    padding: 20,
                                    borderRadius: 25,
                                    margin: '10px 20px'
                                }}>
                                    <div>
                                        <h5>2013-2016</h5>
                                        <h4><b>College of Arts Media and Technology, Chiang Mai University, Thailand
                                            bachelor’s Degree
                                        </b></h4>
                                        <h5>
                                            Major: Software Engineering
                                        </h5>
                                    </div>
                                </Col>
                                <Col lg={3}/>
                            </Row>
                            <h3 style={{fontWeight: 900, textAlign: 'center', width: '100%', padding: '20px 0'}}>Work
                                Experience</h3>
                            <Col lg={12}>
                                <Chrono items={items} mode="VERTICAL_ALTERNATING" theme={{
                                    primary: "purple",
                                    secondary: "#ffc0cb",
                                    cardBgColor: "white",
                                    cardForeColor: "black"
                                }} scrollable={{scrollbar: false}}/>
                            </Col>


                            <h3 style={{
                                fontWeight: 900,
                                textAlign: 'center',
                                width: '100%',
                                paddingTop: 50,
                            }}>Knowledge and Skills</h3>
                            <Row style={{margin: 0, paddingBottom: 30, width: '100%'}}>
                                <Col lg={2}/>
                                <Col lg={8} style={{
                                    backgroundColor: 'white',
                                    textAlign: 'center',
                                    border: '1px solid #800180',
                                    padding: 20,
                                    borderRadius: 25,
                                    margin: '10px 20px'
                                }}>
                                    <div>
                                        <p>
                                            <b>Familiar Software</b><br/>
                                            IntelliJ, Visual Studio, Figma
                                        </p>
                                        <p>
                                            <b>Familiar Programming Language</b><br/>
                                            ReactJS, React Native, HTML, CSS, SCSS, JavaScript, jQuery, Angular, MSSQL,
                                            Java, PHP, ASP.Net C#
                                        </p>
                                        <p>
                                            <b>Others Key</b><br/>
                                            Bootstrap, Github, Sourcetree, BitBucket, MVC, Entity Framework, Ionic
                                            Framework, Spring Framework
                                        </p>
                                        <p>
                                            <b> Others Software</b><br/>
                                            Telerik Reporting and Telerik Kendo UI (Grid), MS Office

                                        </p>
                                        <p>
                                            <b>Language</b><br/>
                                            Fair command in English (Speaking, listening, writing and reading).

                                        </p>
                                        <p>
                                            <b>Other</b><br/>
                                            Good command in Computer literacy.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={2}/>
                            </Row>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }


    const renderPortfolioDetail = () => {
        return (
            <div style={{paddingTop: 130}}>
                <h3 style={{textAlign: 'center'}}><b>{namePortfolio.name}</b></h3>
                <h6 style={{paddingTop: 20}}><b>Description: {namePortfolio.description}</b></h6>
                <h6><b>Skill: {namePortfolio.skill}</b></h6>
                <h6 style={{paddingBottom: 50}}><b>Ref: <a className="onHover"
                                                           href={namePortfolio.route}>{namePortfolio.name === 'SMART SIGNAGE' ? 'SMART SIGNAGE' : namePortfolio.route}</a></b>
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
            {menu === 'HOME' && renderHome()}
            {menu === 'RESUME' && renderAboutMe()}
            {menu === 'PORTFOLIO' &&
            <div className="portfolioSection">{renderPortfolio()}</div>}
            {menu === 'PORTFOLIO_DETAIL' &&
            <div className="portfolioSection">{renderPortfolioDetail()}</div>}

        </>
    )
};

export default HomeScreen;
