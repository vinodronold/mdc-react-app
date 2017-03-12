import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import routes from './routeConfig';
import TemporaryDrawer from './components/TemporaryDrawer';
import PermanentDrawer from './components/PermanentDrawer';
import Toolbar from './Toolbar';
import SideNav from './SideNav';
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

  render() {
    const {
      hasPermanentDrawer,
      permanentDrawerHidden,
      temporaryDrawerOpen
    } = this.state;
    const permanentDrawerAdjust = hasPermanentDrawer && !permanentDrawerHidden;
    const brand = 'MDC';

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
                    {brand}
                  </div>
                }
              >
                <SideNav
                  hasPermanentDrawer={hasPermanentDrawer}
                  toggleDrawer={this.toggleDrawer}
                />
              </PermanentDrawer>
            : <TemporaryDrawer
                className="nav-drawer"
                isOpen={temporaryDrawerOpen}
                close={this.toggleDrawer}
                toolbarSpacer={
                  <div className="mdc-typography--title mdc-theme--primary">
                    {brand}
                  </div>
                }
              >
                <SideNav
                  hasPermanentDrawer={hasPermanentDrawer}
                  toggleDrawer={this.toggleDrawer}
                />
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
            <div className="main-container">
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
