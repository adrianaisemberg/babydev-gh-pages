import * as React from 'react';
import { Page } from './page';
import { texts } from '../texts';
import './../main.scss';
import './about.scss';

export class TeachSupportChallenge extends React.Component {
  render() {
    return (
      <Page title="TEACH · SUPPORT · CHALLENGE" text={texts['teach-support-challenge']} />
    );
  }
}
