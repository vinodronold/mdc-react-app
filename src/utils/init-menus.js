import { MDCSimpleMenu } from '@material/menu/dist/mdc.menu';

export default function initMenus() {
  const anchors = document.querySelectorAll('.mdc-menu-anchor');
  anchors.forEach(node => {
    const menuNode = node.querySelector('.mdc-simple-menu');
    const menu = new MDCSimpleMenu(menuNode);
    const toggle = node.querySelector('.menu-toggle');
    toggle.addEventListener('click', () => {
      menu.open = !menu.open;
    });
  });
}
