import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useParams, BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import Music from './pages/music';
import Watching from './pages/watching';
import Messenger from './pages/messenger';
import NotFound from './pages/notFound';
import Option_bottom from './my-account/option_bottom';
import Friend from './pages/friend';
import Marketplace from './pages/marketplace';
import Game from './pages/game';

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
                <NavLink to="/game">
                  <i class="fa-regular fa-gamepad-modern"></i>
                  <div>Play game</div>
                </NavLink>
              </div>
              <div className="menu__column--item">
                <button>
                  <i class="fa-regular fa-ellipsis-stroke"></i>
                  <div>Khác</div>
                </button>
              </div>
              
            </div>
            
            <div class="menu__column--option-more">
              ok
            </div>

           <Option_bottom></ Option_bottom>
          </div>
        </div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/watching" element={<Watching />} />
          <Route path="/messenger" element={<Messenger/>} />
          <Route path="/friend" element={<Friend/>} />
          <Route path="/marketplace" element={<Marketplace/>} />
          <Route path="/game" element={<Game/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Router>
    );
  }

}

export default Menu;