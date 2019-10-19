import * as React from 'react';
import './testimonials.scss';
import './../main.scss';
import { texts } from '../texts';
import { Title } from '../controls/title';
var classNames = require('classnames');
var testimonials = texts['testimonials'];

export class Testimonials extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <div className={classNames("testimonials", "column")}>
        <Title text="Testimonials" />
        <div>{this.renderTestimonials()}</div>
      </div>
    )
  }

  renderTestimonials() {
    return testimonials.testimonials.map((testimonial, index) => (
      <div key={index} className={classNames("testimonial-container")}>
        <div className={classNames("testimonial")}>{this.renderTestimonial(testimonial.testimonial)}</div>
        <div className={classNames("testimonial-separator")}></div>
      </div>
    ));
  }

  renderTestimonial(testimonial) {
    return testimonial.map((text, index) => (
      <blockquote key={index}>{text.text}</blockquote>
    ));
  }
}
