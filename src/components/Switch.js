import React, { Component, PropTypes } from 'react';

class Switch extends Component {
  static propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    className: PropTypes.string
  };

  render() {
    return (
      <div className={`mdc-form-field ${this.props.className}`}>
        <div className="mdc-switch">
          <input
            type="checkbox"
            id={this.props.id}
            className="mdc-switch__native-control"
            onChange={this.props.onChange}
            checked={this.props.checked}
            disabled={this.props.disabled}
          />
          <div className="mdc-switch__background">
            <div className="mdc-switch__knob" />
          </div>
        </div>
        <label htmlFor={this.props.id}>
          {this.props.label}
        </label>
      </div>
    );
  }
}

export default Switch;
