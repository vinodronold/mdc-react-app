import React from 'react';
import Helmet from 'react-helmet';

const LayoutGrid = () => (
  <div className="mdc-layout-grid">
    <Helmet title="Layout Grid" />
    <div className="mdc-layout-grid__cell">
      <div className="cell-placeholder" />
    </div>
  </div>
);

export default LayoutGrid;
