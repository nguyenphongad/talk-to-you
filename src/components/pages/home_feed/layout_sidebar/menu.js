import { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Link, useParams, BrowserRouter } from "react-router-dom";
import { useMatch, useResolvedPath } from "react-router-dom";

import Option_infomation from '../../../my-account/option_infomation';

import $ from 'jquery';


function Menu() {
  return (
    <>
      <div className="item_content--home menu">

        <div className="menu__column">
          <Option_infomation></ Option_infomation>
          <div className="menu__column--block--item menu__column--select-li">

            <div className="menu__column--item">
              <NavLink to="/messenger">
                <i class="fa-duotone fa-messages"></i>
                <div>Message</div>
              </NavLink>
            </div>
            <div className="menu__column--item">
              <NavLink to="/notification">
                <i class="fa-duotone fa-bell"></i>
                <div>Notification</div>
              </NavLink>
            </div>

            <div className="menu__column--item">
              <NavLink to="/friend">
                <i class="fa-duotone fa-user-group"></i>
                <div>Friends</div>
              </NavLink>
            </div>
            <div className="menu__column--item">
              <NavLink to="/marketplace">
                <i class="fa-duotone fa-cart-shopping-fast"></i>
                <div>Marketplace</div>
              </NavLink>
            </div>
            <div className="menu__column--item ">
              <NavLink to="/setting">
                <i class="fa-duotone fa-gear"></i>
                <div>Personal</div>
              </NavLink>
            </div>
            <div className="menu__column--item ">
              <NavLink to="/fanpage">
                <i class="fa-duotone fa-pager"></i>
                <div>Fanpage</div>
              </NavLink>
            </div>

            <div className="menu__column--item ">
              <NavLink to="/saved">
                <i class="fa-duotone fa-floppy-disk-circle-arrow-right"></i>
                <div>Saved</div>
              </NavLink>
            </div>
            <div className="menu__column--item">
              <NavLink to="/game">
                <i class="fa-duotone fa-game-console-handheld"></i>
                <div>Play game</div>
              </NavLink>
            </div>
            <div className="menu__column--item">
              <NavLink to="/health">
                <i class="fa-duotone fa-notes-medical"></i>
                <div>Health</div>
              </NavLink>
            </div>
            <div className="menu__column--item">
              <NavLink to="/dating">
                <i class="fa-duotone fa-heart-circle-bolt"></i>
                <div>Dating</div>
              </NavLink>
            </div>

            <div className="menu__column--item">
              <NavLink to="/support">
                <i class="fa-duotone fa-circle-info"></i>
                <div>Helps</div>
              </NavLink>
            </div>

          </div>

        </div>
      </div>

    </>
  );

}
// $("#op").hide();
// $(document).ready(function () {
//   $(".menu__btn--more").click(function () {
//     $("#op").show(100);
//   });
//   $(".icon_back--more").click(function () {
//     $("#op").hide(0);
//   });
// });
// $(document).mouseup(function (e) {
//   if ($(e.target).closest("#op").length === 0) {
//     $("#op").hide(0);
//   }
// });

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <NavLink to={to} {...props} className={isActive ? "active" : ""}>
      {children}
    </NavLink>
  )
}
export default Menu;