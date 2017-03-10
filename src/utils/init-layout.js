import { MDCTemporaryDrawer } from '@material/drawer/dist/mdc.drawer';

let tempDrawer = null;

export default function initLayout() {
  onResize();

  document.querySelector('.toggle-drawer').addEventListener('click', () => {
    if (tempDrawer) {
      tempDrawer.open = true;
    } else {
      document
        .querySelector('.mdc-permanent-drawer')
        .classList.toggle('mdc-permanent-drawer--hidden');
      document
        .querySelector('.mdc-toolbar')
        .classList.toggle('mdc-permanent-drawer-adjust');
      document
        .querySelector('main')
        .classList.toggle('mdc-permanent-drawer-adjust');
    }
  });

  window.addEventListener('resize', onResize);
}

function onResize() {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    // Replace temporary drawer with permanent drawer on large screen
    const drawerNodes = document.querySelectorAll(
      '[class*="mdc-temporary-drawer"]'
    );
    drawerNodes.forEach(node => {
      const classNameChange = node.className.replace(
        /mdc-temporary-drawer/i,
        'mdc-permanent-drawer'
      );
      node.className = classNameChange;
    });
    document
      .querySelector('.mdc-toolbar')
      .classList.add('mdc-permanent-drawer-adjust');
    document.querySelector('main').classList.add('mdc-permanent-drawer-adjust');
  } else {
    // Replace permanent drawer with temporary drawer on small screen
    const drawerNodes = document.querySelectorAll(
      '[class*="mdc-permanent-drawer"]'
    );
    drawerNodes.forEach(node => {
      const classNameChange = node.className.replace(
        /mdc-permanent-drawer/i,
        'mdc-temporary-drawer'
      );
      node.className = classNameChange;
    });
    document
      .querySelector('.mdc-toolbar')
      .classList.remove('mdc-permanent-drawer-adjust');
    document
      .querySelector('main')
      .classList.remove('mdc-permanent-drawer-adjust');
  }

  const tempDrawerEl = document.querySelector('.mdc-temporary-drawer');
  if (tempDrawerEl) {
    tempDrawer = new MDCTemporaryDrawer(tempDrawerEl);
  } else {
    tempDrawer = null;
  }
}
