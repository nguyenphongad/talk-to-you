import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Link, useParams, BrowserRouter } from "react-router-dom";
import { useMatch, useResolvedPath } from "react-router-dom";

import Option_infomation from '../../../my-account/option_infomation';

import $ from 'jquery';


function Menu() {
  return (
    <div>
      <div className="menu">

        <div className="menu__column">
          <Option_infomation></ Option_infomation>
          <div className="menu__column--block--item menu__column--select-li">

            <div className="menu__column--item">
              <NavLink to="/messenger">
                <i class="fa-regular fa-comment-dots" ></i>
                <div>Tin nhắn</div>
              </NavLink>
            </div>
            <div className="menu__column--item">
              <NavLink to="/notification">
                <i class="fa-regular fa-bell"></i>
                <div>Thông báo</div>
              </NavLink>
            </div>

            <div className="menu__column--item">
              <NavLink to="/friend">
                <i class="fa-regular fa-user-check"></i>
                <div>Bạn bè</div>
              </NavLink>
            </div>
            <div className="menu__column--item">
              <NavLink to="/marketplace">
                <i class="fa-regular fa-cart-arrow-up"></i>
                <div>Marketplace</div>
              </NavLink>
            </div>

            <div className="menu__column--item">
              <button class="menu__btn--more" >
                <i class="fa-regular fa-circle-ellipsis"></i>
                <div>Khác</div>
              </button>
            </div>


            <div class="menu__column--option-more" id="op">
              <div className="menu__column--block--item menu__column--select-li scrollbar_show">
                <div className="header_li--more">
                  <div className="icon_back--more">
                    <i class="fa-light fa-xmark"></i>
                  </div>
                  <div className="text__option--more">Mục khác</div>
                </div>
                <div className="menu__column--item ">
                  <NavLink to="/setting">
                    <i class="fa-regular fa-gear"></i>
                    <div>C.đặt riêng tư</div>
                  </NavLink>
                </div>
                <div className="menu__column--item ">
                  <NavLink to="/fanpage">
                    <i class="fa-regular fa-page"></i>
                    <div>Fanpage</div>
                  </NavLink>
                </div>

                <div className="menu__column--item ">
                  <NavLink to="/saved">
                    <i class="fa-regular fa-bookmark"></i>
                    <div>Đã lưu</div>
                  </NavLink>
                </div>
                <div className="menu__column--item">
                  <NavLink to="/game">
                    <i class="fa-regular fa-gamepad"></i>
                    <div>Play game</div>
                  </NavLink>
                </div>
                <div className="menu__column--item">
                  <NavLink to="/health">
                    <i class="fa-regular fa-book-heart"></i>
                    <div>Sức khỏe</div>
                  </NavLink>
                </div>
                <div className="menu__column--item">
                  <NavLink to="/dating">
                    <i className="fa-regular fa-heart-half-stroke"></i>
                    <div>Hẹn hò</div>
                  </NavLink>
                </div>

                <div className="menu__column--item">
                  <NavLink to="/support">
                    <i class="fa-regular fa-circle-question"></i>
                    <div>Trợ giúp</div>
                  </NavLink>
                </div>
                <div className="menu__column--item">
                  <NavLink to="/support">
                    <i class="fa-regular fa-circle-question"></i>
                    <div>Trợ giúp</div>
                  </NavLink>
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  );

}
$("#op").hide();
$(document).ready(function () {
  $(".menu__btn--more").click(function () {
    $("#op").show(100);
  });
  $(".icon_back--more").click(function () {
    $("#op").hide(0);
  });
});
$(document).mouseup(function (e) {
  if ($(e.target).closest("#op").length === 0) {
    $("#op").hide(0);
  }
});

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