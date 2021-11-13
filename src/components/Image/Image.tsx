import React, {FC} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

type Props = {
    src: string
    alt?: string
}

const Image: FC<Props> = ({src, alt}) => {
    return (
        <LazyLoadImage
            alt={alt}
            src={src}
        />
    )
}
export default Image;