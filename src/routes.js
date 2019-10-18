import * as React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/home';
import { Milestones } from './pages/milestones';
import { Services } from './pages/services';
import { Contact } from './pages/contact';
import { Articles } from './pages/articles';
import { Testimonials } from './pages/testimonials';
import { MilestoneRoutes } from './milestone-routes';
import { About } from './pages/about';
import { TheMethod } from './pages/the-method';
import { InfantMassage } from './pages/infant-massage';
import { Disclaimer } from './pages/disclaimer';
import { TermsOfUse } from './pages/terms-of-use';

export class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/milestones' component={Milestones} />
        <Route path='/milestone' component={MilestoneRoutes} />
        <Route path='/services' component={Services} />
        <Route path='/about' component={About} />
        <Route path='/the-method' component={TheMethod} />
        <Route path='/contact' component={Contact} />
        <Route path='/articles' component={Articles} />
        <Route path='/testimonials' component={Testimonials} />
        <Route path='/infant-massage' component={InfantMassage} />
        <Route path='/disclaimer' component={Disclaimer} />
        <Route path='/terms-of-use' component={TermsOfUse} />
      </Switch>
    )
  }
}
