import * as React from 'react';
import './title.scss';
var classNames = require('classnames');

export class Title extends React.Component {
  render() {
    const { text } = this.props;
    return (
      <div className={classNames("page-title")}>
        <div className="logo" onClick={() => window.location = '/'} />
        <h1>{text}</h1>
      </div>
    )
  }
}
