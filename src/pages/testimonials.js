import * as React from 'react';
import './testimonials.scss';
import './../main.scss';
var classNames = require('classnames');
const testimonials = require('./testimonials.json')

export class Testimonials extends React.Component {
  render() {
    return (
      <>
        <h1 className="page">TESTIMONIALS</h1>
        <div className={classNames("content", "column", "testimonials")}>
          {testimonials.map((testimonial, i) => <p key={i}>"{testimonial}"</p>)}
        </div>
      </>
    )
  }
}
