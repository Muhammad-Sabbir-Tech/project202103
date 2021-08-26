import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAccessibleIcon} from "@fortawesome/free-brands-svg-icons";
import {faBriefcase, faCrown, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

class FeatureQuality extends Component {



    componentDidMount() {
        AOS.init({
            offset: 200,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }

    render() {
        return (
            <>
                <Container className="featureContainer mt-5 pt-5 text-center">
                    <p className="pb-0 mb-0">Quality features</p>
                    <h4>Amazing useful features</h4>
                    <Row className="mt-5 ">
                        <Col lg={6} md={6} sm={12} className=" featureCol text-justify">
                           <Row className="align-items-center">
                               <Col  lg={2} md={3} sm={12}>
                                   <FontAwesomeIcon className="featureIcon" icon={faAccessibleIcon} />
                               </Col>
                               <Col  lg={10} md={9} sm={12}>
                                   <h5 className="mt-3">Fast Performance</h5>
                                   <p className="text-muted">Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.</p>
                               </Col>
                           </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12} className=" featureCol text-justify">
                            <Row className="align-items-center">
                                <Col  lg={2} md={3} sm={12}>
                                    <FontAwesomeIcon className="featureIcon" icon={faBriefcase} />
                                </Col>
                                <Col  lg={10} md={9} sm={12}>
                                    <h5 className="mt-3">Fast Performance</h5>
                                    <p className="text-muted">Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12} className=" featureCol text-justify">
                            <Row className="align-items-center">
                                <Col  lg={2} md={3} sm={12}>
                                    <FontAwesomeIcon className="featureIcon" icon={faCrown} />
                                </Col>
                                <Col  lg={10} md={9} sm={12}>
                                    <h5 className="mt-3">Fast Performance</h5>
                                    <p className="text-muted">Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12} className=" featureCol text-justify">
                            <Row className="align-items-center">
                                <Col lg={2} md={3} sm={12}>
                                    <FontAwesomeIcon className="featureIcon" icon={faEnvelope} />
                                </Col>
                                <Col  lg={10} md={9} sm={12}>
                                    <h5 className="mt-3">Fast Performance</h5>
                                    <p className="text-muted">Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </>
        );
    }
}

export default FeatureQuality;