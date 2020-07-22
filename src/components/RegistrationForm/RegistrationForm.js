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
        },
        validity: {
            firstName: {
                valid: false,
                touched: false
            },
            lastName: {
                valid: false,
                touched: false
            },
            emailId: {
                valid: false,
                touched: false
            }
        }

    }

    handleChangeFirstName(event) {
        this.setState({
            firstName : event.target.value,
            validity : {
                ...this.state.validity,
                firstName: {
                    valid: this.checkValidity(event.target.value, 'fName'),
                    touched: true
                }
            }
        });
    }

    handleChangeLastName(event) {
        this.setState({
            lastName : event.target.value,
            validity : {
                ...this.state.validity,
                lastName: {
                    valid: this.checkValidity(event.target.value, 'lName'),
                    touched: true
                }
            }
        });
    }

    handleChangeEmailId(event) {
        this.setState({
            emailId : event.target.value,
            validity : {
                ...this.state.validity,
                emailId: {
                    valid: this.checkValidity(event.target.value, 'email'),
                    touched: true
                }
            }
        });
    }

    handleChangeSlokas(event) {
        this.setState({
            noOfSlokas : event.target.value
        });
    }

    checkValidity(value, type) {
        switch(type) {
            case 'fName':
            case 'lName':
               return value.trim() !== '';
            case 'email':
                return ((value.trim() !== '') && (value.indexOf('@') > 0));
            case 'form':
                let valid = true;
                Object.keys(this.state.validity).forEach(key => {
                    valid = valid && this.state.validity[key].valid;
                });
                return valid;
            default:
                return false;
        }
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
                <input className={!this.state.validity.firstName.valid && this.state.validity.firstName.touched ? classes.notValid : ''}
                       type="text" value={this.state.firstName} placeholder={placeholderTexts.firstName}
                       onChange={this.handleChangeFirstName.bind(this)} />
                <input className={!this.state.validity.lastName.valid && this.state.validity.lastName.touched ? classes.notValid : ''}
                       type="text" value={this.state.lastName} placeholder={placeholderTexts.lastName}
                       onChange={this.handleChangeLastName.bind(this)} />
                <input className={!this.state.validity.emailId.valid && this.state.validity.emailId.touched ? classes.notValid : ''}
                    type="email" value={this.state.emailId} placeholder={placeholderTexts.emailId}
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

                <button disabled={!this.checkValidity(undefined, 'form')} onClick={this.handleSubmit} >{placeholderTexts.register}</button>
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