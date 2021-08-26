import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import coreFeature from '../../Asset/images/core feature lt.jpg'

class CoreFeature extends Component {
    render() {
        return (
            <>
                <Container className="mt-md-5 mt-sm-2 CoreFeatureContainer">
                    <Row className="text-justify align-items-center">
                        <Col lg={5} md={6} sm={12}>
                            <p className="coreFt pb-2 mb-0">Core features</p>
                            <h4>Smart Jackpots that you may love this anytime & anywhere</h4>
                            <p className="coreFtDes">Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.</p>

                        </Col>
                        <Col lg={7} md={6} sm={12} className="text-center">
                            <img src={coreFeature} className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default CoreFeature;