import * as React from 'react';
import { Page } from './page';
import { texts } from '../texts';
import './../main.scss';
import './about.scss';
var classNames = require('classnames');

export class HandsOn extends React.Component {
  render() {
    const cn = classNames("content", "column", "links");
    return (
      <>
        HandsOn
        <Page title='HandsOn' text={texts['hands-on']}/>
        <div className={cn}>
          <h3>yo</h3>
        </div>
      </>
    );
  }
}
