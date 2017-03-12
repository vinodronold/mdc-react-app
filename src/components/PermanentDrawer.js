import React, { Component, PropTypes } from 'react';

class PermanentDrawer extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    toolbarSpacer: PropTypes.node,
    hidden: PropTypes.bool
  };

  render() {
    const { toolbarSpacer, children, hidden } = this.props;
    let className = 'mdc-permanent-drawer';

    if (hidden) className += ' mdc-permanent-drawer--hidden';
    if (this.props.className) className += ` ${this.props.className}`;

    return (
      <nav className={className}>
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
