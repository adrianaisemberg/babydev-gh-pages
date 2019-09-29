import * as React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/home';
import { Milestones } from './pages/milestones';
import { Services } from './pages/services';
import { Contact } from './pages/contact';
import { Articles } from './pages/articles';
import { Testimonials } from './pages/testimonials';
import { TeachSupportChallenge } from './pages/teach_support_challenge';
import { MilestoneRoutes } from './milestone-routes';
import { About } from './pages/about';
import { HandsOn } from './pages/hands-on';

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/milestones' component={Milestones} />
        <Route path='/milestone' component={MilestoneRoutes} />
        <Route path='/services' component={Services} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/articles' component={Articles} />
        <Route path='/testimonials' component={Testimonials} />
        <Route path='/teach-support-challenge' component={TeachSupportChallenge} />
        <Route path='/hands-on' component={HandsOn} />
      </Switch>
    )
  }
}
