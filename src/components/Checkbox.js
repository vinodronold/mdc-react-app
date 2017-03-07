import React, { Component, PropTypes } from 'react';
import { MDCCheckbox } from '@material/checkbox/dist/mdc.checkbox';

export default class Checkbox extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool.isRequired,
    indeterminate: PropTypes.bool,
    disabled: PropTypes.bool
  };

  mdcComponent = null;

  componentDidMount() {
    this.mdcComponent = new MDCCheckbox(this._node);
    if (this.props.indeterminate) {
      this.mdcComponent.indeterminate = true;
    }
    if (this.props.disabled) {
      this.mdcComponent.disabled = true;
    }
  }

  componentWillUnmount() {
    this.mdcComponent.destroy();
  }

  render() {
    return (
      <div className="mdc-form-field">
        <div className="mdc-checkbox" ref={n => this._node = n}>
          <input
            type="checkbox"
            id={this.props.id}
            className="mdc-checkbox__native-control"
            onChange={this.props.onChange}
            checked={this.props.checked}
          />
          <div className="mdc-checkbox__background">
            <svg
              version="1.1"
              className="mdc-checkbox__checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className="mdc-checkbox__checkmark__path"
                fill="none"
                stroke="white"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"
              />
            </svg>
            <div className="mdc-checkbox__mixedmark" />
          </div>
        </div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}
