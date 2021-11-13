import React from "react";
import classes from "./dumbbell.module.scss";
import {Col, Row} from "react-bootstrap";
import {hammer, training1, training2} from "../../assets/images";
import {Container} from "../../components";


const DumbbellTypes = () => {
    return (
        <div className={classes.blackSide}>
            <Container>
                <Row className={classes.hummer__section}>
                    <Col md={6} className={classes.section__content}>
                        <h3>Rubber Hex Dumbbells</h3>
                        <p className={classes.section__article}>Again Faster® Rubber Hex Dumbbells offer one of the most
                            effective ways to add variance
                            to any
                            training program. Functional dumbbell movements cultivate stability, coordination and
                            strength
                            in ways that cannot be achieved using a barbell. Lighter dumbbells are great tools for
                            accommodating athletes with an injury or those not yet comfortable with a bar. Whether
                            you are
                            making your first equipment purchase or looking to expand your gym's capabilities,
                            making
                            dumbbells a priority will take your training to the next level.
                        </p>
                        <p>Need a way to organize your weights? Check out some of our Storage Options.</p>
                    </Col>
                    <img className={`${classes.hammer__img} col-md-6`} src={hammer} alt=""/>
                </Row>
                <Row className={classes.row}>
                    <Col className="order-md-0" md={6}>
                        <section>
                            <img className="img-fluid" src={training1} alt=""/>
                        </section>
                    </Col>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <section className={classes.section}>
                            <p className={classes.muted}>Here’s what you need to know about our dumbbells</p>
                            <ul>
                                <li className={classes.dumbbell_info}> Texture design for better grip during strength
                                    and endurance
                                    work
                                </li>
                                <li className={classes.dumbbell_info}> Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                </li>
                                <li className={classes.dumbbell_info}> Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem
                                    accusantium
                                    doloremque laudantium, totam rem aperiam
                                </li>
                            </ul>
                        </section>
                    </Col>
                </Row>
                <Row className={classes.row}>
                    <Col className="d-flex justify-content-center align-items-center" md={6}>
                        <section>
                            <p className={classes.section_title}>
                                Perfect for indoor and outdoor workouts
                            </p>
                        </section>
                    </Col>
                    <Col md={6}>
                        <section>
                            <img className="img-fluid" src={training2} alt=""/>
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default DumbbellTypes;
