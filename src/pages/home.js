import * as React from 'react';
import { SectionLink } from '../controls/section-link';
import { images } from '../images';
import './../vars.scss';
import './home.scss';
import { CallToAction } from '../call-to-action';
var classNames = require('classnames');

var sections = require('./home.json');

export class Home extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <div className="logo-home" onClick={() => window.location = '/'} />
        {/* <img src={images['lilach-home-1']} alt='' className={classNames("home-image")} /> */}
        {sections.filter(section => !section.disabled).map((section, index) => (
          this.renderSectionLink(section, index)
        ))}
        <CallToAction/>
      </>
    )
  }

  renderSectionLink(section, index) {
    return <SectionLink
      key={index}
      href={section.href}
      image={images[section.image]}
      title={section.title}
      reverse={index % 2 === 1}
      subtitles={section.subtitles}
      subtitle={section.subtitle}
      color={section.color}
      hover_color={section.hover_color}
    />
  }
}
