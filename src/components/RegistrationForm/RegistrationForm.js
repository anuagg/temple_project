import React, {Component} from "react";
import classes from "./RegistrationForm.module.css";

class RegistrationForm extends Component {
    state = {
        firstName: "test",
        middleName: "",
        lastName: "",
        emailId: "",
        noOfSlokas: 1
    }

    handleChange(event) {
        this.setState({
            firstName : event.target.value
        });
    }

    handleSubmit = () => {
        console.log(this.state);
        // todo: add api calls here
    }

    render() {
        return (
            <div className={classes.container} onSubmit={this.handleSubmit}>
                <div className={classes.heading}>REGISTER HERE</div>
                <label>
                    First Name:
                    <input type="text" value={this.state.firstName} onChange={this.handleChange.bind(this)} />
                </label>
                <button onClick={this.handleSubmit} >REGISTER</button>
            </div>
        );
    }
}

export default RegistrationForm;