import * as React from 'react';
import './service-link.scss';

// export interface ServiceLinkProps {
//   title: string;
//   description: string;
//   duration: string;
//   prices: string[];
// }

export class ServiceLink extends React.Component {
  render() {
    const { title, description, duration, prices } = this.props;

    return (
      <div className="service-link">
        <h1>{title}</h1>
        <h2>{duration}</h2>
        <div>
          {prices.map((price, i) => <p key={i}>{price}</p>)}
        </div>
        <p>{description}</p>
      </div>
    )
  }
}
