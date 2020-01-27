import * as React from 'react';
import './imageGallery.scss';
import './../main.scss';
import { Title } from '../controls/title';
import Gallery from 'react-grid-gallery';
import { images } from '../images';
var classNames = require('classnames');

export class ImageGallery extends React.Component {
  render() {
    const imageKeys = Object.keys(images).filter(key => key.startsWith('gallery_') && !key.includes('_t'));
    const imagesList = imageKeys.map(key => ({
      src: images[key],
      thumbnail: images[key + '_t']
    }));

    return (
      <>
        <div className={classNames("content", "column")}>
          <Title text="Gallery" />
          <Gallery margin={1} images={imagesList} enableImageSelection={false}/>
        </div>
      </>
    );
  }
}
