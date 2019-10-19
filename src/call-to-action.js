import * as React from 'react';
import { Link } from 'react-router-dom'
import './call-to-action.scss';
var classNames = require('classnames');

export class CallToAction extends React.Component {
  render() {
    return (
      <div className={classNames("call-to-action")}><Link to='/contact'>Contact me today!</Link></div>
    )
  }
}