import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class PriceComponent extends Component {
    render() {
        return (
            <>
                <Container className="my-5 pricingComponent">
                    <p className="pb-0 mb-0">Fof get or customize this template</p>
                    <p className="mb-0 mt-2">Muhammad Sabbir Hossain </p>
					<p className="mb-0 ">contact : +880 1789 096 018</p>
					<p className="mb-0 ">Address : Katia Amtala Mor, Satkhira Sadar, Satkhira</p>
					<p className="mb-0 ">Email : g.shanto18@gmail.com</p>
                    <Row>
                       <Col lg={4} md={4} sm={12}>

                       </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default PriceComponent;