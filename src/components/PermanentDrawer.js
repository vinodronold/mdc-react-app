import React, { Component, PropTypes } from 'react';

class PermanentDrawer extends Component {
  static propTypes = {
    className: PropTypes.string,
    toolbarSpacer: PropTypes.node,
    children: PropTypes.node,
    hidden: PropTypes.bool
  };

  render() {
    const { className, toolbarSpacer, children, hidden } = this.props;
    let classes = 'mdc-permanent-drawer';

    if (hidden) classes += ' mdc-permanent-drawer--hidden';
    if (className) classes += ` ${className}`;

    return (
      <nav className={classes}>
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

export default PermanentDrawer;
