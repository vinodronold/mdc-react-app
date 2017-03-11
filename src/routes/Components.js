import React from 'react';
import Checkbox from '../components/Checkbox';
import TextField from '../components/Textfield';

class Components extends React.Component {
  state = {
    checkboxChecked: false
  };

  onCheckboxChange = event => {
    this.setState({ checkboxChecked: event.target.checked });
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
        <TextField label="Text field" />
      </div>
    );
  }
}

export default Components;
