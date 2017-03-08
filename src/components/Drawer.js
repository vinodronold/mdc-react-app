import React, { Component, PropTypes } from 'react';
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer';

export default class Drawer extends Component {
  static propTypes = {
    open: PropTypes.bool
  };

  mdcDrawer = null;

  componentDidMount() {
    this.mdcDrawer = new MDCTemporaryDrawer(this._drawer);
  }

  componentDidUpdate() {
    this.mdcDrawer.open = this.props.open ? true : false;
    console.log('mdcDrawer open', this.mdcDrawer.open);
  }

  componentWillUnmount() {
    this.mdcDrawer.destroy();
  }

  render() {
    return (
      <aside className="mdc-temporary-drawer" ref={el => this._drawer = el}>
        <nav className="mdc-temporary-drawer__drawer">
          <nav className="mdc-temporary-drawer__content mdc-list-group">
            <div className="mdc-list">
              <a className="mdc-list-item" href="#">
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  email
                </i>
                All Mail
              </a>
              <a className="mdc-list-item" href="#">
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  delete
                </i>
                Trash
              </a>
              <a className="mdc-list-item" href="#">
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  report
                </i>
                Spam
              </a>
            </div>
          </nav>
        </nav>
      </aside>
    );
  }
}
