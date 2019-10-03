import * as React from 'react';
import { Page } from './page';
import { texts } from '../texts';
import './../main.scss';
import './about.scss';

export class TeachSupportChallenge extends React.Component {
  render() {
    return (
      <Page title="Teach · Support · Challenge" text={texts['teach-support-challenge']} />
    );
  }
}
