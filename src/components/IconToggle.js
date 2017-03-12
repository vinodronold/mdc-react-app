import React, { Component, PropTypes } from 'react';
import { MDCIconToggle } from '@material/icon-toggle/dist/mdc.iconToggle';
import '../styles/icon-toggle.css';

class IconToggle extends Component {
  static propTypes = {
    icon: PropTypes.string,
    onClick: PropTypes.func
  };

  iconToggle = null;

  componentDidMount() {
    this.iconToggle = new MDCIconToggle(this._iconToggle);
  }

  componentWillUnmount() {
    this.iconToggle.destroy();
  }

  render() {
    return (
      <i
        ref={n => this._iconToggle = n}
        className="mdc-icon-toggle material-icons"
        role="button"
        aria-pressed="false"
        tabIndex="0"
        onClick={this.props.onClick}
      >
        {this.props.icon}
      </i>
    );
  }
}

export default IconToggle;
