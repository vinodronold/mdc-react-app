import React from 'react';
import Button from '../components/Button';

const Cards = () => (
  <div>
    <h1
      className="mdc-typography--headline mdc-theme--primary mdc-typography--adjust-margin"
    >
      Cards
    </h1>

    <div className="mdc-card demo-card">
      <section
        className="mdc-card__media card-media--16-9"
        style={{ backgroundImage: 'url(/images/card_bg.png)' }}
      />
      <section className="mdc-card__primary">
        <h1 className="mdc-card__title mdc-card__title--large">
          Card Title
        </h1>
      </section>
      <section className="mdc-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ea natus reiciendis animi, cumque adipisci nobis earum voluptatum.
      </section>
      <section className="mdc-card__actions">
        <Button className="mdc-card__action" label="Action 1" compact primary />
        <Button className="mdc-card__action" label="Action 2" compact primary />
      </section>
    </div>

    <div className="mdc-card demo-card card--with-avatar">
      <section className="mdc-card__primary">
        <div className="card__avatar" />
        <h1 className="mdc-card__title">Title</h1>
        <h2 className="mdc-card__subtitle">Subhead</h2>
      </section>
      <section
        className="mdc-card__media card-media--16-9"
        style={{ backgroundImage: 'url(/images/card_bg.png)' }}
      />
      <section className="mdc-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ea natus reiciendis animi, cumque adipisci nobis earum voluptatum.
      </section>
      <section className="mdc-card__actions">
        <Button className="mdc-card__action" label="Action 1" compact primary />
        <Button className="mdc-card__action" label="Action 2" compact primary />
      </section>
    </div>

    <div
      className="mdc-card demo-card card--with-bg mdc-card--theme-dark"
      style={{ backgroundImage: 'url(/images/card_bg.png)' }}
    >
      <section className="mdc-card__primary">
        <h1 className="mdc-card__title mdc-card__title--large">Title</h1>
        <h2 className="mdc-card__subtitle">Subhead</h2>
      </section>
      <section className="mdc-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ea natus reiciendis animi, cumque adipisci nobis earum voluptatum.
      </section>
      <section className="mdc-card__actions">
        <Button
          className="mdc-card__action mdc-button--theme-dark"
          label="Action 1"
          compact
        />
        <Button
          className="mdc-card__action mdc-button--theme-dark"
          label="Action 2"
          compact
        />
      </section>
    </div>

    <div className="mdc-card demo-card">
      <section className="mdc-card__primary">
        <h1 className="mdc-card__title mdc-card__title--large">
          Title goes here
        </h1>
        <h2 className="mdc-card__subtitle">Subtitle here</h2>
      </section>
      <section className="mdc-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </section>
      <section className="mdc-card__actions">
        <Button className="mdc-card__action" label="Action 1" compact />
        <Button className="mdc-card__action" label="Action 2" compact />
      </section>
    </div>
    <div className="mdc-card demo-card">
      <div className="mdc-card__horizontal-block">
        <section className="mdc-card__primary">
          <h1 className="mdc-card__title mdc-card__title--large">Title here</h1>
          <h2 className="mdc-card__subtitle">Subtitle here</h2>
        </section>
        <img
          className="mdc-card__media-item mdc-card__media-item--1x"
          src="/images/card_bg.png"
          alt="Media item"
        />
      </div>
      <section className="mdc-card__actions">
        <Button className="mdc-card__action" label="Action 1" compact />
        <Button className="mdc-card__action" label="Action 2" compact />
      </section>
    </div>

    <div className="mdc-card demo-card">
      <div className="mdc-card__horizontal-block">
        <img
          className="mdc-card__media-item mdc-card__media-item--1x"
          src="/images/card_bg.png"
          alt="Media item"
        />
        <section className="mdc-card__actions mdc-card__actions--vertical">
          <Button className="mdc-card__action" label="Action 1" compact />
          <Button className="mdc-card__action" label="Action 2" compact />
        </section>
      </div>
    </div>

  </div>
);

export default Cards;
