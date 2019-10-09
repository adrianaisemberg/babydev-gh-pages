import * as React from 'react';
import { Page } from './page';
import { images } from '../images';
import { texts } from '../texts';
import './../main.scss';
import './about.scss';

export class About extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <h1>ABOUT</h1>
        <Page image={images['about-me']} title='LILACH AISEMBERG' text={texts['about']} />
      </>
    );
  }
}
