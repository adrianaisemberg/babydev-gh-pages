import * as React from 'react';
import './contact.scss';
import './../main.scss';
var classNames = require('classnames');

export class Contact extends React.Component {
  render() {
    const gotchaStyle = {display:'none'};
    return (
      <div className={classNames("content", "column")}>
        <form action='https://formspree.io/adrianaisemberg@gmail.com' method='POST'>
          <input type="hidden" name="_subject" value="BabyDevStudio Contact" />
          {/* <input type="hidden" name="_cc" value="adrianaisemberg@email.com" /> */}
          {/* <input type="text" name="_gotcha" style={gotchaStyle} /> */}
          <div className="input">
            <label htmlFor='form.name'>Name:</label>
            <div><input type='text' name='name' id='form.name' /></div>
          </div>
          <div className="input">
            <label htmlFor='form.email'>Email:</label>
            <div><input type='email' name='_replyto' id='form.email' /></div>
          </div>
          <div className="input">
            <label htmlFor='form.phone'>Phone:</label>
            <div><input type='tel' name='_replyto' id='form.phone' /></div>
          </div>
          <div className="input">
            <label htmlFor='form.text'>Message:</label>
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
