import * as React from 'react';
import { Page } from './page';
import { texts } from '../texts';
import './../main.scss';
import './about.scss';

export class HandsOn extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <Page title='HANDS-ON · HOLISTIC · INNOVATIVE' text={texts['hands-on']} />
    );
  }
}
