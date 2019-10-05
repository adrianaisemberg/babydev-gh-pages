import * as React from 'react';
import { ServiceLink } from '../controls/service-link';
import './../main.scss';
import './services.scss';
var services = require('./services.json');
var classNames = require('classnames');

export class Services extends React.Component {
  render() {
    window.scrollTo(0, 0)
    var headers = services.header.map((header, index) => (
      <div key={index}>{header.text}</div>
    ));

    var intro = services.intro.map((intro, index) => (
      <div key={index}>{intro.text}</div>
    ));

    var serviceLinks = services.services.map((service, index) => (
      <ServiceLink
        key={index}
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        duration={service.duration}
        prices={service.prices}
      />
    ));

    return (
      <>
        <h1>SERVICES</h1>
        <div className={classNames("service-header")}>{headers}</div>
        <div className={classNames("service-intro")}>{intro}</div>
        <div className={classNames("content", "column")}>{serviceLinks}</div>
      </>
    );
  }
}
