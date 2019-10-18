import * as React from 'react';
import './../main.scss';
import './the-method.scss';
import { Page } from './page';
import { texts } from '../texts';

export class TheMethod extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <h1>THE METHOD</h1>
        <Page title="TEACH · SUPPORT · CHALLENGE" text={texts['teach-support-challenge']} />
        <Page title='HANDS-ON · HOLISTIC · INNOVATIVE' text={texts['hands-on']} />
      </>
    );
  }
}
