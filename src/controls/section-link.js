import * as React from 'react';
import './section-link.scss';
import { Link } from 'react-router-dom'
var classNames = require('classnames');

// export interface SectionLinkProps {
//   href: string;
//   image: string;
//   title: string;
//   subTitles: string[];
//   reverse?: boolean;
//   color: string;
// }

export class SectionLink extends React.Component {
  render() {
    const { href, image, title, subTitles, reverse, color } = this.props;
    const lines = subTitles.map(line => {
      return <p key={line}>{line}</p>;
    });

    const style = {
      color,
    };

    return (
      <Link to={href} className={classNames("section-link", { "reverse": reverse })}>
        <div className="image-container">
          <img src={image} alt='' />
          <h2>{lines}</h2>
        </div>
        <div className="gradient-background" />
        <h1 style={style}>{title}</h1>
      </Link>
    )
  }
}
