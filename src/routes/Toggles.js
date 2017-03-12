import React, { Component } from 'react';
import Checkbox from '../components/Checkbox';

class Toggles extends Component {
  state = {
    checkboxChecked: false
  };

  onCheckboxChange = evt => {
    this.setState({ checkboxChecked: evt.target.checked });
  };

  render() {
    return (
      <div>
        <h1 className="mdc-typography--title mdc-theme--primary">Checkbox</h1>
        <Checkbox
          label="Check me"
          id="checkbox-demo"
          onChange={this.onCheckboxChange}
          checked={this.state.checkboxChecked}
        />
        <br />
        <h1 className="mdc-typography--title mdc-theme--primary">Radio</h1>
        <h1 className="mdc-typography--title mdc-theme--primary">Switch</h1>
        <h1 className="mdc-typography--title mdc-theme--primary">
          Icon Toggle
        </h1>
      </div>
    );
  }
}

export default Toggles;
