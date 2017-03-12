import React, { Component } from 'react';
import TextField from '../components/Textfield';

class Textfields extends Component {
  render() {
    return (
      <div>
        <h1
          className="mdc-typography--title mdc-theme--primary"
          style={{ marginBottom: 0 }}
        >
          Single Line
        </h1>
        <TextField label="Text field" />
        <h1 className="mdc-typography--title mdc-theme--primary">Multi Line</h1>
        <h1 className="mdc-typography--title mdc-theme--primary">Full Width</h1>
      </div>
    );
  }
}

export default Textfields;
