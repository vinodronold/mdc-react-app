import React, { Component } from 'react';
import Checkbox from '../components/Checkbox';
import Radio from '../components/Radio';

class Toggles extends Component {
  state = {
    checkboxChecked: false,
    selectedOption: 'option1'
  };

  handleCheckboxChange = evt => {
    this.setState({ checkboxChecked: evt.target.checked });
  };

  handleOptionChange = evt => {
    this.setState({ selectedOption: evt.target.value });
  };

  render() {
    return (
      <div>
        <h1 className="mdc-typography--title mdc-theme--primary">Checkbox</h1>
        <div className="toggles-row">
          <Checkbox
            label="A checkbox"
            id="a-checkbox"
            onChange={this.handleCheckboxChange}
            checked={this.state.checkboxChecked}
          />
          <Checkbox
            label="Indeterminate"
            onChange={this.handleCheckboxChange}
            checked={this.state.checkboxChecked}
            indeterminate
          />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled" disabled checked />
        </div>

        <h1 className="mdc-typography--title mdc-theme--primary">Radio</h1>
        <div className="toggles-row">
          <Radio
            label="Option 1"
            id="option-1"
            value="option1"
            checked={this.state.selectedOption === 'option1'}
            onChange={this.handleOptionChange}
          />
          <Radio
            label="Option 2"
            id="option-2"
            value="option2"
            checked={this.state.selectedOption === 'option2'}
            onChange={this.handleOptionChange}
          />
          <Radio
            label="Disabled Option"
            id="option-3"
            value="option3"
            checked={this.state.selectedOption === 'option3'}
            onChange={this.handleOptionChange}
            disabled
          />
        </div>
        <h1 className="mdc-typography--title mdc-theme--primary">Switch</h1>
        <h1 className="mdc-typography--title mdc-theme--primary">
          Icon Toggle
        </h1>
      </div>
    );
  }
}

export default Toggles;
