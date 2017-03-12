import Buttons from './routes/Buttons';
import Toggles from './routes/Toggles';
import Textfields from './routes/Textfields';
import Typography from './routes/Typography';
import Theme from './routes/Theme';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Buttons',
    component: Buttons
  },
  {
    path: '/toggles',
    title: 'Toggles',
    component: Toggles
  },
  {
    path: '/textfields',
    title: 'Textfields',
    component: Textfields
  },
  {
    path: '/typography',
    title: 'Typography',
    component: Typography
  },
  {
    path: '/theme',
    title: 'Theme',
    component: Theme
  }
];

export default routes;
