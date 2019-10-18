import * as React from 'react';
import './page.scss';
import './../controls/page-link.scss';
import './../main.scss';
import { PageLink } from '../controls/page-link';
import { images } from '../images';
var classNames = require('classnames');

export class Page extends React.Component {
  render() {
    window.scrollTo(0, 0)
    const { image, title, subtitle, text, next_milestone } = this.props;
    return (
      <div className={classNames("content", "column", "page")}>
        <img src={image} alt='' className={classNames("page-image")} />
        {title ? <h1>{title}</h1> : null}
        {subtitle ? <h2>{subtitle}</h2> : null}
        {text.map((t, i) => {
          return <div key={i}>{this.renderContent(t)}</div>
        })}
        {next_milestone ? this.renderNextMilestone(next_milestone) : null}
      </div>
    );
  }

  renderNextMilestone(next_milestone) {
    return <>
      <div className={classNames("next-milestone-title")}>Next Milestone:</div>
      <PageLink
        className={classNames("next-milestone")}
        href={`/milestone/${next_milestone.href}`}
        image={images[next_milestone.image_small]}
        imageOver={images[next_milestone.image]}
        title={next_milestone.title}
        subtitle={next_milestone.subtitle}
      />
    </>
  }

  renderContent(content) {
    return (
      <>
        {content.header ? <h4>{content.header}</h4> : null}
        {content.content.map((c, i) => {
          if (c.subtitle) {
            return <h2 key={i}>{c.subtitle}</h2>
          }

          if (c.text) {
            return <p key={i} dangerouslySetInnerHTML={{ __html: c.text }} />
          }

          if (c.ul) {
            return <ul key={i}>
              {c.ul.map((li, i) => <li key={i}>{li}</li>)}
            </ul>
          }

          if (c.ol) {
            return <ol key={i}>
              {c.ol.map((li, i) => <li key={i}>{li}</li>)}
            </ol>
          }

          return null;
        })}
      </>
    );
  }
}
