import React, { Component } from 'react';
import Textfield from '../components/Textfield';

class Textfields extends Component {
  state = {
    prefilledVal: 'Foo'
  };

  handlePrefilledChange = evt => {
    this.setState({ prefilledVal: evt.target.value });
  };

  render() {
    return (
      <div>
        <div className="textfields-row">
          <h1
            className="mdc-typography--headline mdc-theme--primary"
            style={{ marginBottom: 0 }}
          >
            Single Line
          </h1>
          <Textfield label="Text field" />
          <Textfield
            label="Password"
            value={this.state.prefilledVal}
            onChange={this.handlePrefilledChange}
            required
            type="password"
            pattern=".{8,}"
            helpText="Must be at least eight characters"
            helpTextValidate={true}
          />
          <Textfield label="Disabled field" disabled />
        </div>
        <div className="textfields-row">
          <h1 className="mdc-typography--headline mdc-theme--primary">
            Multi Line
          </h1>
          <Textfield label="Message" multiline />
        </div>
        <div className="textfields-row">
          <h1 className="mdc-typography--headline mdc-theme--primary">
            Full Width
          </h1>
          <Textfield placeholder="Name" fullWidth />
          <Textfield placeholder="Comment" fullWidth multiline />
        </div>
      </div>
    );
  }
}

export default Textfields;
