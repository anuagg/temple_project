import React, {Component} from 'react';
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import classes from "../TemplePageBuilder/TemplePageBuilder.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import AboutSanatana from "../../components/About/About";

class TemplePageBuilder extends Component {
  render() {
    return (
        <React.Fragment>
          <Header></Header>
            <Banner>banner</Banner>
          <Header></Header>
          <div className={classes.container}>
            <AboutSanatana></AboutSanatana>
            <RegistrationForm></RegistrationForm>
          </div>
        </React.Fragment>
    );
  }
}

export default TemplePageBuilder;
