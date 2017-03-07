import React, { Component } from 'react';
import Textfield from './components/Textfield';
import Checkbox from './components/Checkbox';

class App extends Component {
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
        <h1 className="mdc-typography--display1">Hello world!</h1>
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
