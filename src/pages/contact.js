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
        <Title text="Contact" />
        <div className="contact-intro">
          <p >I’m here to help you gain or strengthen your parenting gut!</p>
          <p >Please send me a message. Let me know how can I help you and your baby.</p>
        </div>

        <form name='contact' action='https://getform.io/f/592d77a3-8405-494b-83be-dbcb8ce2041b' method='POST'>
          <div className="input">
            <label htmlFor='form.name'>Name</label>
            <input type='text' name='Name' id='form.name' required />
          </div>
          <div className="input">
            <label htmlFor='form.babyname'>Your baby's name and age, unless still pregnant</label>
            <input type='text' name='Baby' id='form.babyname' />
          </div>
          <div className="input">
            <label htmlFor='form.email'>Email</label>
            <input type='email' name='Email' id='form.email' required />
          </div>
          <div className="input">
            <label htmlFor='form.tel'>Phone</label>
            <input type='tel' name='Phone' id='form.tel' />
          </div>
          <div className="input">
            <label htmlFor='form.text'>Message</label>
            <textarea name='message' id='form.message' rows={10} />
          </div>
          <div className="input">
            <input type='submit' value='Send' />
          </div>
        </form>
      </div>
    );
  }
}
