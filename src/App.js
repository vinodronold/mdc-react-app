import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import Layout from './components/Layout';
import LayoutGrid from './routes/LayoutGrid';
import Typography from './routes/Typography';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={LayoutGrid} />
          <Route path="/typography" component={Typography} />
        </Layout>
      </Router>
    );
  }
}
