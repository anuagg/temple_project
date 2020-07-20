import React from "react";
import classes from "./About.module.css";
import Logo from "../../images/logo.png";
import * as constants from "../../hoc/constants/contants";

const AboutSanatana = () => {
    const listItems = Object.keys(constants.aboutContentEnglish).map(function(key) {
        return (
            <div key={key}>
                <div className={classes.question} dangerouslySetInnerHTML={{__html: constants.aboutContentEnglish[key].question}}>
                </div>
                <div className={classes.answer} dangerouslySetInnerHTML={{__html: constants.aboutContentEnglish[key].answer}}>
                </div>
            </div>
        );
    });

    const finalStatement = constants.FINAL_STATEMENT_ENGLISH;
    return (
        <div className={classes.container}>
            <img src={Logo} alt="" />
            {listItems}
            {finalStatement}
        </div>
    );
}

export default AboutSanatana;