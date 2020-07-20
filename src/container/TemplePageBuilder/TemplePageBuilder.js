import React, {Component} from 'react';
import classes from "../TemplePageBuilder/TemplePageBuilder.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import AboutSanatana from "../../components/About/About";

class TemplePageBuilder extends Component {
  render() {
    return (
        <React.Fragment>
          <div className={classes.container}>
            <AboutSanatana></AboutSanatana>
            <RegistrationForm></RegistrationForm>
          </div>
        </React.Fragment>
    );
  }
}

export default TemplePageBuilder;
