import * as React from 'react';
import { Page } from './page';
import { texts } from '../texts';
import './../main.scss';

export class TermsOfUse extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <h1>TERMS OF USE</h1>
        <Page text={texts['terms-of-use']} />
      </>
    );
  }
}
