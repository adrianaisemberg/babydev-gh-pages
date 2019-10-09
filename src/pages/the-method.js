import * as React from 'react';
import { PageLink } from '../controls/page-link';
import './../main.scss';
import './the-method.scss';
var classNames = require('classnames');

export class TheMethod extends React.Component {
  render() {
    window.scrollTo(0, 0)
    const cn = classNames("content", "column", "links", "the-method");
    return (
      <>
        <h1>THE METHOD</h1>
        <div className={cn}>
          <PageLink small={true} href='/teach-support-challenge' title={'TEACH · SUPPORT · CHALLENGE.'} />
          <PageLink small={true} href='/hands-on' title={'HANDS-ON · HOLISTIC · INNOVATIVE'} />
        </div>
      </>
    );
  }
}
