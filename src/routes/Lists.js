import React from 'react';
import IconToggle from '../components/IconToggle';

const Lists = () => {
  return (
    <div>
      <ul className="mdc-list">
        <li className="mdc-list-item">Single-line item</li>
        <li className="mdc-list-item">Single-line item</li>
        <li className="mdc-list-item">Single-line item</li>
      </ul>

      <ul className="mdc-list mdc-list--two-line">
        <li className="mdc-list-item">
          <span className="mdc-list-item__text">
            <span className="mdc-list-item__text__primary">Two-line item</span>
            <span className="mdc-list-item__text__primary">Secondary text</span>
          </span>
        </li>
      </ul>

      <ul className="mdc-list">
        <li className="mdc-list-item">
          <i
            className="mdc-list-item__start-detail material-icons"
            aria-hidden="true"
          >
            network_wifi
          </i>
          Wi-Fi
        </li>
        <li className="mdc-list-item">
          <i
            className="mdc-list-item__start-detail material-icons"
            aria-hidden="true"
          >
            bluetooth
          </i>
          Bluetooth
        </li>
        <li className="mdc-list-item">
          <i
            className="mdc-list-item__start-detail material-icons"
            aria-hidden="true"
          >
            data_usage
          </i>
          Data Usage
        </li>
      </ul>

      <h2 className="mdc-typography--headline">Contacts</h2>
      <ul className="mdc-list mdc-list--avatar-list">
        <li className="mdc-list-item">
          <div
            className="mdc-list-item__start-detail"
            style={{ background: 'rgba(0, 0, 0, .26)' }}
            width="56"
            height="56"
          />
          Janet Perkins
        </li>
        <li className="mdc-list-item">
          <div
            className="mdc-list-item__start-detail"
            style={{ background: 'rgba(0, 0, 0, .26)' }}
            width="56"
            height="56"
          />
          Mary Johnson
        </li>
        <li className="mdc-list-item">
          <div
            className="mdc-list-item__start-detail"
            style={{ background: 'rgba(0, 0, 0, .26)' }}
            width="56"
            height="56"
          />
          Peter Carlsson
        </li>
      </ul>
      <ul className="mdc-list">
        <li className="mdc-list-item">
          Janet Perkins
          <IconToggle className="mdc-list-item__end-detail" icon="favorite" />
        </li>
        <li className="mdc-list-item">
          Mary Johnson
          <IconToggle className="mdc-list-item__end-detail" icon="favorite" />
        </li>
        <li className="mdc-list-item">
          Janet Perkins
          <IconToggle className="mdc-list-item__end-detail" icon="favorite" />
        </li>
      </ul>
    </div>
  );
};

export default Lists;
