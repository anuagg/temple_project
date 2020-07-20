import React, {Component} from "react";
import classes from "./About.module.css";
import Logo from "../../images/logo.png";
import * as constants from "../../hoc/constants/contants";
import {connect} from "react-redux";
import * as actionTypes from "../../hoc/store/action";

class AboutSanatana extends Component{

    getContent = () => {
        let content = this.props.language === "English" ? constants.aboutContentEnglish : constants.aboutContentTelugu;
        return Object.keys(content).map(function(key) {
            return (
                <div key={key}>
                    <div className={classes.question} dangerouslySetInnerHTML={{__html: content[key].question}}>
                    </div>
                    <div className={classes.answer} dangerouslySetInnerHTML={{__html: content[key].answer}}>
                    </div>
                </div>
            );
        });
    }

    getFinalStatement = () => {
        return this.props.language === "English" ? constants.FINAL_STATEMENT_ENGLISH : constants.FINAL_STATEMENT_TELUGU;
    }

    render() {
        return (
            <div className={classes.container}>
                <img src={Logo} alt=""/>
                {this.getContent()}
                {this.getFinalStatement()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.language
    }
}

const mapDispatcherToProps = dispatch => {
    return {
        onLanguageChange : (language) => dispatch({type: actionTypes.CHANGE_LANGUAGE, language: language})
    }
}

export default connect(mapStateToProps,mapDispatcherToProps)(AboutSanatana);