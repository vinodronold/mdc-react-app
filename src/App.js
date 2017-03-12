import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import routes from './routeConfig';
import DrawerLink from './components/DrawerLink';
import TemporaryDrawer from './components/TemporaryDrawer';
import PermanentDrawer from './components/PermanentDrawer';
import Toolbar from './Toolbar';
import './styles/drawer.css';

class App extends Component {
  state = {
    temporaryDrawerOpen: false,
    hasPermanentDrawer: false,
    permanentDrawerHidden: false
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);

    // initialize layout with the resize event
    this.onResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      this.setState({ hasPermanentDrawer: true, permanentDrawerHidden: false });
    } else {
      this.setState({ hasPermanentDrawer: false, permanentDrawerHidden: true });
    }
  };

  toggleDrawer = () => {
    if (this.state.hasPermanentDrawer) {
      this.setState({
        permanentDrawerHidden: !this.state.permanentDrawerHidden
      });
    } else {
      this.setState({ temporaryDrawerOpen: !this.state.temporaryDrawerOpen });
    }
  };

  renderDrawerLinks() {
    const activeClass = this.state.hasPermanentDrawer
      ? 'mdc-permanent-drawer--selected'
      : 'mdc-temporary-drawer--selected';
    const closeDrawer = !this.state.hasPermanentDrawer
      ? this.toggleDrawer
      : null;
    return (
      <div className="mdc-list">
        <DrawerLink
          activeClassName={activeClass}
          to="/"
          icon="check_circle"
          text="Buttons"
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
        <DrawerLink
          activeClassName={activeClass}
          to="/theme"
          icon="invert_colors"
          text="Theme"
          closeDrawer={closeDrawer}
        />
      </div>
    );
  }

  render() {
    const {
      hasPermanentDrawer,
      permanentDrawerHidden,
      temporaryDrawerOpen
    } = this.state;
    const permanentDrawerAdjust = hasPermanentDrawer && !permanentDrawerHidden;

    return (
      <Router>
        <div>
          <Helmet defaultTitle="MDC" titleTemplate="%s - MDC" />
          {hasPermanentDrawer
            ? <PermanentDrawer
                className="nav-drawer"
                hidden={permanentDrawerHidden}
                toolbarSpacer={
                  <div className="mdc-typography--title mdc-theme--primary">
                    MDC
                  </div>
                }
              >
                {this.renderDrawerLinks()}
              </PermanentDrawer>
            : <TemporaryDrawer
                className="nav-drawer"
                isOpen={temporaryDrawerOpen}
                close={this.toggleDrawer}
                toolbarSpacer={
                  <div className="mdc-typography--title mdc-theme--primary">
                    Brand
                  </div>
                }
              >
                {this.renderDrawerLinks()}
              </TemporaryDrawer>}

          <Toolbar
            permanentDrawerAdjust={permanentDrawerAdjust}
            toggleDrawer={this.toggleDrawer}
          />
          <main
            className={
              `mdc-toolbar-fixed-adjust ${permanentDrawerAdjust ? 'mdc-permanent-drawer-adjust' : ''}`
            }
          >
            <div>
              {routes.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </div>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
