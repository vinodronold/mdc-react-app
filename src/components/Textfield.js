import React, { Component, PropTypes } from 'react';
import { MDCTextfield } from '@material/textfield/dist/mdc.textfield';

class Textfield extends Component {
  static propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    multiline: PropTypes.bool,
    fullWidth: PropTypes.bool,
    rows: PropTypes.number,
    cols: PropTypes.number,
    helpText: PropTypes.string,
    helpTextPersist: PropTypes.bool,
    helpTextValidate: PropTypes.bool
  };

  static defaultProps = {
    type: 'text',
    disabled: false,
    rows: 8,
    cols: 40
  };

  mdcTextfield = null;

  componentDidMount() {
    this.mdcTextfield = new MDCTextfield(this._textfield);
  }

  componentWillUnmount() {
    this.mdcTextfield.destroy();
  }

  render() {
    const {
      type,
      label,
      placeholder,
      value,
      onChange,
      className,
      disabled,
      multiline,
      rows,
      cols,
      fullWidth,
      helpText,
      helpTextPersist,
      helpTextValidate,
      ...otherProps
    } = this.props;

    let textfieldClasses = 'mdc-textfield';
    if (multiline) textfieldClasses += ' mdc-textfield--multiline';
    if (fullWidth) textfieldClasses += ' mdc-textfield--fullwidth';
    if (disabled) textfieldClasses += ' mdc-textfield--disabled';

    let helpTextClasses = 'mdc-textfield-helptext';
    if (helpTextPersist)
      helpTextClasses += ' mdc-textfield-helptext--persistent';
    if (helpTextValidate)
      helpTextClasses += ' mdc-textfield-helptext--validation-msg';

    return (
      <div className={className}>
        <div className={textfieldClasses} ref={n => this._textfield = n}>
          {multiline
            ? <textarea
                className="mdc-textfield__input"
                rows={rows}
                cols={cols}
                onChange={onChange}
                disabled={disabled}
                value={value}
                placeholder={placeholder}
                {...otherProps}
                ref={n => this._input = n}
              />
            : <input
                type={type}
                className="mdc-textfield__input"
                onChange={onChange}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                {...otherProps}
                ref={n => this._input = n}
              />}

          <span className="mdc-textfield__label">
            {label}
          </span>
        </div>
        <p className={helpTextClasses}>
          {helpText}
        </p>
      </div>
    );
  }
}

export default Textfield;
