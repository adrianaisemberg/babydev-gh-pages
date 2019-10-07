import * as React from 'react';
import './copyright.scss';
var classNames = require('classnames');

export class Copyright extends React.Component {
  render() {
    return (
      <div className={classNames("copyright")}>&copy; Copyright {(new Date().getFullYear())}, Lilach Aisemberg</div>
    )
  }
}