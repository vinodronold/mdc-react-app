import React, { Component } from 'react';
import Button from '../components/Button';
import FAB from '../components/FAB';

class Buttons extends Component {
  render() {
    return (
      <div>
        <div className="demo-button-row">
          <h1
            className="mdc-typography--headline mdc-theme--primary mdc-typography--adjust-margin"
          >
            Floating Action Button
          </h1>
          <p
            className="mdc-typography--subheading1 mdc-typography--adjust-margin"
          >
            A floating action button is used for a promoted action.
          </p>
          <FAB icon="add" />
          <FAB icon="add" plain />
          <FAB icon="add" mini plain />
        </div>
        <div className="demo-button-row">
          <h1
            className="mdc-typography--headline mdc-theme--primary  mdc-typography--adjust-margin"
          >
            Flat
          </h1>
          <p
            className="mdc-typography--subheading1 mdc-typography--adjust-margin"
          >
            Flat buttons are printed on material. They do not lift, but fill with color on press.
          </p>
          <Button label="Default" />
          <Button label="Primary" primary />
          <Button label="Accent" accent />
          <Button label="Compact" compact />
          <Button label="Dense" dense />
          <Button label="Disabled" disabled />
        </div>

        <div className="demo-button-row">
          <h1
            className="mdc-typography--headline mdc-theme--primary mdc-typography--adjust-margin"
          >
            Raised
          </h1>
          <p
            className="mdc-typography--subheading1 mdc-typography--adjust-margin"
          >
            Raised buttons add dimension to mostly flat layouts. They emphasize functions on busy or wide spaces.
          </p>
          <Button label="Default" raised />
          <Button label="Primary" primary raised />
          <Button label="Accent" accent raised />
          <Button label="Compact" compact raised />
          <Button label="Dense" dense raised />
          <Button label="Disabled" raised disabled />
        </div>
      </div>
    );
  }
}

export default Buttons;
