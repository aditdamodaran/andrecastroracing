import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/facebook-icon.svg'
import instagram from '../img/instagram-icon.svg'
import twitter from '../img/twitter-icon.svg'
import youtube from '../img/youtube-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    // Touch (Hover Animation) Support for Mobile Devices
    document.addEventListener("touchstart", function(){}, true);
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ 
                width: '50px',
                marginRight: '25px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                News
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.facebook.com/andrecastroracing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon facebook-icon">
                  <img src={facebook} alt="Facebook" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.instagram.com/andrecastroracing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon instagram-icon">
                  <img src={instagram} alt="Instagram" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://twitter.com/acastroracing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon twitter-icon">
                  <img src={twitter} alt="Twitter" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.youtube.com/user/AndreCastroRacing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon youtube-icon">
                  <img src={youtube} alt="YouTube" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
