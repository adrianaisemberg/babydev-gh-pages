import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };
  }

  collapseMenu() {
    this.setState({
      collapsed: true,
    });
  }

  toggleMenu() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <div className="logo"/>
        <label id="hamburger" onClick={() => this.toggleMenu()} />
        <div id="hamburger-background" className={this.state.collapsed ? null : "expanded"}></div>
        <nav className={this.state.collapsed ? null : "expanded"}>
          <ul>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/' activeClassName="active">Home</NavLink></li>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/milestones' activeClassName="active">Milestones</NavLink></li>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/services' activeClassName="active">Services</NavLink></li>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/about' activeClassName="active">About</NavLink></li>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/contact' activeClassName="active">Contact</NavLink></li>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/articles' activeClassName="active">Articles</NavLink></li>
            <li><NavLink onClick={() => this.collapseMenu()} exact={true} to='/testimonials' activeClassName="active">Testimonials</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
}
