import * as React from 'react';
import { Page } from './page';
import { texts } from '../texts';
import './../main.scss';
import { Title } from '../controls/title';

export class Disclaimer extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <Title text="DISCLAIMER OF ADVICE" />
        <Page text={texts['disclaimer']} />
      </>
    );
  }
}
