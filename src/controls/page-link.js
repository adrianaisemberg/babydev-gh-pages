import * as React from 'react';
import { Link } from 'react-router-dom'
import './page-link.scss';

export class PageLink extends React.Component {
  render() {
    const { href, image, imageOver, subTitle } = this.props;

    return (
      <Link to={href} className="page-link">
        <div class="img-container">
          {image ? <img src={image} alt='' /> : null}
          {image ? <img src={imageOver} alt='' className="img-over" /> : null}
        </div>
        <div className='page-link-text'>
          {this.renderTitle()}
          {subTitle ? <h2>{subTitle}</h2> : null}
        </div>
      </Link>
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
