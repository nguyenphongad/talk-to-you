import React from 'react';
import Picture_status from "../../../images/photo_status_IU/picture_status.jpg";
import Avatar from "../../../images/avatar_IU.jpg";
import { NavLink } from 'react-router-dom';

function Status_feed() {
  return (
    <div className="box__status">
      <div className="body__status--table">
        <div className="nav__column--tr">
          <div className="item__column--status header__status">
            <div className="block__item--header block__avatar--user">
              <div className="border__avatar--user">
                <NavLink to="#user" className="">
                  <img src={Avatar} />
                </NavLink>
              </div>
            </div>
            <div className="block__item--header block__content--picture">
              <div className="flex__box--inline">
                <div className="item__inline">
                  <div className="name-user">
                    <NavLink to="#user">
                      <span className="hover_text_under">
                        Nguyễn Đình Thiên (IU)
                      </span>
                    </NavLink>
                  </div>
                </div>
                <div className="item__inline">
                  <div className="id_user">
                    <NavLink to="#user">
                      <span className="hover_text_under">@dlwlrma </span>
                    </NavLink>
                    <i class="fa-regular fa-period"></i>
                    <NavLink to="#link_status">
                      <span className="hover_text_under"> 2 giờ trước</span>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="flex__btn--more">
                <i class="fa-duotone fa-circle-info"></i>
              </div>
            </div>

          </div>
          <div className="item__column--status body__status">
            <NavLink to="#status_size" className="border__status">
              <img src={Picture_status} />
            </NavLink>
          </div>
          <div>like</div>


        </div>
      </div>
    </div>
  )
}

export default Status_feed;

