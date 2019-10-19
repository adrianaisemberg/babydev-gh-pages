import * as React from 'react';
import './../main.scss';
import './the-method.scss';
import { Page } from './page';
import { texts } from '../texts';
import { Title } from '../controls/title';
import { images } from '../images';

export class TheMethod extends React.Component {
  render() {
    window.scrollTo(0, 0)
    return (
      <div className="the-method">
        <Title text="The Method" />
        <Page image={images["challenge"]} title="Teach · Support · Challenge" text={texts['teach-support-challenge']} />
        <div className="method-separator" />
        <Page image={images["holistic"]} title='Hands-On · Holistic · Innovative' text={texts['hands-on']} />
      </div>
    );
  }
}
