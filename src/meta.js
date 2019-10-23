import * as React from 'react';

export class Meta extends React.Component {
  render() {
    return (
      <>
        <meta property="og:title" content="BabyDev Studio" />
        {/* <meta property="og:description" content="" /> */}
        <meta property="og:image" content="https://i.imgur.com/gFxjNKQ.png" />
        <meta property="og:url" content="https://babydevstudio.com" />

        <meta name="twitter:title" content="BabyDev Studio" />
        {/* <meta name="twitter:description" content="" /> */}
        <meta name="twitter:image" content="https://i.imgur.com/gFxjNKQ.png" />
      </>
    )
  }
}