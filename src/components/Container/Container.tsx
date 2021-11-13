import React, {FC} from "react";
import classes from "./container.module.scss"

interface Props {
    className?: string,
    fluid?: boolean
}

const Container: FC<Props> = ({children, className, fluid}) => {
    return (
        <div className={fluid ? `container-fluid ${classes.container} ${className}` : `${classes.container} ${className}`}>
            {children}
        </div>
    )
}
export default Container;
