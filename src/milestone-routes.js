import * as React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Page } from './pages/page';
import { images } from './images';
import { texts } from './texts';
var milestones = require('./pages/milestones.json');

export class MilestoneRoutes extends React.Component {
  render() {
    var routes = milestones.map((milestone, index) => {
      var page = (
        <Page
          key={index}
          image={images[milestone.image]}
          title={`${milestone.title}`}
          subtitle={`${milestone.subtitle}`}
          text={texts[milestone.text]}
          next_milestone={milestones[index+1]}
        />
      );

      return (
        <Route
          key={index}
          path={`/milestone/${milestone.href}`}
          render={() => page}
        />
      );
    });

    return (
      <Switch>
        {routes}
      </Switch>
    );
  }
}
