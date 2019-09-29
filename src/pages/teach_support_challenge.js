import * as React from 'react';
import { Page } from './page';
import { texts } from '../texts';
import './../main.scss';
import './about.scss';
var classNames = require('classnames');

export class TeachSupportChallenge extends React.Component {
  render() {
    const cn = classNames("content", "column", "links");
    return (
      <>
        TeachSupportChallenge
        <Page title='TeachSupportChallenge' text={texts['teach-support-challenge']} />
        <div className={cn}>
          <h3>yo</h3>
        </div>
      </>
    );
  }
}
