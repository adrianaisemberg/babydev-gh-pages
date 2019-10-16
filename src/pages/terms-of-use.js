import * as React from 'react';
import { Page } from './page';
import { texts } from '../texts';
import './../main.scss';

export class TermsOfUse extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <Page title='Terms of Use' text={texts['terms-of-use']} />
      </>
    );
  }
}
