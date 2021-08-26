import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faBolt, faBriefcase, faCrow, faCrown, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAccessibleIcon} from "@fortawesome/free-brands-svg-icons";

class FeatureComponent extends Component {
    render() {
        return (
            <>
                <Container className="featureContainer mt-5 text-center">
                    <p className="pb-0 mb-0">what is the function</p>
                    <h4>All The Featur Of Product</h4>
                   <Row className="mt-5 ">
                       <Col lg={3} md={6} sm={12} className=" featureCol text-justify">
                           <FontAwesomeIcon className="featureIcon" icon={faAccessibleIcon} />
                           <h5 className="mt-3">Fast Performance</h5>
                           <p className="text-muted">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                       </Col>
                       <Col lg={3} md={6} sm={12} className=" featureCol text-justify">
                           <FontAwesomeIcon className="featureIcon" icon={faBriefcase} />
                           <h5 className="mt-3">Fast Performance</h5>
                           <p className="text-muted">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                       </Col>
                       <Col lg={3} md={6} sm={12} className=" featureCol text-justify">
                           <FontAwesomeIcon className="featureIcon" icon={faCrown} />
                           <h5 className="mt-3">Fast Performance</h5>
                           <p className="text-muted">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                       </Col>
                       <Col lg={3} md={6} sm={12} className=" featureCol text-justify">
                           <FontAwesomeIcon className="featureIcon" icon={faEnvelope} />
                           <h5 className="mt-3">Fast Performance</h5>
                           <p className="text-muted">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                       </Col>
                   </Row>

                </Container>

            </>
        );
    }
}

export default FeatureComponent;