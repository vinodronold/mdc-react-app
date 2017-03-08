import React, { Component } from 'react';
import Textfield from './components/Textfield';
import Checkbox from './components/Checkbox';
import Drawer from './components/Drawer';

class App extends Component {
  state = {
    drawerOpen: false
  };

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    return (
      <div className="mdc-typography">
        <nav className="mdc-toolbar mdc-toolbar--fixed">
          <section
            className="mdc-toolbar__section mdc-toolbar__section--align-start"
          >
            <a className="material-icons" onClick={this.toggleDrawer}>menu</a>
            <span className="mdc-toolbar__title">Title</span>
          </section>
          <section
            className="mdc-toolbar__section mdc-toolbar__section--align-end"
          >
            <a
              href
              className="material-icons mdc-theme--text-primary-on-primary"
            >
              search
            </a>
            <a
              href
              className="material-icons mdc-theme--text-primary-on-primary"
            >
              favorite
            </a>
            <a
              href
              className="material-icons mdc-theme--text-primary-on-primary"
            >
              more_vert
            </a>
          </section>
        </nav>
        <Drawer open={this.state.drawerOpen} />
        <main className="mdc-toolbar-fixed-adjust">
          <div className="mdc-layout-grid">
            <div
              className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 text-right"
            >
              <FormDemo />
            </div>
            <div
              className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, aut minima commodi temporibus iure neque quod quam, possimus reiciendis iusto alias sed culpa facilis, veniam unde et eum illum dolorem.
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

class FormDemo extends Component {
  state = {
    feels: '',
    showField: false
  };

  onChangeFeels = event => {
    this.setState({ feels: event.target.value });
  };

  toggleField = () => {
    this.setState({ showField: !this.state.showField });
  };

  render() {
    return (
      <div>
        <div className="mdc-typography--headline">
          Feels{this.state.feels ? this.state.feels + 'Man' : ''}
        </div>
        {this.state.feels !== 'foo'
          ? <Checkbox
              id="toggle-field"
              label="Toggle field"
              checked={this.state.showField}
              onChange={this.toggleField}
            />
          : null}
        <br />
        {this.state.showField
          ? <Textfield
              label="Tell us how you feel"
              value={this.state.feels}
              onChange={this.onChangeFeels}
            />
          : null}
      </div>
    );
  }
}

export default App;
