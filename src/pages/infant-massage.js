import * as React from 'react';
import { Page } from './page';
import { images } from '../images';
import { texts } from '../texts';
import './../main.scss';
import { Title } from '../controls/title';

export class InfantMassage extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <>
        <Title text="INFANT MASSAGE" />
        <Page image={images['infant-massage']} text={texts['infant-massage']} />
      </>
    );
  }
}
