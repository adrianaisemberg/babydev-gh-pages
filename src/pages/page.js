import * as React from 'react';
import './page.scss';
import './../main.scss';
var classNames = require('classnames');

export class Page extends React.Component {
  render() {
    const { image, title, text } = this.props;
    return (
      <div className={classNames("content", "column", "page")}>
        <img src={image} alt='' />
        <h1>{title}</h1>
        {text.map((t, i) => {
          return <div key={i}>{this.renderContent(t)}</div>
        })}
      </div>
    );
  }

  renderContent(content) {
    return (
      <>
        <h4>{content.header}</h4>
        {content.content.map((c, i) => {
          if (c.subtitle) {
            return <h2 key={i}>{c.subtitle}</h2>
          }

          if (c.text) {
            return <p key={i} dangerouslySetInnerHTML={{ __html: c.text }} />
          }

          if (c.ul) {
            return <ul>
              {c.ul.map((li, i) => <li key={i}>{li}</li>)}
            </ul>
          }

          if (c.ol) {
            return <ol>
              {c.ol.map((li, i) => <li key={i}>{li}</li>)}
            </ol>
          }

          return null;
        })}
      </>
    );
  }
}
