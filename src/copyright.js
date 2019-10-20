import * as React from 'react';
import { Link } from 'react-router-dom'
import './copyright.scss';
var classNames = require('classnames');

export class Copyright extends React.Component {
  render() {
    return (
      <div className={classNames("copyright")}>&copy; Copyright {(new Date().getFullYear())}, Lilach Aisemberg  |  <Link to="" onClick={()=>this.mailto()}>lilach@babydevstudio.com</Link>  |  <Link to='/disclaimer'>Disclaimer</Link>  |  <Link to='/terms-of-use'>Terms</Link></div>
    )
  }

  mailto(){
    window.location.href = "mailto:lilach@babydevstudio.com"
  }
}