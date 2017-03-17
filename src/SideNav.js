import React, { Component, PropTypes } from 'react';
import DrawerLink from './components/DrawerLink';
import links from './links';

class SideNav extends Component {
  static propTypes = {
    hasPermanentDrawer: PropTypes.bool,
    toggleDrawer: PropTypes.func
  };

  render() {
    const activeClassName = this.props.hasPermanentDrawer
      ? 'mdc-permanent-drawer--selected'
      : 'mdc-temporary-drawer--selected';
    const toggleDrawer = !this.props.hasPermanentDrawer
      ? this.props.toggleDrawer
      : null;
    return (
      <div className="side-nav mdc-list">
        {links.map((link, i) => (
          <DrawerLink
            key={i}
            label={link.label}
            to={link.path}
            icon={link.icon}
            activeClassName={activeClassName}
            toggleDrawer={toggleDrawer}
          />
        ))}
      </div>
    );
  }
}

export default SideNav;
