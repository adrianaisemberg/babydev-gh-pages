import * as React from 'react';
import DocumentMeta from 'react-document-meta';

export class Meta extends React.Component {
  render() {
    var title = 'BabyDev Studio';
    var image = 'https://i.imgur.com/gFxjNKQ.png';
var url = 'https://babydevstudio.com';

    const meta = {
      title: title,
      image: image,
      // description: '',
      // canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        },
        "og:title": title,
        "twitter:title": title,
        "twitter:image": image,
        "og:image": image,
        "og:url": url
      }
    };

    return <DocumentMeta {...meta} />
  }
}