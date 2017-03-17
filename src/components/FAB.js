import React, { Component, PropTypes } from 'react';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';

class FAB extends Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    mini: PropTypes.bool,
    plain: PropTypes.bool
  };

  ripple = null;

  componentDidMount() {
    this.ripple = new MDCRipple(this._fab);
  }

  componentWillUnmount() {
    this.ripple.destroy();
  }

  render() {
    const { className, icon, mini, plain, ...otherProps } = this.props;
    let classes = 'mdc-fab material-icons';

    if (className) classes += ` ${className}`;
    if (mini) classes += ' mdc-fab--mini';
    if (plain) classes += ' mdc-fab--plain';

    return (
      <button className={classes} ref={n => this._fab = n} {...otherProps}>
        <span className="mdc-fab__icon">
          {icon}
        </span>
      </button>
    );
  }
}

export default FAB;
