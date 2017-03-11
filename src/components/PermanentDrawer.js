import React from 'react';

export default class PermanentDrawer extends React.Component {
  render() {
    const { className, toolbarSpacer, children, hidden } = this.props;
    return (
      <nav
        className={
          `mdc-permanent-drawer ${hidden ? 'mdc-permanent-drawer--hidden' : ''} ${className}`
        }
      >
        {toolbarSpacer
          ? <div className="mdc-permanent-drawer__toolbar-spacer">
              {toolbarSpacer}
            </div>
          : null}
        <div className="mdc-permanent-drawer__content">
          {children}
        </div>
      </nav>
    );
  }
}
