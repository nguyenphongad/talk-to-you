import { Component, useState } from 'react';
import { Router, Routes, useMatch, useResolvedPath, NavLink } from 'react-router-dom';
import Logo from "./logo_image/logo_talk-to-you.png";

import { withErrorBoundary } from "react-error-boundary";
// import ErrorComponent from './errorBoundary';
import CustomLink from './customLink';
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../component/modal/modal_infomation";
import ErrorComponent from './errorBoundary';

function Text_content_modal() {
  return(
    <>
      Hi everybody, đây là một bản beta bởi mình ấp ủ nó suốt thời gian học đại học đến giờ,
      mình sẽ sáng tạo 1 cái giao diện mới cùng với kết hợp mp3
      để nó gọi là "sống động" một chút. Nó còn rất nhiều cái thiếu sót. <br></br>
      Mọi người nhận xét và cho em xin lời góp ý ạ. Em cảm ơn rất nhiều!<br></br>
      <div style={{'float':'right'}}>NV Phong</div>
    </>
  );
}


function Header() {

  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="header">
      <div className='header__wrap--row'>
        <div className="header__wrap--item wrap--item-logo">
          <a href="#home" className="item__icon item__icon-logo">
            <img src={Logo} alt="logo-talk-to-you" id="id_logo" />
          </a>
          <div className="item__icon item__icon-fa" >
            <motion.i className="fa-duotone fa-circle-info" onClick={() => (modalOpen ? close() : open())}>
            </motion.i>
          </div>
        </div>
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
              <div className="box__icon--work">
                <i class="fa-regular fa-money-check-pen"></i>
              </div>
              <div className="box__icon--work ">
                <i className="fa-regular fa-elevator"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="header__wrap--item wrap--item-dropdown">

        </div>
      </div>
      <AnimatePresence
        
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >

        {modalOpen && <Modal 
        modalOpen={modalOpen} 
        handleClose={close} 
        text_header="Version beta : Talk To You"
        content_modal={<Text_content_modal/>}
        />}
        
      </AnimatePresence>

      
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
