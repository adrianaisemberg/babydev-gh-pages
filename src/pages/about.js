import * as React from 'react';
import { Page } from './page';
import { images } from '../images';
import { texts } from '../texts';
import './../main.scss';
import './about.scss';
import { Title } from '../controls/title';

export class About extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <Title text="About" />
        <Page image={images['about-me']} title='Lilach Aisemberg' text={texts['about']} feet={true}/>
      </>
    );
  }
}
