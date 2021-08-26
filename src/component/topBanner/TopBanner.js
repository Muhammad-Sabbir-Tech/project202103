import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import bannerImg from '../../Asset/images/pf1.png'

class TopBanner extends Component {
    render() {
        return (
            <>
                <Container className="topBannerContainer  text-center">
                    <Row className="d-flex justify-content-center">
                        <Col lg={7} md={9} sm={12}>
                            <div className="topBanner mt-md-5 pt-md-5 pb-5 text-center">
                                <h1>Top Quality Instrument To Explore</h1>
                                <p className="mt-4 text-muted">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, </p>

                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <img  src={bannerImg} className="img-fluid"/>
                        </Col>
                    </Row>

                </Container>
            </>
        );
    }
}

export default TopBanner;