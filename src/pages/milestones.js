import * as React from 'react';
import { PageLink } from '../controls/page-link';
import { images } from '../images';
import './../main.scss';
import { Title } from '../controls/title';
var milestones = require('./milestones.json');
var classNames = require('classnames');

export class Milestones extends React.Component {
  render() {
    window.scrollTo(0, 0)
    var pageLinks = milestones.map((milestone, index) => (
      <div key={index}>
        {index === 0 ? <div className={classNames("page-link-separator")}></div> : null}
        <PageLink
          href={`/milestone/${milestone.href}`}
          image={images[milestone.image_small]}
          imageOver={images[milestone.image]}
          title={milestone.title}
          subtitle={milestone.subtitle}
        />
        <div className={classNames("page-link-separator")}></div>
      </div>
    ));

    return (
      <>
        <Title text="Milestones" />
        <div className={classNames("page-header-image")}><img src={images['milestones-header']} alt='' /></div>
        <div className={classNames("content", "column")}>{pageLinks}</div>
      </>
    );
  }
}
