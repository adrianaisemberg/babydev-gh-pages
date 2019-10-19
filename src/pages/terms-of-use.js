import * as React from 'react';
import { Page } from './page';
import { texts } from '../texts';
import './../main.scss';
import { Title } from '../controls/title';

export class TermsOfUse extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <Title text="TERMS OF USE" />
        <Page text={texts['terms-of-use']} />
      </>
    );
  }
}
