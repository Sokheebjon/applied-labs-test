import React from 'react';
import {Container, Layout} from "./components";
import {DumbbellTypes} from "./Containers";
import {Col, Row} from "react-bootstrap";
import ProductCards from "./Containers/ProductCards";
import {recom_image1, recom_image2, recom_image3, recom_image4} from "./assets/images";


function App() {

    const productList = [
        {
            title: "product name",
            img: recom_image1,
            rating: 5,
            price: "34.00$"
        },
        {
            title: "product name",
            img: recom_image2,
            rating: 5,
            price: "34.00$"
        },
        {
            title: "product name",
            img: recom_image3,
            rating: 5,
            price: "34.00$"
        },
        {
            title: "product name",
            img: recom_image4,
            rating: 5,
            price: "34.00$"
        }
    ];

    return (
        <Layout>
            <section>
                <DumbbellTypes/>
            </section>
            <section style={{padding: "80px 0"}}>
                <Container>
                    <h2 className="recom_title pb-3">You might also like</h2>
                    <Row>
                        {productList.map((d, i) => (
                            <Col md={3}>
                                <ProductCards img={d.img} rating={d.rating} price={d.price} title={d.title} key={i}/>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </Layout>
    );
}

export default App;
