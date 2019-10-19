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
        <Title text="THE METHOD" />
        <Page title="TEACH · SUPPORT · CHALLENGE" text={texts['teach-support-challenge']} />
        <Page title='HANDS-ON · HOLISTIC · INNOVATIVE' text={texts['hands-on']} />
      </>
    );
  }
}
