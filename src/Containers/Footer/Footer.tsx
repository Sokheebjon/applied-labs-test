import React from "react";
import classes from "./footer.module.scss";
import arrow_right from "../../assets/svg/arrow-right.svg";
import mail from "../../assets/svg/mail.svg";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/Instagram.svg";
import {Button, Col, Container, FormControl, InputGroup, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <Container>
                <Row className="justify-content-between">
                    <Col md={5}>
                        <p className={classes.footer_title}>Newsletter</p>
                        <InputGroup className={classes.form}>
                            <FormControl
                                className={classes.input}
                                placeholder="Enter your email"
                            />
                            <Button variant="link">
                                <img src={arrow_right} alt=""/>
                            </Button>
                        </InputGroup>
                        <div className={classes.social_media}>
                            <a href="https://www.facebook.com"><img src={facebook} alt=""/></a>
                            <a href="https://www.instagram.com"><img src={instagram} alt=""/></a>
                            <a href="https://mail.google.com/mail"><img src={mail} alt=""/></a>
                        </div>
                    </Col>
                    <Col md={3}>
                        <p className={classes.footer_title}>Again Faster</p>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Gift Cards</li>
                            <li>Military/LEO Discount</li>
                            <li>Financing</li>
                            <li>Retail Store</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <p className={classes.footer_title}>Again Faster</p>
                        <ul className="list-unstyled">
                            <li>Introductions</li>
                            <li>Shipping</li>
                            <li>Returns and Warranty</li>
                            <li>Contact Us</li>
                            <li>Shop in Store</li>
                        </ul>
                    </Col>
                </Row>
                <p className={classes.copyright}>©2020 Again Faster. All Rights Reserved</p>
            </Container>
        </div>
    )
}

export default Footer;