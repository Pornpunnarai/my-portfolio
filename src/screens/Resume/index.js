import React from "react";
import {Row, Col} from 'react-bootstrap';

import images from "../../commons/images";
import {faFacebookSquare, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './style.scss';
import MyPortfolio from "../../data/MyPortfolio";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useHistory} from "react-router-dom";
import {Chrono} from "react-chrono";


const ResumeScreen = () => {
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
                        <div className={'menuActive'}
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

    const renderAboutMe = () => {
        const items = [{
            title: "March 2021 - Present",
            cardTitle: "Socket 9 Co., Ltd. (HQ)",
            cardSubtitle: "Mobile and Web Developer (Front-End)",
            cardDetailedText: "I developed the DLT Driver and SCB Business Anywhere using React Native. HandiGo and Tspace Project was developed using React JS. and the current project, ASAPH, was developed using TypeScript and implemented a live streaming application using VideoSDK.",
        },
            {
                title: "Jan 2019 - Feb 2021 (2Y 2M)",
                cardTitle: "SiamDApp (Thailand) Co.,Ltd.",
                cardSubtitle: "Web and Mobile Developer (Front-End)",
                cardDetailedText: "Using React Native, I developed CM-transit, Om Wallet application (Crypto wallet), Om Merchant (POS), and CM-Bus Sell Ticket (POS). For websites, I developed Tokenization Platform and Crowdfunding using React JS, Om Platform using WordPress, and CM-Bus Admin using Preact and React.",
            },
            {
                title: "Nov 2017 – Dec 2018 (1Y)",
                cardTitle: "School of Public Policy (SPP CMU),",
                cardSubtitle: "Web-Developer (Front-End)",
                cardDetailedText: "I designed and developed a new website for my organization (CMU's School of Public Policy and Political Science) using HTML, CSS, and PHP.",
            }, {
                title: "March 2017 – Oct 2017 (8M)",
                cardTitle: "PranWorks Co., Ltd.",
                cardSubtitle: "Software Engineering (Intern)",
                cardDetailedText: "I developed a Front-End Web applications are built with ASP.NET MVC. SqlDataSource control was used to develop a back-end that connected to a MySql database.",
            }
        ];


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
                                            ReactJS, React Native, HTML, CSS, SCSS, JavaScript, TypeScript, jQuery, Angular, MSSQL,
                                            Java, PHP, ASP.Net C#
                                        </p>
                                        <p>
                                            <b>Others Key</b><br/>
                                            Bootstrap, Github, Sourcetree, BitBucket, MVC, Entity Framework, Ionic
                                            Framework, Spring Framework
                                        </p>
                                        <p>
                                            <b> Others Software</b><br/>
                                            Video SDK (Live Streaming SDK),
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

    return (
        <>
            {renderMenu()}
            <div className="portfolioSection">{renderAboutMe()}</div>
        </>
    )
};

export default ResumeScreen;
