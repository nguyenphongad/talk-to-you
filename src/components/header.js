import { Component, useState } from 'react';
import { Router, Routes, useMatch, useResolvedPath, NavLink } from 'react-router-dom';
import Logo from "./logo_image/logo_talk-to-you.png";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-toward.css';
import 'tippy.js/animations/scale-extreme.css';
import "tippy.js/themes/translucent.css";
import "tippy.js/themes/light.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/themes/material.css";

import { withErrorBoundary } from "react-error-boundary";
// import ErrorComponent from './errorBoundary';
import CustomLink from './customLink';
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../components/modal/modal_infomation";
import ErrorComponent from './errorBoundary';

import Content_create_status_modal from "./pages/home_feed/content_feed/content_create_status_modal";

function Text_content_modal() {
  return (
    <>
      Hi everybody, đây là một bản beta bởi mình ấp ủ nó suốt thời gian học đại học đến giờ,
      mình sẽ sáng tạo 1 cái giao diện mới cùng với kết hợp mp3
      để nó gọi là "sống động" một chút. Nó còn rất nhiều cái thiếu sót. <br></br>
      Mọi người nhận xét và cho em xin lời góp ý ạ. Em cảm ơn rất nhiều!<br></br>
      <div style={{ 'float': 'right' }}>NV Phong</div>
    </>
  );
}

function Header() {

  const [modalOpen_think, setModalOpen] = useState(false);
  const [modalOpen_create_status, setModalOpent] = useState(false);

  const open = () => setModalOpen(true);
  const close = () => setModalOpen(false);


  const open_think = () => setModalOpent(true);
  const close_think = () => setModalOpent(false);



  const content_modal_index = [{
    name_modal: modalOpen_think,
    text_header: "Version beta : Talk To You (1.9.24)",
    content_modal: <Text_content_modal />,
    open_modal: open,
    close_modal: close,
  },
  {
    name_modal: modalOpen_create_status,
    text_header: "Create status",
    content_modal: <Content_create_status_modal />,
    open_modal: open_think,
    close_modal: close_think,
  }
  ];
  const list_content_modal_index = content_modal_index.map((item_content_modal_index, index) => {
    return (
      <>
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {item_content_modal_index.name_modal && <Modal
            modalOpen={item_content_modal_index.name_modal}
            handleClose={item_content_modal_index.close_modal}
            text_header={item_content_modal_index.text_header}
            content_modal={item_content_modal_index.content_modal}
          />}
        </AnimatePresence>
      </>
    )
  });
  return (
    <div className="header">
      <div className='header__wrap--row'>
        <div className="header__wrap--item wrap--item-logo">
          <div className="item__icon item__icon--logo">
            <a href="#home" >
              <img src={Logo} alt="logo-talk-to-you" id="id_logo" />
            </a>
          </div>

          <div className="item__icon item__icon-fa" >
            <div className="nav__checked_navication" onClick={() => (modalOpen_think ? close() : open())}>
              <div>Version</div>
              <motion.i className="fa-duotone fa-circle-info">
              </motion.i>
            </div>

          </div>
        </div>
        {list_content_modal_index}
        <div className="header__wrap--item wrap--item-status">
          <div className="text_status--menu">
            <CustomLink to="/feed" >
              <i class="fa-light fa-house"></i>
              <div className="item__text--status"> Home</div>
            </CustomLink>
            <CustomLink to="/watching" >
              <i className="fa-light fa-clapperboard-play"></i>
              <div className="item__text--status"> Watching</div>
            </CustomLink>
            <CustomLink to="/music" >
              <i className="fa-light fa-folder-music"></i>
              <div className="item__text--status"> Music</div>
            </CustomLink>
            <CustomLink to="/learning" >
              <i className="fa-light fa-backpack"></i>
              <div className="item__text--status"> Learning</div>
            </CustomLink>
          </div>
          <div className="text_status--work">
            <div className="float--work">

              <Tippy
                content="Create status"
                animation="shift-toward"
                delay={200}
                theme="light"
              >
                <div className="box__icon--work box_create" id=""
                  onClick={() => (modalOpen_create_status ? close_think() : open_think())}>
                  <i class="fa-duotone fa-pen-to-square"></i>
                </div>
              </Tippy>
              <Tippy
                content="Stories"
                animation="shift-toward"
                delay={200}
                theme="light"
              >
                <div className="box__icon--work box_stories" id="">
                  <i class="fa-duotone fa-elevator"></i>
                </div>
              </Tippy>
            </div>
          </div>
        </div>
        <div className="header__wrap--item wrap--item-dropdown">

        </div>
      </div>


    </div>
  );

}
<div>
  <CustomLink></CustomLink>
  <ErrorComponent></ErrorComponent>
</div>

export default withErrorBoundary(Header, {
  FallbackComponent: ErrorComponent,
});
