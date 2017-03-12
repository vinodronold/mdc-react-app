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
        <Checkbox
          label="Checkbox"
          id="checkbox-demo"
          onChange={this.onCheckboxChange}
          checked={this.state.checkboxChecked}
        />
        <br />

      </div>
    );
  }
}

export default Toggles;
