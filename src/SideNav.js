import React, { Component, PropTypes } from 'react';
import DrawerLink from './components/DrawerLink';

class SideNav extends Component {
  static propTypes = {
    hasPermanentDrawer: PropTypes.bool,
    toggleDrawer: PropTypes.func
  };

  render() {
    const activeClass = this.props.hasPermanentDrawer
      ? 'mdc-permanent-drawer--selected'
      : 'mdc-temporary-drawer--selected';
    const closeDrawer = !this.props.hasPermanentDrawer
      ? this.props.toggleDrawer
      : null;
    return (
      <div className="side-nav mdc-list">
        <DrawerLink
          activeClassName={activeClass}
          to="/"
          icon="add_circle"
          text="Buttons"
          closeDrawer={closeDrawer}
        />
        <DrawerLink
          activeClassName={activeClass}
          to="/cards"
          icon="picture_in_picture"
          text="Cards"
          closeDrawer={closeDrawer}
        />
        <DrawerLink
          activeClassName={activeClass}
          to="/toggles"
          icon="radio_button_checked"
          text="Toggles"
          closeDrawer={closeDrawer}
        />
        <DrawerLink
          activeClassName={activeClass}
          to="/textfields"
          icon="text_format"
          text="Text Fields"
          closeDrawer={closeDrawer}
        />
        <DrawerLink
          activeClassName={activeClass}
          to="/typography"
          icon="text_fields"
          text="Typography"
          closeDrawer={closeDrawer}
        />
      </div>
    );
  }
}

export default SideNav;
