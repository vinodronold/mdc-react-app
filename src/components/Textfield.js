import React, { Component, PropTypes } from 'react';
import { MDCTextfield } from '@material/textfield/dist/mdc.textfield';

class Textfield extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func
  };

  mdcTextfield = null;

  componentDidMount() {
    this.mdcTextfield = new MDCTextfield(this._textfield);
  }

  componentWillUnmount() {
    this.mdcTextfield.destroy();
  }

  render() {
    const { label, value, onChange } = this.props;
    return (
      <div className="mdc-textfield" ref={n => this._textfield = n}>
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

export default Textfield;
