import * as React from 'react';
import { ServiceLink } from '../controls/service-link';
import './../main.scss';
var services = require('./services.json');
var classNames = require('classnames');

export class Services extends React.Component {
  render() {
    var serviceLink = services.map((service, index) => (
      <ServiceLink
        key={index}
        title={service.title}
        description={service.description}
        duration={service.duration}
        prices={service.prices}
      />
    ));

    return (
      <div className={classNames("content", "column")}>{serviceLink}</div>
    );
  }
}
