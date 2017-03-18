import Buttons from './pages/Buttons';
import Cards from './pages/Cards';
import Lists from './pages/Lists';
import Toggles from './pages/Toggles';
import Textfields from './pages/Textfields';
import Typography from './pages/Typography';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Buttons',
    component: Buttons
  },
  {
    path: '/cards',
    title: 'Cards',
    component: Cards
  },
  {
    path: '/lists',
    title: 'Lists',
    component: Lists
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
  }
];

export default routes;
