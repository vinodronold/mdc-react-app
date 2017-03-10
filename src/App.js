import React from 'react';
import Layout from './components/Layout';

export default class App extends React.Component {
  render() {
    return (
      <Layout>
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__cell">
            <h1 className="mdc-typography--display1 mdc-theme--primary">
              Typography
            </h1>
            <h1 className="mdc-typography--display4">Display 4</h1>
            <h1 className="mdc-typography--display3">Display 3</h1>
            <h1 className="mdc-typography--display2">Display 2</h1>
            <h1 className="mdc-typography--display1">Display 1</h1>
            <h1 className="mdc-typography--headline">Headline</h1>
            <h1 className="mdc-typography--title">Title</h1>
            <h1 className="mdc-typography--subheading2">Subheading 2</h1>
            <h1 className="mdc-typography--subheading1">Subheading 1</h1>
            <h1 className="mdc-typography--body2">Body 2</h1>
            <h1 className="mdc-typography--body1">Body 1</h1>
            <h1 className="mdc-typography--caption">Caption</h1>
          </div>
        </div>
      </Layout>
    );
  }
}
