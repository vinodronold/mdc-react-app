import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';

class DrawerLink extends Component {
  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    to: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.string,
    activeClassName: PropTypes.string,
    closeDrawer: PropTypes.func
  };

  ripple = null;
  closeDrawerTimeout = null;

  componentWillReceiveProps() {
    this.ripple = new MDCRipple(this._link);
  }

  componentWillUnmount() {
    if (this.ripple) {
      this.ripple.destroy();
    }

    if (this.closeDrawerTimeout) {
      clearTimeout(this.closeDrawerTimeout);
    }
  }

  handleClick = () => {
    const { history, to, closeDrawer } = this.props;
    history.push(to);
    if (closeDrawer) {
      // give some time for ripple animation before navigating
      this.closeDrawerTimeout = setTimeout(closeDrawer, 150);
    }
  };

  render() {
    const { location, to, icon, text, activeClassName } = this.props;
    const isActive = location.pathname === to;
    return (
      <a
        className={`mdc-list-item ${isActive ? activeClassName : ''}`}
        onClick={this.handleClick}
        ref={n => this._link = n}
      >
        <i
          className="material-icons mdc-list-item__start-detail"
          aria-hidden="true"
        >
          {icon}
        </i>
        {text}
      </a>
    );
  }
}

export default withRouter(DrawerLink);