import * as React from 'react';
import { ServiceLink } from '../controls/service-link';
import './../main.scss';
import './services.scss';
import { images } from '../images';
import { Title } from '../controls/title';
var services = require('./services.json');
var classNames = require('classnames');

export class Services extends React.Component {
  render() {
    window.scrollTo(0, 0)
    var intro = services.intro.map((intro, index) => (
      <p key={index}>{intro.text}</p>
    ));

    var serviceLinks = services.services.map((service, index) => (
      <ServiceLink
        key={index}
        title={service.title}
        age={service.age}
        subtitle={service.subtitle}
        description={service.description}
        duration={service.duration}
        prices={service.prices}
        notes={service.notes}
      />
    ));

    return (
      <>
        <Title text="Services" />
        <div className={classNames("services", "column", "page")}>
          <div className={classNames("page-header-image")}><img src={images['services-header']} alt='' /></div>
          {intro}
          <div className={classNames("content")}>{serviceLinks}</div>
        </div>
      </>
    );
  }
}
