import * as React from 'react';
import { Routes } from './routes';
var classNames = require('classnames');

export class Main extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <main className={classNames("content", "column")}>
        <Routes />
      </main>
    )
  }
}
