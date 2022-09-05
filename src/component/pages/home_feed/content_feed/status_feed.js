import React, { useEffect, useRef, useState } from 'react';

import Avatar_1 from "../../../images/avatar_IU.jpg";
import Picture_status_1 from "../../../images/photo_status_IU/picture_status.jpg";

import Avatar_2 from "../../../images/avatar_ngoc.jpg";
import Picture_status_2 from "../../../images/photo_status_IU/anh_status_ngoc.jpg";


import { NavLink } from 'react-router-dom';
import useCollapse from 'react-collapsed';


function Status_feed() {
  const config = {
    duration: 300
  };
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

  const up_header_status_user = [
    {
      id: 1,
      image_avatar: Avatar_1,
      firt_name: "Nguyễn Đình ",
      last_name: "Thiên",
      active_license: true,
      id_user: "@dlwlrma",
      active_type_status: "fa-solid fa-badge-check",
      date_create_status: "2 giờ trước",

      content: "지은 언니 바빠요?ㅜㅜ 너무 보고 싶어서🤣😂👍",
      image: Picture_status_1,
      view_comment: "47.3K " + "comments",
      view_like: "5.5M " + "like",
      view_share: "17.5K " + "shares",

    },
    {
      id: 2,
      image_avatar: Avatar_2,
      firt_name: "Ngọc ",
      last_name: "Phạm",
      active_license: false,
      id_user: "@ngocpham509",
      active_type_status: "fa-solid fa-badge-check",
      date_create_status: "2 phút trước",

      content: "Ngày hôm nay thật vui 🤣",
      image: Picture_status_2,
      view_comment: "1 " + "comments",
      view_like: "100 " + "like",
      view_share: "0 " + "shares",

    },
  ];


  const list_up_status_feed_user = up_header_status_user.map((item_info_header_status, index) => {
    return (
      <div className="box__status" >
        <div className="body__status--table">
          <div className="nav__column--tr">
            <div className="item__column--status header__status">
              {/* header */}
              <div className="flex--column">
                <div className="block__item--header block__avatar--user">
                  <div className="border__avatar--user">
                    <NavLink to="#user" className="">
                      <img src={item_info_header_status.image_avatar} loading="lazy" />
                    </NavLink>
                  </div>
                </div>
                <div className="block__item--header block__content--picture">
                  <div className="flex__box--inline">
                    <div className="item__inline">
                      <div className="name-user">
                        <NavLink to="#user">
                          <span className="text__name--user hover_text_under">
                            {item_info_header_status.firt_name}
                            {item_info_header_status.last_name}
                          </span>
                          {item_info_header_status.active_license ? <i class="fa-solid fa-badge-check" title="Trang cá nhân được xác thực bởi chủ thương hiệu"></i> : ""}
                        </NavLink>
                      </div>
                    </div>
                    <div className="item__inline">
                      <div className="id_user">
                        <NavLink to="#user">
                          <span className="hover_text_under">
                            {item_info_header_status.id_user}
                          </span>
                        </NavLink>
                        <i class="fa-regular fa-period"></i>
                        <div title="Feeds" className="icon_tag">
                          <span className="hover_text_under">
                            <i class="fa-solid fa-square-rss"></i>
                          </span>
                        </div>

                        <i class="fa-regular fa-period"></i>
                        <NavLink to="#link_status">
                          <span className="hover_text_under">
                            {item_info_header_status.date_create_status}
                          </span>
                        </NavLink>

                      </div>
                    </div>
                  </div>
                  <div className="flex__btn--more" {...getToggleProps()}>
                    {/* <i class="fa-light fa-ellipsis-stroke"></i> */}
                    <i class={isExpanded ? "fa-solid fa-caret-up" : "fa-solid fa-ellipsis"} ></i>

                  </div>
                </div>
              </div>

              <div {...getCollapseProps()}>
                <div className="drop__modal-select--status" >
                  nội dung lựa chọn<br></br>
                  nội dung lựa chọn<br></br>
                </div>
              </div>



              <div className="content__status">
                {item_info_header_status.content}
              </div>
            </div>

            <div className="item__column--status body__status">
              <NavLink to="#status_size" className="border__status">
                <img src={item_info_header_status.image} loading="lazy" />

              </NavLink>

            </div>

            <div className="item__column control feed__actions__status">
              <div className="body__actions_status">
                <div className="item__actions_feed view__actions ">
                  <div className="item_btn_feed--view hover_text_under">
                    {item_info_header_status.view_comment}
                  </div>
                  <div className="item_btn_feed--view hover_text_under">
                    {item_info_header_status.view_like}
                  </div>
                  <div className="item_btn_feed--view hover_text_under">
                    {item_info_header_status.view_share}
                  </div>
                </div>
                <div className="item__actions_feed feed__action--bar">
                  <div className="item__btn--work-feed box__comment">
                    <i class="fa-regular fa-comment-lines"></i>
                    <div className="text__btn--bar"> Comment</div>
                  </div>
                  <div className="item__btn--work-feed box__tym">
                    <div className="btn__tym">
                      <i class="fa-light fa-heart"></i>
                      {/* <i class="fa-solid fa-heart"></i> */}
                    </div>
                  </div>
                  <div className="item__btn--work-feed box__share">
                    <i class="fa-regular fa-share-nodes"></i>
                    <div className="text__btn--bar">Share</div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    )
  })
  return (
    <>
      {list_up_status_feed_user}
    </>
  )


}

export default Status_feed;

