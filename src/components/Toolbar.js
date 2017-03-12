import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router-dom';
import routes from '../routeConfig';
import IconToggle from './IconToggle';
import '../styles/toolbar.css';

class Toolbar extends Component {
  static propTypes = {
    permanentDrawerAdjust: PropTypes.bool,
    toggleDrawer: PropTypes.func
  };

  state = {
    elevated: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    if (window.pageYOffset > 50) {
      this.setState({ elevated: true });
    } else {
      this.setState({ elevated: false });
    }
  };

  render() {
    const { elevated } = this.state;
    const { permanentDrawerAdjust, toggleDrawer } = this.props;
    let className = 'mdc-toolbar mdc-toolbar--fixed mdc-theme--dark';

    if (!elevated) className += ' mdc-elevation--z0';
    if (permanentDrawerAdjust) className += ' mdc-permanent-drawer-adjust';

    return (
      <nav className={className}>
        <section
          className="mdc-toolbar__section mdc-toolbar__section--align-start"
        >
          <IconToggle icon="menu" onClick={toggleDrawer} />
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={() => (
                <span className="mdc-toolbar__title">{route.title}</span>
              )}
            />
          ))}
        </section>
        <section
          className="mdc-toolbar__section mdc-toolbar__section--align-end"
        >
          <IconToggle icon="search" />
          <IconToggle icon="more_vert" />
          <a className="mdc-button" href="#">
            Link
          </a>
          <a className="mdc-button" href="#">
            Link
          </a>
        </section>
      </nav>
    );
  }
}

export default Toolbar;
