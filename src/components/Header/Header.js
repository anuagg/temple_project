import React, {Component} from 'react';
import classes from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <div className={classes.container}>
        Jai Sreemannarayana
      </div>
      </React.Fragment>
    )
  }
}

export default Header;
