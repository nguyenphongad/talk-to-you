import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useParams, BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import Music from './pages/music';
import Watching from './pages/watching';
import Messenger from './pages/messenger';
import Notification from './pages/notification';
import NotFound from './pages/notFound';
import Option_bottom from './my-account/option_bottom';
import Friend from './pages/friend';
import Marketplace from './pages/marketplace';

import Setting from './pages/pages_more/setting';
import Saved from './pages/pages_more/saved';
import Game from './pages/pages_more/game';
import Support from './pages/pages_more/support';
import Health from './pages/pages_more/health';
import Dating from './pages/pages_more/dating';
import Fanpage from './pages/pages_more/fanpage';

import $ from 'jquery';

class Menu extends Component {
  render() {
    return (
      <Router>
        <div className="menu">
          <div className="menu__column">
            <div className="menu__column--block--item menu__column--select-li">
              <div className="menu__column--item">
                <NavLink index to="/" >
                  <i class="fa-regular fa-house"></i>
                  <div>Trang chủ</div>
                </NavLink>
              </div>
              <div className="menu__column--item">
                <NavLink to="/music">
                  <i class="fa-regular fa-list-music"></i>
                  <div>Âm nhạc</div>
                </NavLink>
              </div>

              <div className="menu__column--item">
                <NavLink to="/watching">
                  <i class="fa-regular fa-films"></i>
                  <div>Watching</div>
                </NavLink>
              </div>

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
                  <i class="fa-regular fa-ellipsis-stroke"></i>
                  <div>Khác</div>
                </button>
              </div>
              <script>
                  
              </script>

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
                    <div>Cài đặt</div>
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
                  <i class="fa-regular fa-heart-half-stroke"></i>
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

            <Option_bottom></ Option_bottom>
          </div>
        </div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/watching" element={<Watching />} />
          <Route path="/messenger" element={<Messenger />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/friend" element={<Friend />} />
          <Route path="/marketplace" element={<Marketplace />} />
          
          <Route path="/setting" element={<Setting />} />
          <Route path="/fanpage" element={<Fanpage />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/game" element={<Game />} />
          <Route path="/health" element={<Health />} />
          <Route path="/dating" element={<Dating/>} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Router>
    );
  }

}
$("#op").hide();
$(document).ready(function(){
  $(".menu__btn--more").click(function(){
    $("#op").show(50);
  });
  $(".icon_back--more").click(function(){
    $("#op").hide(50);
  });
});
$(document).mouseup(function (e) {
  if ($(e.target).closest("#op").length  === 0) {
      $("#op").hide(50);
  }
});

export default Menu;