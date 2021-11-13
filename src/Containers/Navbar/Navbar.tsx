import React from "react";
import {Navbar as BootstrapNavbar, Nav} from "react-bootstrap";
import {Container} from "../../components";
import classes from "./navbar.module.scss";
import search__icon from "../../assets/svg/search.svg";
import account__icon from "../../assets/svg/account.svg";
import basket__icon from "../../assets/svg/basket.svg";


const Navbar = () => {
    return (
        <Container>
            <BootstrapNavbar className={classes.navbar} expand="lg">
                <BootstrapNavbar.Toggle className={classes.toggleButton} aria-controls="basic-navbar-nav"/>
                <BootstrapNavbar.Brand className={classes.brand} href="#home">Again / faster</BootstrapNavbar.Brand>
                <div className="d-lg-none">
                    <img src={basket__icon} alt=""/>
                </div>
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto pe-5">
                        <Nav.Link href="#home">lorem</Nav.Link>
                        <Nav.Link href="#aa">consectetur</Nav.Link>
                        <Nav.Link href="#cc">tempor</Nav.Link>
                        <Nav.Link href="#dd">magna</Nav.Link>
                        <Nav.Link href="#rr">reprehenderit</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            <img src={search__icon} alt=""/>
                        </Nav.Link>
                        <Nav.Link href="#memes">
                            <img src={account__icon} alt=""/>
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
                <Nav.Link className="d-none d-lg-block" href="#memes">
                    <img src={basket__icon} alt=""/>
                </Nav.Link>
            </BootstrapNavbar>
        </Container>
    )
}

export default Navbar;
