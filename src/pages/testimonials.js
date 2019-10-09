import * as React from 'react';
import './testimonials.scss';
import './../main.scss';
import { texts } from '../texts';
var classNames = require('classnames');
var testimonials = texts['testimonials'];

export class Testimonials extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <div className={classNames("testimonials", "column")}>
        <h1>TESTIMONIALS</h1>
        <div>{this.renderTestimonials()}</div>
      </div>
    )
  }

  renderTestimonials() {
    return testimonials.testimonials.map(testimonial => (
      <>
        <div className={classNames("testimonial")}>{this.renderTestimonial(testimonial.testimonial)}</div>
        <div className={classNames("testimonial-separator")}></div>
      </>
    ));
  }

  renderTestimonial(testimonial) {
    return testimonial.map(text => (
      <blockquote>{text.text}</blockquote>
    ));
  }
}
