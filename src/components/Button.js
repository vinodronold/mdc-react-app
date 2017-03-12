import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';
import '../styles/buttons.css';

class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    staticContext: PropTypes.object,
    to: PropTypes.string,
    href: PropTypes.string,
    label: PropTypes.string.isRequired
  };

  static defaultProps = {
    type: 'button'
  };

  ripple = null;

  componentDidMount() {
    if (this._button) {
      this.ripple = new MDCRipple(this._button);
    }
  }

  componentWillUnmount() {
    if (this.ripple) {
      this.ripple.destroy();
    }
  }

  routeTo = () => {
    const { history, to } = this.props;
    history.push(to);
  };

  render() {
    const {
      type,
      to,
      href,
      label,
      history,
      location,
      match,
      staticContext,
      className,
      ...otherProps
    } = this.props;

    let classes = 'mdc-button';

    if (className) classes += ` ${className}`;

    if (to) {
      return (
        <a
          className={classes}
          onClick={this.routeTo}
          ref={n => this._button = n}
          {...otherProps}
        >
          {label}
        </a>
      );
    }

    if (href) {
      return (
        <a
          href={href}
          className={classes}
          ref={n => this._button = n}
          {...otherProps}
        >
          {label}
        </a>
      );
    }

    return (
      <button
        type={type}
        className={classes}
        ref={n => this._button = n}
        {...otherProps}
      >
        {label}
      </button>
    );
  }
}

export default withRouter(Button);
