import * as React from 'react';
import './page.scss';
import './../main.scss';
var classNames = require('classnames');

// export interface PageProps {
//   image: string;
//   title: string;
//   subtitle?: string;
//   text: string[];
// }

export class Page extends React.Component {
  render() {
    const { image, title, subtitle, text } = this.props;
    return (
      <div className={classNames("content", "column", "page")}>
        <img src={image} alt='' />
        <h1>{title}</h1>
        {subtitle ? <h2>{subtitle}</h2> : null}
        {text.map((t, i) => <p key={i}>{t}</p>)}
      </div>
    );
  }
}
