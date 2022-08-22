import React, { useState } from 'react'
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from '../../../errorBoundary';

import { motion, AnimatePresence } from "framer-motion";
import Modal from "../../../modal/modal_infomation";
import Avatar from "../../../images/avatar_IU.jpg";

function Box_create_status() {

}

function Create_status_feed() {

    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const list_btn_control_work = [
        {
            icon : "fa-regular fa-video-plus",
            text : "Photo"
        },
        {
            icon : "fa-regular fa-video-plus",
            text : "Video"
        },
        {
            icon : "fa-regular fa-face-smile",
            text : "Feeling"
        },
    ];
    const list_element = list_btn_control_work.map((item_control_work, index) =>{
        return (
            <motion.div className="item_control--work" onClick={() => (modalOpen ? close() : open())}>
                <i className={item_control_work.icon} ></i>
                {item_control_work.text}
            </motion.div>
        )
    });

    return (
        <>
            <div className="box__create-status">
                <div className="body__create">
                    <div className="item__nav header__create">
                        <div className="item_header btn__avatar--user">
                            <div className="border__avatar--user">
                                <img src={Avatar} alt="avatar" className="img--avatar" />
                            </div>
                        </div>
                        <motion.div className="item_header create__text--think"
                        onClick={() => (modalOpen ? close() : open())}>
                            <div className="btn__input--content">Bạn có suy nghĩ gì sao?</div>
                        </motion.div>

                    </div>
                    <div className="item__nav footer__create">
                        <div className="btn__control--work">
                            {list_element}
                        </div>
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
                        text_header="Create status"
                    />}

                </AnimatePresence>
            </div>
        </>
    )
}
<ErrorComponent></ErrorComponent>

export default withErrorBoundary(Create_status_feed, {
    FallbackComponent: ErrorComponent,
});
