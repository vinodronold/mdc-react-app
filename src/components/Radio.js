import React, { Component, PropTypes } from 'react';
import { MDCRadio } from '@material/radio/dist/mdc.radio';
import { MDCFormField } from '@material/form-field/dist/mdc.formField';

class Radio extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    disabled: PropTypes.bool
  };

  mdcRadio = null;
  mdcFormField = null;

  componentDidMount() {
    this.mdcRadio = new MDCRadio(this._radio);
    this.mdcFormField = new MDCFormField(this._formField);
    this.mdcFormField.input = this.mdcRadio;
    if (this.props.disabled) this.mdcRadio.disabled = true;
  }

  componentWillUnmount() {
    this.mdcRadio.destroy();
  }

  render() {
    return (
      <div className="mdc-form-field" ref={n => this._formField = n}>
        <div className="mdc-radio" ref={n => this._radio = n}>
          <input
            className="mdc-radio__native-control"
            type="radio"
            value={this.props.value}
            id={this.props.id}
            onChange={this.props.onChange}
            checked={this.props.checked}
            disabled={this.props.disabled}
          />
          <div className="mdc-radio__background">
            <div className="mdc-radio__outer-circle" />
            <div className="mdc-radio__inner-circle" />
          </div>
        </div>
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}

export default Radio;
