import React, {Component} from 'react';
import Container from "react-bootstrap/cjs/Container";
import {Col, Row} from "react-bootstrap";
import serviceImg from '../../Asset/images/service.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faCrown} from "@fortawesome/free-solid-svg-icons";

class OurService extends Component {
    render() {
        return (
            <>
                <Container className="serviceContainer mt-5">
                    <Row className="align-items-center pt-md-5">
                       <Col lg={7} md={6} sm={12}>
                           <img src={serviceImg} className="img-fluid"/>
                       </Col>
                        <Col lg={5} md={6} sm={12}>
                            <p>Our Service</p>
                            <h1>Business Goals Achieved with Design</h1>
                            <Row className="mt-5">
                                <Col lg={12} md={12} sm={12}>
                                    <FontAwesomeIcon className="serviceIcon" icon={faBriefcase} />
                                    <h5 className="mt-3">Fast Performance</h5>
                                    <p className="text-muted">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                                </Col>
                                <Col lg={12} md={12} sm={12}>
                                    <FontAwesomeIcon className="serviceIcon" icon={faCrown} />
                                    <h5 className="mt-3">Fast Performance</h5>
                                    <p className="text-muted">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default OurService;