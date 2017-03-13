import React, { Component } from 'react';
import { Map } from 'immutable';
import Checkbox from '../components/Checkbox';
import Radio from '../components/Radio';
import Switch from '../components/Switch';
import IconToggle from '../components/IconToggle';

class Toggles extends Component {
  state = {
    checkboxChecked: false,
    switchOn: false,
    favorited: new Map({ default: false, primary: false, accent: true }),
    selectedOption: 'option1'
  };

  toggleCheckboxChange = () => {
    this.setState({ checkboxChecked: !this.state.checkboxChecked });
  };

  toggleSwitch = () => {
    this.setState({ switchOn: !this.state.switchOn });
  };

  toggleFavorited = type => {
    const prevTypeFave = this.state.favorited.get(type);
    const newFavorited = this.state.favorited.set(type, !prevTypeFave);
    this.setState({ favorited: newFavorited });
  };

  handleOptionChange = evt => {
    this.setState({ selectedOption: evt.target.value });
  };

  render() {
    return (
      <div>
        <h1 className="mdc-typography--headline mdc-theme--primary">
          Checkbox
        </h1>
        <div className="toggles-row">
          <Checkbox
            label="A checkbox"
            id="a-checkbox"
            onChange={this.toggleCheckboxChange}
            checked={this.state.checkboxChecked}
          />
          <Checkbox label="Indeterminate" indeterminate />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled" disabled checked />
        </div>

        <h1 className="mdc-typography--headline mdc-theme--primary">Radio</h1>
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
        <h1 className="mdc-typography--headline mdc-theme--primary">Switch</h1>
        <div className="toggles-row">
          <Switch
            label={this.state.switchOn ? 'On' : 'Off'}
            onChange={this.toggleSwitch}
            checked={this.state.switchOn}
          />
          <Switch label="Disabled" disabled />
        </div>
        <h1 className="mdc-typography--headline mdc-theme--primary">
          Icon Toggle
        </h1>
        <div className="toggles-row">
          <IconToggle
            icon="favorite_border"
            onIcon="favorite"
            on={this.state.favorited.get('default')}
            onClick={() => this.toggleFavorited('default')}
          />
          <label className="icon-toggle-label">
            {this.state.favorited.get('default') ? 'Favorited' : 'Favorite'}
          </label>
          <IconToggle
            icon="favorite_border"
            onIcon="favorite"
            on={this.state.favorited.get('primary')}
            onClick={() => this.toggleFavorited('primary')}
            primary
          />
          <IconToggle
            icon="favorite_border"
            onIcon="favorite"
            on={this.state.favorited.get('accent')}
            onClick={() => this.toggleFavorited('accent')}
            accent
          />
          <IconToggle icon="favorite_border" onIcon="favorite" disabled />
          <label className="icon-toggle-label">Disabled</label>
        </div>
      </div>
    );
  }
}

export default Toggles;
