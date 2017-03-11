import React, { PureComponent, PropTypes } from 'react';
import { Set } from 'immutable';
import { MDCTemporaryDrawerFoundation } from '@material/drawer/dist/mdc.drawer';
import * as utils from '../utils/drawer-util';

const {
  FOCUSABLE_ELEMENTS,
  OPACITY_VAR_NAME
} = MDCTemporaryDrawerFoundation.strings;

class TemporaryDrawer extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool,
    close: PropTypes.func.isRequired,
    toolbarSpacer: PropTypes.node,
    header: PropTypes.node,
    children: PropTypes.node
  };

  state = {
    classes: new Set(['mdc-temporary-drawer'])
  };

  foundation = new MDCTemporaryDrawerFoundation({
    addClass: className => {
      this.setState(prevState => ({
        classes: prevState.classes.add(className)
      }));
    },
    removeClass: className => {
      this.setState(prevState => ({
        classes: prevState.classes.remove(className)
      }));
    },
    hasClass: className => {
      return this.state.classes.includes(className);
    },
    hasNecessaryDom: () => {
      return Boolean(this._drawer);
    },
    registerInteractionHandler: (evt, handler) => {
      if (evt === 'click') {
        // click event will be handled synthetically
        return;
      }
      this._root.addEventListener(evt, handler);
    },
    deregisterInteractionHandler: (evt, handler) => {
      this._root.removeEventListener(evt, handler);
    },
    registerDrawerInteractionHandler: (evt, handler) => {
      if (evt === 'click') {
        return;
      }
      this._drawer.addEventListener(evt, handler);
    },
    deregisterDrawerInteractionHandler: (evt, handler) => {
      this._drawer.removeEventListener(evt, handler);
    },
    registerTransitionEndHandler: handler => {
      this._drawer.addEventListener('transitionend', handler);
    },
    deregisterTransitionEndHandler: (evt, handler) => {
      this._drawer.removeEventListener('transitionend', handler);
    },
    registerDocumentKeydownHandler: handler => {
      document.addEventListener('keydown', handler);
    },
    deregisterDocumentKeydownHandler: handler => {
      document.removeEventListener('keydown', handler);
    },
    getDrawerWidth: () => {
      return this._drawer.clientWidth;
    },
    setTranslateX: value => {
      this._drawer.style.setProperty(
        utils.getTransformPropertyName(),
        value === null ? null : `translateX(${value}px)`
      );
    },
    updateCssVariable: value => {
      this._root.style.setProperty(OPACITY_VAR_NAME, value);
    },
    getFocusableElements: () => {
      return this._drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
    },
    saveElementTabState: el => {
      utils.saveElementTabState(el);
    },
    restoreElementTabState: el => {
      utils.restoreElementTabState(el);
    },
    makeElementUntabbable: el => {
      el.setAttribute('tabindex', -1);
    },
    isRtl: () => {
      return getComputedStyle(this._root).getPropertyValue('direction') ===
        'rtl';
    }
  });

  componentDidMount() {
    this.foundation.init();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open) {
      this.foundation.open();
    } else {
      this.foundation.close();
    }
  }

  componentWillUnmount() {
    this.foundation.destroy();
  }

  render() {
    const { className, toolbarSpacer, header, children, close } = this.props;
    const { classes } = this.state;
    return (
      <aside
        className={`${classes.toJS().join(' ')} ${className}`}
        ref={n => this._root = n}
        onClick={close}
      >
        <nav
          className="mdc-temporary-drawer__drawer"
          ref={n => this._drawer = n}
          onClick={evt => evt.stopPropagation()}
        >
          {toolbarSpacer
            ? <div className="mdc-temporary-drawer__toolbar-spacer">
                {toolbarSpacer}
              </div>
            : null}
          {header
            ? <header className="mdc-temporary-drawer__header">
                <div
                  className="mdc-permanent-drawer__header-content mdc-theme--primary-bg mdc-theme--text-primary-on-primary"
                >
                  {header}
                </div>
              </header>
            : null}
          <div className="mdc-temporary-drawer__content">
            {children}
          </div>
        </nav>
      </aside>
    );
  }
}

export default TemporaryDrawer;
