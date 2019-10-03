import * as React from 'react';
import { Routes } from './routes';

export class Main extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <main className="content">
        <Routes />
      </main>
    )
  }
}
