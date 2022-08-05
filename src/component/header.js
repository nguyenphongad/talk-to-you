import { Component } from 'react';
import Logo from "./logo/logo_talk-to-you.png";

class Header extends Component {
  render(){
    return (
        <div className="header">
            <div className='header__wrap--row'>
              <div className="header__wrap--item wrap--item-logo">
                <a href="#home" className="item__icon item__icon-logo">
                  <img src={Logo} alt="logo-talk-to-you" id="id_logo"/>
                </a>
                <div className="item__icon item__icon-bas">
                  <i className="fa-regular fa-bars"></i>
                </div>
                
                
              </div>
              <div className="header__wrap--item wrap--item-status"></div>
              <div className="header__wrap--item wrap--item-dropdown"></div>
            </div>
        </div>
    );
  }
  
}

export default Header;
