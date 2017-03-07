import React, { Component, PropTypes } from 'react';
import { MDCTextfield } from '@material/textfield/dist/mdc.textfield';

export default class Textfield extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  mdcComponent = null;

  componentDidMount() {
    this.mdcComponent = new MDCTextfield(this._node);
  }

  componentWillUnmount() {
    this.mdcComponent.destroy();
  }

  render() {
    const { label, value, onChange } = this.props;
    return (
      <div className="mdc-textfield" ref={n => this._node = n}>
        <input
          type="text"
          className="mdc-textfield__input"
          onChange={onChange}
          value={value}
        />
        <span className="mdc-textfield__label">
          {label}
        </span>
      </div>
    );
  }
}
