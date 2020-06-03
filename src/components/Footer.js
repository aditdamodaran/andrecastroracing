import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/facebook-icon.svg'
import instagram from '../img/instagram-icon.svg'
import twitter from '../img/twitter-icon.svg'
import youtube from '../img/youtube-icon.svg'

const getYear = () => {
  return new Date().getFullYear();
}

const Footer = class extends React.Component {
  render() {
    return (
      <footer 
        className="footer has-text-white-ter"
        style={{backgroundColor: 'black'}}
      >

        <div className='footer-signature columns'>
          <div className="column is-6">
            <Link to="/" className="columns">
              <img
                src={logo}
                alt="Kaldi"
                style={{ 
                  width: '7em', 
                  height: '5em',
                  filter: 'brightness(0) invert(1)',
                }}
                className="column is-5 footer-logo"
              />

              <div className='signature column is-7'>
                <h1>Andre Castro Racing &copy; {getYear()}</h1>
              </div>
            </Link>
          </div>
          <div 
            className="column is-6 footer-social-icons"
            style={{
              height: '5em'
            }}
          >
            <div className="social">
              <a 
                title="facebook" 
                href="https://www.facebook.com/andrecastroracing/"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '2em', height: '2em' }}
                />
              </a>
              <a 
                title="instagram" 
                href="https://www.instagram.com/andrecastroracing/"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '2em', height: '2em' }}
                />
              </a>
              <a 
                title="twitter" 
                href="https://twitter.com/acastroracing"
              >
                <img
                  className="fas fa-lg"
                  src={twitter}
                  alt="Twitter"
                  style={{ width: '2em', height: '2em' }}
                />
              </a>
              <a 
                title="youtube" 
                href="https://www.youtube.com/user/AndreCastroRacing"
              >
                <img
                  src={youtube}
                  alt="YouTube"
                  style={{ width: '2em', height: '2em' }}
                />
              </a>
            </div>
          </div>
        </div>

      </footer>
    )
  }
}

export default Footer
