import * as React from 'react';
import { Header } from './header';
import { Main } from './main';
import './app.scss';
import { Copyright } from './copyright';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Meta } from './meta';

const history = createBrowserHistory();
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.hash); // Record a pageview for the given page
});

export class App extends React.Component {
  render() {
    this.initializeReactGA();
    return (
      <div>
        <Header />
        <Main />
        <Copyright />
      </div>
    )
  }

  initializeReactGA() {
    ReactGA.initialize('UA-149615220-1');
  }
}
