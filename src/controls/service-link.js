import * as React from 'react';
import './service-link.scss';
import { CallToAction } from '../call-to-action';
var classNames = require('classnames');

export class ServiceLink extends React.Component {
  render() {
    const { title, age, subtitle, description, duration, prices, notes } = this.props;

    return (
      <div className={classNames("service")}>
        <h2 className={classNames("service-title", "service-name")}>{title}</h2>
        <h2 className={classNames("service-title")}>{age}</h2>
        <div className={classNames("service-content")}>
          <h4>{subtitle}</h4>
          <ul>
            {description.map((c, i) => <li key={i} dangerouslySetInnerHTML={{ __html: c.text }} />)}
          </ul>
          <p className={classNames("duration")} dangerouslySetInnerHTML={{ __html: duration }} />
          <div className={classNames("prices")}>
            {prices.map((price, i) => <p key={i} dangerouslySetInnerHTML={{ __html: price }} />)}
          </div>
          <div>
            {notes ? notes.map((c, i) => <div key={i} dangerouslySetInnerHTML={{ __html: c.text }} />) : null}
          </div>
        </div>
        <CallToAction />
      </div>
    )
  }
}
