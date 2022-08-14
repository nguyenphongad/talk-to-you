import { Component } from 'react';
import { Router, Routes,useMatch, useResolvedPath, NavLink  } from 'react-router-dom';
import Logo from "./logo/logo_talk-to-you.png";

import {withErrorBoundary} from "react-error-boundary";
// import ErrorComponent from './errorBoundary';
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
              <div className="header__wrap--item wrap--item-status">
                <div className="text_status--menu">
                  <CustomLink to="/" >
                    <i class="fa-light fa-house"></i>
                  </CustomLink> 
                  <CustomLink to="/watching" >
                    <i class="fa-light fa-clapperboard-play"></i>
                  </CustomLink>
                  <CustomLink to="/music" >
                    <i class="fa-light fa-folder-music"></i>
                  </CustomLink>
                  <CustomLink to="/learn" >
                    <i class="fa-brands fa-leanpub"></i>
                  </CustomLink>
                </div>
                <div className="text_status--work">
                  <div className="float--work">
                    <div className="box__icon--work">
                      <i class="fa-regular fa-pen-to-square"></i>
                    </div>
                    <div className="box__icon--work ">
                      <i class="fa-regular fa-oven"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header__wrap--item wrap--item-dropdown">

              </div>
            </div>
        </div>
    );
  }
  
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <div className="menu__column--nav">
      <div className="item_header--item">
        <NavLink to={to} {...props} >
          {children}
        </NavLink>
      </div>
      <div className={isActive ? "navigation_item--menu active_navigation " : ""}></div>
    </div>
  )
}



export default Header ;
