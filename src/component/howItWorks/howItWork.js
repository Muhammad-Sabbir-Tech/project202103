import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import axios from "axios";

class HowItWork extends Component {

    componentDidMount() {
        let name = "Muhammad Samiul Islam Sami"
        let email = "try@try.com"
        let phone = "01789999999"
        
    }

    render() {
        return (
            <>
                <div className="howItWorkBg mt-5 px-0 mx-0">
                    <Container className="py-5  text-center">
                        <p className="howItWorkTop text-white mb-0">Whats the function</p>
                        <h5 className="">Let’s see how it works</h5>
                        <Row className="text-left mt-5">
                           <Col className="pb-5 pb-md-0" lg={3} md={6} sm={12}>
                               <h4>01</h4>
                               <h4>Set disbursement Instructions</h4>
                               <span>Get your blood tests delivered at home collect a sample from the your blood tests.</span>
                           </Col>
                            <Col className="pb-5 pb-md-3 pb-lg-0" lg={3} md={6} sm={12}>
                                <h4>02</h4>
                                <h4>Assembly retrieves funds from your account</h4>
                                <span>Get your blood tests delivered at home collect a sample from the your blood tests.</span>
                            </Col>
                            <Col className="pb-5 pb-md-0" lg={3} md={6} sm={12}>
                                <h4>03</h4>
                                <h4>Assembly initiates disbursement</h4>
                                <span>Get your blood tests delivered at home collect a sample from the your blood tests.</span>
                            </Col>
                            <Col className="pb-5 pb-md-0" lg={3} md={6} sm={12}>
                                <h4>04</h4>
                                <h4>Customer receives funds payment</h4>
                                <span>Get your blood tests delivered at home collect a sample from the your blood tests.</span>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

export default HowItWork;