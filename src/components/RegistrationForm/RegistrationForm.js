import React, {Component} from "react";
import classes from "./RegistrationForm.module.css";

class RegistrationForm extends Component {
    state = {
        firstName: "",
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
            <div className={classes.container}>
                <div className={classes.lang}>
                    <input name="language" type="radio" value="తెలుగు"/>
                    <label>తెలుగు</label>
                    <input name="language" type="radio" value="English"/>
                    <label>English</label>
                </div>
                <div className={classes.heading}>Welcome to Sanatanadhanam!</div>
                <div className={classes.subHeading}>Please register to get your sloka</div>
                <input type="text" value={this.state.firstName} placeholder="First Name"
                       onChange={this.handleChange.bind(this)} />
                <input type="text" value={this.state.lastName} placeholder="Last Name"
                       onChange={this.handleChange.bind(this)} />
                <input type="email" value={this.state.emailId} placeholder="Email address (joe@example.com)"
                       onChange={this.handleChange.bind(this)} />
                <div className={classes.slokas}>
                    <label htmlFor="slokas">Number of Slokas</label>
                    <select name="slokas" id="slokas">
                        <option selected="true" value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </div>

                <button onClick={this.handleSubmit} >REGISTER</button>
            </div>
        );
    }
}

export default RegistrationForm;