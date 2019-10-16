import * as React from 'react';
import { Link } from 'react-router-dom'
import './copyright.scss';
var classNames = require('classnames');

export class Copyright extends React.Component {
  render() {
    return (
      <div className={classNames("copyright")}>&copy; Copyright {(new Date().getFullYear())}, Lilach Aisemberg  |  <Link to='/disclaimer'>Disclaimer</Link>  |  <Link to='/terms-of-use'>Terms</Link></div>
    )
  }
}