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
        <Title text="Terms Of Use" />
        <Page text={texts['terms-of-use']} />
      </>
    );
  }
}
