import * as React from 'react';
import { Page } from './page';
import { images } from '../images';
import { texts } from '../texts';
import './../main.scss';

export class InfantMassage extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <h1>INFANT MASSAGE</h1>
        <Page image={images['infant-massage']} text={texts['infant-massage']} />
      </>
    );
  }
}
