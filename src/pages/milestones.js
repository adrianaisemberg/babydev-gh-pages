import * as React from 'react';
import { PageLink } from '../controls/page-link';
import { images } from '../images';
import './../main.scss';
import { Copyright } from '../copyright';
var milestones = require('./milestones.json');
var classNames = require('classnames');

export class Milestones extends React.Component {
  render() {
    window.scrollTo(0, 0)
    var pageLinks = milestones.map((milestone, index) => (
      <PageLink
        key={index}
        href={`/milestone/${milestone.href}`}
        image={images[milestone.image]}
        title={milestone.title}
        subTitle={milestone.subTitle}
      />
    ));

    return (
      <>
        <h1>MILESTONES</h1>
        <div className={classNames("content", "column")}>{pageLinks}</div>
        <Copyright/>
      </>
    );
  }
}
