import React, { useState } from 'react'
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from '../../../errorBoundary';

import { motion, AnimatePresence } from "framer-motion";
import Modal from "../../../modal/modal_infomation";
import Avatar from "../../../images/avatar_IU.jpg";
import LoadingIcon from './loading';
import Typical from 'react-typical';

function Create_status_feed() {

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const list_btn_control_work = [
        {
            icon: "fa-regular fa-folder-image",
            id: "red",
            text: "Photo",
        },
        {
            icon: "fa-regular fa-video-plus",
            id: "blue",
            text: "Video",
        },
        {
            icon: "fa-light fa-face-laugh-wink",
            id: "yellow",
            text: "Feeling",
        },
        {
            icon: "fa-regular fa-calendar-pen",
            id: "green",
            text: "Lesson",
        },
        
    ];

    const list_element = list_btn_control_work.map((item_control_work, index) => {
        return (
            <motion.div className="item_control--work"
                onClick={() => (modalOpen ? close() : open())}
            >
                <i className={item_control_work.icon} id={item_control_work.id}></i>
                <div className="btn__text--work">
                    {item_control_work.text}

                </div>

            </motion.div>

        )

    });

    const Content_create_status = () => {
        return (
            <div>ok</div>
        )
    }

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
                            <div className="btn__input--content" id="id_context">
                                <Typical
                                    loop={Infinity}
                                    wrapper="div"
                                    steps={[
                                        "Bạn có suy nghĩ gì sao?",4000,
                                        "Tôi đoán hôm nay bạn rất vui nha :)",4000,
                                        "Viết lên cảm xúc của bạn ngay đây nhé !",4000
                                    ]}
                                />
                            </div>
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
                        content_modal={<Content_create_status />}
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
