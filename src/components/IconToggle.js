import React, { Component, PropTypes } from 'react';
import { MDCIconToggle } from '@material/icon-toggle/dist/mdc.iconToggle';

class IconToggle extends Component {
  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onIcon: PropTypes.string,
    on: PropTypes.bool,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    accent: PropTypes.bool,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    on: false,
    disabled: false
  };

  iconToggle = null;

  componentDidMount() {
    this.iconToggle = new MDCIconToggle(this._iconToggle);
  }

  componentWillUnmount() {
    this.iconToggle.destroy();
  }

  render() {
    let classes = 'mdc-icon-toggle material-icons';

    if (this.props.className) classes += ` ${this.props.className}`;
    if (this.props.primary) classes += ' mdc-icon-toggle--primary';
    if (this.props.accent) classes += ' mdc-icon-toggle--accent';
    if (this.props.disabled) classes += ' mdc-icon-toggle--disabled';

    let icon = this.props.icon;
    if (this.props.on) {
      if (this.props.onIcon) icon = this.props.onIcon;
    }

    return (
      <i
        ref={n => this._iconToggle = n}
        className={classes}
        role="button"
        aria-pressed={this.props.on}
        aria-disabled={this.props.disabled}
        tabIndex="0"
        onClick={this.props.onClick}
      >
        {icon}
      </i>
    );
  }
}

export default IconToggle;
