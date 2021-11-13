import React, {FC} from "react";
import {Card} from "react-bootstrap";
import {Image} from "../../components";
import classes from "./products-card.module.scss";
import StarRatings from "react-star-ratings"

type Props = {
    title?: string
    img: string,
    rating?: number,
    price?: string
}

const ProductCard: FC<Props> = ({
                                    title,
                                    img,
                                    rating,
                                    price
                                }) => {
    return (
        <Card className={classes.card}>
            <Image src={img}/>
            <Card.Body>
                <Card.Title className={classes.title}>{title}</Card.Title>
                <Card.Text>
                    <StarRatings
                        rating={rating}
                        starRatedColor="#C2A578"
                        starDimension="16px"
                        starSpacing="4px"
                    />
                    <p className={classes.price}>
                        {price}
                    </p>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default ProductCard;