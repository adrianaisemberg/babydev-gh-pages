import * as React from 'react';
import { Header } from './header';
import { Main } from './main';
import './app.scss';
import { Copyright } from './copyright';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Copyright />
      </div>
    )
  }
}
