import * as React from 'react';
import './contact.scss';
import './../main.scss';
import { Title } from '../controls/title';
var classNames = require('classnames');

export class Contact extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <div className={classNames("content", "column")}>
        <Title text="Contact"/>
        <p className="contact-intro">I’m here to help you gain or strengthen your parenting gut!</p>
        <form name='contact' action='https://formspree.io/lilachberko@gmail.com' method='POST'>
          <input type="hidden" name="_subject" value="BabyDevStudio Contact" />
          <input type="hidden" name="_cc" value="adrianaisemberg@gmail.com" />
          <div className="input">
            <label htmlFor='form.name'>Name</label>
            <div><input type='text' name='Name' id='form.name' required/></div>
          </div>
          <div className="input">
            <label htmlFor='form.email'>Email</label>
            <div><input type='email' name='Email' id='form.email' required/></div>
          </div>
          <div className="input">
            <label htmlFor='form.tel'>Phone</label>
            <div><input type='tel' name='Phone' id='form.tel' /></div>
          </div>
          <div className="input">
            <label htmlFor='form.text'>Message</label>
            <div><textarea name='message' id='form.message' rows={10} /></div>
          </div>
          <div className="input">
            <input type='submit' value='Send' />
          </div>
        </form>
      </div>
    );
  }
}
