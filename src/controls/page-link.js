import * as React from 'react';
import { Link } from 'react-router-dom'
import './page-link.scss';
var classNames = require('classnames');

export class PageLink extends React.Component {
  render() {
    const { href, image, imageOver, subtitle, className } = this.props;

    return (
      <Link to={href} className={classNames("page-link", className)}>
        {image ? this.renderImage(image, imageOver) : null}
        <div className='page-link-text'>
          {this.renderTitle()}
          {subtitle ? <h2>{subtitle}</h2> : null}
        </div>
      </Link>
    )
  }

  renderImage(image, imageOver) {
    return (
      <div className="img-container">
        <img src={image} alt='' />
        <img src={imageOver} alt='' className="img-over" />
      </div>
    )
  }

  renderTitle() {
    const { title, small } = this.props;
    const className = small ? "small" : "";
    return typeof title === 'string' ?
      <h1 className={className}>{title}</h1> :
      title.map((t, i) => <h1 key={i} className={className}>{t}</h1>);
  }
}
