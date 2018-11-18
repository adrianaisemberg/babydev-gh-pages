import * as React from 'react';
import { PageLink } from '../controls/page-link';
import { images } from '../images';
var milestones = require('./milestones.json');
var styles = {};//require('./../main.scss');
var classNames = require('classnames');

export class Milestones extends React.Component {
  render() {
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
      <div className={classNames(styles.content, styles.column)}>{pageLinks}</div>
    );
  }
}
