import * as React from 'react';
import './section-link.scss';
import { Link } from 'react-router-dom'
var classNames = require('classnames');

export class SectionLink extends React.Component {
  render() {
    const { href, image, title, subtitles, subtitle, reverse, color } = this.props;
    const lines = subtitles.map(line => {
      return <p key={line}>{line}</p>;
    });

    const style = {
      color,
    };

    return (
      <Link to={href} className={classNames("section-link", { "reverse": reverse })}>
        <div className="image-container">
          <img src={image} alt='' />
          <h2 className="lines">{lines}</h2>
        </div>
        <div className="gradient-background" />
        <div className="title-container">
          <h1 style={style}>{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
        <h1 className="title-separate" style={style}>{title}</h1>
        <h2 className={classNames("title-separate", "subtitle")}>{subtitle}</h2>
      </Link>
    )
  }
}
