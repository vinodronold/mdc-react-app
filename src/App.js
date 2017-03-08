import React, { Component } from 'react';
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer';

class App extends Component {
  state = {
    toolbarElevated: false
  };

  mdcDrawer = null;

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.mdcDrawer = new MDCTemporaryDrawer(this._drawer);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    this.mdcDrawer.destroy();
  }

  onScroll = () => {
    if (window.pageYOffset > 50) {
      this.setState({ toolbarElevated: true });
    } else {
      this.setState({ toolbarElevated: false });
    }
  };

  openDrawer = () => {
    this.mdcDrawer.open = true;
  };

  render() {
    const { toolbarElevated } = this.state;
    return (
      <div className="mdc-typography">
        <nav
          className={
            `mdc-toolbar mdc-toolbar--fixed ${!toolbarElevated ? 'mdc-elevation--z0' : ''}`
          }
        >
          <section
            className="mdc-toolbar__section mdc-toolbar__section--align-start"
          >
            <a className="material-icons" onClick={this.openDrawer}>menu</a>
            <span className="mdc-toolbar__title">Title</span>
          </section>
          <section
            className="mdc-toolbar__section mdc-toolbar__section--align-end"
          >
            <a className="material-icons mdc-theme--text-primary-on-primary">
              search
            </a>
            <a className="material-icons mdc-theme--text-primary-on-primary">
              favorite
            </a>
            <a className="material-icons mdc-theme--text-primary-on-primary">
              more_vert
            </a>
          </section>
        </nav>
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
        <main className="mdc-toolbar-fixed-adjust">
          <div className="mdc-layout-grid">
            <div
              className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6"
            >
              <div className="cell-placeholder">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ab facere ullam enim deserunt sit ipsam quis. Nulla nostrum, ipsa in corporis minima! Dolorem quae quos, ea libero quasi consequuntur!
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
