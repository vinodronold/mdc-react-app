import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import { MDCRipple } from '@material/ripple/dist/mdc.ripple';

class DrawerLink extends Component {
  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    to: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    activeClassName: PropTypes.string,
    toggleDrawer: PropTypes.func
  };

  ripple = null;

  componentDidMount() {
    this.ripple = new MDCRipple(this._link);
  }

  componentWillReceiveProps() {
    this.ripple = new MDCRipple(this._link);
  }

  componentWillUnmount() {
    if (this.ripple) {
      this.ripple.destroy();
    }
  }

  handleClick = () => {
    const { history, to, toggleDrawer } = this.props;
    history.push(to);
    document.body.scrollTop = 0;
    if (toggleDrawer) {
      toggleDrawer();
    }
  };

  render() {
    const { location, to, icon, label, activeClassName } = this.props;
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
        {label}
      </a>
    );
  }
}

export default withRouter(DrawerLink);
