import React, {Component} from "react";
import classes from "./Banner.module.css";

class Banner extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={classes.container}>Sanatana dhanam</div>
            </React.Fragment>
        )
    }
}

export default Banner;