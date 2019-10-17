import * as React from 'react';
import './service-link.scss';
var classNames = require('classnames');

export class ServiceLink extends React.Component {
  render() {
    const { title, subtitle, description, duration, prices, notes } = this.props;

    return (
      <div className={classNames("service")}>
        <div className={classNames("service-title")}>
          <div>{title}</div>
        </div>
        <div className={classNames("service-content")}>
          <h4>{subtitle}</h4>
          <ul>
            {description.map((c, i) => <li key={i} dangerouslySetInnerHTML={{ __html: c.text }} />)}
          </ul>
          <p dangerouslySetInnerHTML={{ __html: duration }}/>
          <div className={classNames("prices")}>
            {prices.map((price, i) => <p key={i} dangerouslySetInnerHTML={{ __html: price }} />)}
          </div>
          <div>
            {notes ? notes.map((c, i) => <div key={i} dangerouslySetInnerHTML={{ __html: c.text }} />) : null}
          </div>
        </div>
      </div>
    )
  }
}
