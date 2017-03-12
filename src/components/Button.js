import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';

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
    label: PropTypes.string.isRequired,
    dense: PropTypes.bool,
    raised: PropTypes.bool,
    compact: PropTypes.bool,
    primary: PropTypes.bool,
    accent: PropTypes.bool
  };

  static defaultProps = {
    type: 'button'
  };

  ripple = null;

  componentDidMount() {
    this.ripple = new MDCRipple(this._button);
  }

  componentWillUnmount() {
    this.ripple.destroy();
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
      dense,
      raised,
      compact,
      primary,
      accent,
      ...otherProps
    } = this.props;

    let classes = 'mdc-button';

    if (className) classes += ` ${className}`;
    if (dense) classes += ' mdc-button--dense';
    if (raised) classes += ' mdc-button--raised';
    if (compact) classes += ' mdc-button--compact';
    if (primary) classes += ' mdc-button--primary';
    if (accent) classes += ' mdc-button--accent';

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
