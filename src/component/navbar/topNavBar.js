import React, {Component} from 'react';
import ReactToPrint from 'react-to-print';
import '../../Asset/css/style.css'
import '../../Asset/css/bootstrap.min.css'
import '../../Asset/css/responsive.css'
import {Button, Container, Nav, Navbar} from "react-bootstrap";


class TopNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navShadow:""
        }
    }


    onScroll=()=>{
        if(window.scrollY>50){
            this.setState({
                navShadow:"navShadow"
            })
        }else {
            this.setState({
                navShadow:""
            })

        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }

    render() {
        return (
            <>
                <Navbar sticky="top" className={this.state.navShadow}   bg="white" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home"><span className="topNavBarBrand">Company Name</span></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto navMenu">
                                <Nav.Link href="#home"><span>Home</span></Nav.Link>
                                <Nav.Link href="#link"><span>Feature</span></Nav.Link>
                                <Nav.Link href="#link"><span>Pricing</span></Nav.Link>
                                <Nav.Link href="#link"><span>Testimonial</span></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default TopNavBar;
