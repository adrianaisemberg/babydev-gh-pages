import * as React from 'react';
import './../main.scss';
import './the-method.scss';
import { Page } from './page';
import { texts } from '../texts';
import { Title } from '../controls/title';

export class TheMethod extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <Title text="The Method" />
        <Page title="Teach · Support · Challenge" text={texts['teach-support-challenge']} />
        <Page title='Hands-On · Holistic · Innovative' text={texts['hands-on']} />
      </>
    );
  }
}
