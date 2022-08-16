import { Component, useState } from 'react';
import { Router, Routes,useMatch, useResolvedPath, NavLink  } from 'react-router-dom';
import Logo from "./logo/logo_talk-to-you.png";

import {withErrorBoundary} from "react-error-boundary";
// import ErrorComponent from './errorBoundary';
import CustomLink from './customLink';
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
                    <div className="item__text--status"> Home</div>
                  </CustomLink> 
                  <CustomLink to="/watching" >
                    <i class="fa-light fa-clapperboard-play"></i>
                    <div className="item__text--status"> Watching</div>
                  </CustomLink>
                  <CustomLink to="/music" >
                    <i class="fa-light fa-folder-music"></i>
                    <div className="item__text--status"> Music</div>
                  </CustomLink>
                  <CustomLink to="/learning" >
                    <i class="fa-light fa-backpack"></i>
                    <div className="item__text--status"> Learning</div>
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
<CustomLink></CustomLink>

export default Header ;
