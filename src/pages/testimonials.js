import * as React from 'react';
import './testimonials.scss';
import './../main.scss';
import { texts } from '../texts';
import { Title } from '../controls/title';
import { images } from '../images';
import { CallToAction } from '../call-to-action';
var classNames = require('classnames');
var testimonials = texts['testimonials'];

export class Testimonials extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <div className={classNames("testimonials", "column")}>
        <Title text="Testimonials" />
        <img src={images["testimonials-4"]} alt='' className={classNames("page-image")} />
        <div>{this.renderTestimonials()}</div>
        <CallToAction/>
        <img src={images["testimonials-1"]} alt='' className={classNames("page-image")} />
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
