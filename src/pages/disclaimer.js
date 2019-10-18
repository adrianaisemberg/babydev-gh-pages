import * as React from 'react';
import { Page } from './page';
import { texts } from '../texts';
import './../main.scss';

export class Disclaimer extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <h1>DISCLAIMER OF ADVICE</h1>
        <Page text={texts['disclaimer']} />
      </>
    );
  }
}
