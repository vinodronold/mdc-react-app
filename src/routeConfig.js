import Buttons from './routes/Buttons';
import Cards from './routes/Cards';
import Toggles from './routes/Toggles';
import Textfields from './routes/Textfields';
import Typography from './routes/Typography';

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
