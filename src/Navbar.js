import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              {/* <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link> */}
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              {/* <Link className="nav-link" to="/About">{props.about} <span className="sr-only">(current)</span></Link> */}
              <a className="nav-link" href="/About">{props.about} <span className="sr-only">(current)</span></a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li> */}
          </ul>

        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="radio" name="radioNoLabel" onClick={props.toggle} id="radioNoLabel1" value="" aria-label="..."/>
            {/* <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault" /> */}
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
}

Navbar.defaultProps = {
  title: 'NavBar',
  about: 'About2',
}

