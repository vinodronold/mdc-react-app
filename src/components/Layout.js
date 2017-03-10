import React, { Component, PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer';
import Helmet from 'react-helmet';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  state = {
    toolbarElevated: false,
    permanentDrawer: false,
    permanentDrawerHidden: false,
    currentTitle: ''
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
    const activeClass = `${baseClass}--selected`;

    return (
      <aside
        className={
          `${baseClass} ${permanentDrawerHidden && permanentDrawer ? 'mdc-permanent-drawer--hidden' : ''}`
        }
        ref={el => this._drawer = el}
      >
        <nav
          className={`${permanentDrawer ? '' : 'mdc-temporary-drawer__drawer'}`}
        >
          <div className={`${baseClass}__toolbar-spacer`}>
            <div className="mdc-typography--title mdc-theme--primary">
              Brand
            </div>
          </div>
          <nav className={`${baseClass}__content mdc-list-group`}>
            <div className="mdc-list">
              <NavLink
                className="mdc-list-item"
                activeClassName={activeClass}
                exact
                to="/"
              >
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  view_compact
                </i>Layout Grid
              </NavLink>
              <NavLink
                className="mdc-list-item"
                activeClassName={activeClass}
                to="/components"
              >
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  layers
                </i>
                Components
              </NavLink>
              <NavLink
                className="mdc-list-item"
                activeClassName={activeClass}
                to="/typography"
              >
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  text_fields
                </i>Typography
              </NavLink>
              <NavLink
                className="mdc-list-item"
                activeClassName={activeClass}
                to="/theme"
              >
                <i
                  className="material-icons mdc-list-item__start-detail"
                  aria-hidden="true"
                >
                  color_lens
                </i>
                Theme
              </NavLink>
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
        <Helmet defaultTitle="MDC" titleTemplate="%s - MDC" />
        {this.renderDrawer()}
        <nav
          className={
            `mdc-toolbar mdc-toolbar--fixed ${!toolbarElevated ? 'mdc-elevation--z0' : ''} ${permanentDrawerVisible ? 'mdc-permanent-drawer-adjust' : ''}`
          }
        >
          <section
            className="mdc-toolbar__section mdc-toolbar__section--align-start"
          >
            <a className="material-icons" onClick={this.toggleDrawer}>menu</a>
            <span className="mdc-toolbar__title" />
          </section>
          <section
            className="mdc-toolbar__section mdc-toolbar__section--align-end"
          >
            <a className="material-icons mdc-theme--text-primary-on-primary">
              search
            </a>
            <a className="material-icons mdc-theme--text-primary-on-primary">
              more_vert
            </a>
            <a className="mdc-theme--text-primary-on-primary" href="#">
              Link
            </a>
            <a className="mdc-theme--text-primary-on-primary" href="#">
              Link
            </a>
          </section>
        </nav>
        <main
          className={
            `mdc-toolbar-fixed-adjust ${permanentDrawerVisible ? 'mdc-permanent-drawer-adjust' : ''}`
          }
        >
          <div>{this.props.children}</div>
        </main>
      </div>
    );
  }
}

export default Layout;
