import LayoutGrid from './routes/LayoutGrid';
import Typography from './routes/Typography';
import Components from './routes/Components';
import Theme from './routes/Theme';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Layout Grid',
    component: LayoutGrid
  },
  {
    path: '/typography',
    title: 'Typography',
    component: Typography
  },
  {
    path: '/components',
    title: 'Components',
    component: Components
  },
  {
    path: '/theme',
    title: 'Theme',
    component: Theme
  }
];

export default routes;
