import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Aside.scss'

export class Aside extends Component {
  render() {
    return (
      <aside>
        <ul className="lists">
          <li>
            <NavLink to='/' className="link"><img src="/home.svg" alt="" /> Home</NavLink>
          </li>
          <li>
            <NavLink to='explore' className="link"> <img src="/explore.svg" alt="" /> Explore</NavLink>
          </li>
          <li>
            <NavLink to='shorts' className="link"> <img src="/shorts.svg" alt="" /> Shorts</NavLink>
          </li>
          <li>
            <NavLink to='subscription' className="link"> <img src="/subscription.svg" alt="" /> Subscription</NavLink>
          </li>
         
        </ul>
        
      </aside>
    )
  }
}

export default Aside