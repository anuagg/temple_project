import React, {Component} from "react";
import classes from "./RegistrationForm.module.css";
import {connect} from "react-redux";
import * as actionTypes from "../../hoc/store/action";

class RegistrationForm extends Component {
    state = {
        firstName: "",
        lastName: "",
        emailId: "",
        noOfSlokas: 1,
        englishPlaceholder : {
            firstName: "First Name",
            lastName: "Last Name",
            emailId: "Email address (joe@example.com)",
            noOfSlokas: "Number of Slokas",
            register: "REGISTER"
        },
        teluguPlaceholder : {
            firstName: "మీ పేరు:",
            lastName: "ఇంటి పేరు:",
            emailId: "ఈ-మెయిల్‌ అడ్రస్:",
            noOfSlokas: "ఎన్ని శ్లోకాలు?",
            register: "నమోదు"
        },
        englishHeading : {
            title: "Welcome to Sanatanadhanam!",
            subtitle: "Please register to get your sloka"
        },
        teluguHeading : {
            title: "సనాతన ధనం\"కు స్వాగతం!",
            subtitle: "శ్లోకాలకోసం ఇక్కడ మీ వివరాలు నమోదు చేసుకోండి"
        }
    }

    handleChangeFirstName(event) {
        this.setState({
            firstName : event.target.value
        });
    }

    handleChangeLastName(event) {
        this.setState({
            lastName : event.target.value
        });
    }
    handleChangeEmailId(event) {
        this.setState({
            emailId : event.target.value
        });
    }
    handleChangeSlokas(event) {
        this.setState({
            noOfSlokas : event.target.value
        });
    }

    handleSubmit = () => {
        console.log(this.state);
        // todo: add api calls here
    }

    onLanguageChange = (event) => {
        this.props.onLanguageChange(event.currentTarget.value);
    }

    render() {
        const placeholderTexts = this.props.language === "English"
            ? this.state.englishPlaceholder
            : this.state.teluguPlaceholder;
        const headingText = this.props.language === "English"
            ? this.state.englishHeading
            : this.state.teluguHeading;
        return (
            <div className={classes.container}>
                <div className={classes.lang}>
                    <input name="language" type="radio" value="తెలుగు"
                           checked = {this.props.language === "తెలుగు"}
                           onChange={this.onLanguageChange}/>
                    <label>తెలుగు</label>
                    <input name="language" type="radio" value="English"
                           checked = {this.props.language === "English"}
                           onChange={this.onLanguageChange}/>
                    <label>English</label>
                </div>
                <div className={classes.heading}>{headingText.title}</div>
                <div className={classes.subHeading}>{headingText.subtitle}</div>
                <input type="text" value={this.state.firstName} placeholder={placeholderTexts.firstName}
                       onChange={this.handleChangeFirstName.bind(this)} />
                <input type="text" value={this.state.lastName} placeholder={placeholderTexts.lastName}
                       onChange={this.handleChangeLastName.bind(this)} />
                <input type="email" value={this.state.emailId} placeholder={placeholderTexts.emailId}
                       onChange={this.handleChangeEmailId.bind(this)} />
                <div className={classes.slokas}>
                    <label htmlFor="slokas">{placeholderTexts.noOfSlokas}</label>
                    <select onChange={this.handleChangeSlokas.bind(this)} name="slokas" id="slokas">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <button onClick={this.handleSubmit} >{placeholderTexts.register}</button>
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

export default connect(mapStateToProps,mapDispatcherToProps)(RegistrationForm);