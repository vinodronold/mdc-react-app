import React, { Component, PropTypes } from 'react';
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  state = {
    toolbarElevated: false,
    permanentDrawer: false,
    permanentDrawerHidden: false
  };

  mdcDrawer = null;

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    window.addEventListener('resize', this.onResize);

    // initialize layout with the resize event
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    if (this.mdcDrawer) {
      this.mdcDrawer.destroy();
    }
  }

  onScroll = () => {
    if (window.pageYOffset > 50) {
      this.setState({ toolbarElevated: true });
    } else {
      this.setState({ toolbarElevated: false });
    }
  };

  onResize = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      this.setState({ permanentDrawer: true, permanentDrawerHidden: false });
      this.mdcDrawer = null;
    } else {
      this.setState({ permanentDrawer: false, permanentDrawerHidden: true });
      this.mdcDrawer = new MDCTemporaryDrawer(this._drawer);
    }
  };

  toggleDrawer = () => {
    if (this.mdcDrawer) {
      this.mdcDrawer.open = true;
    } else {
      this.setState({
        permanentDrawerHidden: !this.state.permanentDrawerHidden
      });
    }
  };

  renderDrawer() {
    const { permanentDrawer, permanentDrawerHidden } = this.state;
    const baseClass = permanentDrawer
      ? 'mdc-permanent-drawer'
      : 'mdc-temporary-drawer';

    return (
      <aside
        className={
          `${baseClass} ${permanentDrawerHidden
            ? 'mdc-permanent-drawer--hidden'
            : ''}`
        }
        ref={el => this._drawer = el}
      >
        <nav
          className={`${permanentDrawer ? '' : 'mdc-temporary-drawer__drawer'}`}
        >
          <div className={`${baseClass}__toolbar-spacer`}>
            <img
              className="drawer-brand"
              src="http://placehold.it/240x64?text=Brand"
              alt="Brand"
            />
          </div>
          <nav className={`${baseClass}__content mdc-list-group`}>
            <div className="mdc-list">
              <a className={`mdc-list-item ${baseClass}--selected`} href="#">
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
              <hr className="mdc-list-divider" />
              <a className="mdc-list-item" href="#">
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  favorite
                </i>
                Favorites
              </a>
            </div>
          </nav>
        </nav>
      </aside>
    );
  }

  render() {
    const {
      toolbarElevated,
      permanentDrawer,
      permanentDrawerHidden
    } = this.state;
    const permanentDrawerVisible = permanentDrawer && !permanentDrawerHidden;
    return (
      <div>
        {this.renderDrawer()}
        <nav
          className={
            `mdc-toolbar mdc-toolbar--fixed ${!toolbarElevated
              ? 'mdc-elevation--z0'
              : ''} ${permanentDrawerVisible
              ? 'mdc-permanent-drawer-adjust'
              : ''}`
          }
        >
          <section
            className="mdc-toolbar__section mdc-toolbar__section--align-start"
          >
            <a className="material-icons" onClick={this.toggleDrawer}>menu</a>
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
        <main
          className={
            `mdc-toolbar-fixed-adjust ${permanentDrawerVisible
              ? 'mdc-permanent-drawer-adjust'
              : ''}`
          }
        >
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default Layout;
