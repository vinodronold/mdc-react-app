import React from 'react';
import Helmet from 'react-helmet';

const Typography = () => (
  <div className="mdc-layout-grid">
    <Helmet title="Typography" />
    <div className="mdc-layout-grid__cell">
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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt est accusamus accusantium minima dolorem voluptas error aspernatur, ea, laboriosam, praesentium eaque inventore mollitia dolorum! Expedita tempore dolorum impedit, in consequuntur.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt est accusamus accusantium minima dolorem voluptas error aspernatur, ea, laboriosam, praesentium eaque inventore mollitia dolorum! Expedita tempore dolorum impedit, in consequuntur.
      </p>
    </div>
  </div>
);

export default Typography;
