import React from 'react';

class LayoutGrid extends React.Component {
  render() {
    return (
      <div className="mdc-layout-grid">
        <div className="mdc-layout-grid__cell">
          <div className="cell-placeholder" />
        </div>
      </div>
    );
  }
}

export default LayoutGrid;
