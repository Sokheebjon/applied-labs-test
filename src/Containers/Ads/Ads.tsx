import React, {FC} from "react";
import classes from "./ads.module.scss"

type Props = {
    title: string;
}

const Ads: FC<Props> = (title) => {
    return (
        <div className={classes.ads}>
            <p>20% OFF Sitewide until 9/12</p>
        </div>
    )
}

export default Ads;
