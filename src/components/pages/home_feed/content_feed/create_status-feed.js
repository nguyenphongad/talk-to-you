import React, { useState } from 'react'
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from '../../../errorBoundary';

import { motion, AnimatePresence } from "framer-motion";
import Modal from "../../../modal/modal_infomation";
import Avatar from "../../../images/avatar_IU.jpg";
import LoadingIcon from './loading';
import Typical from 'react-typical';

import Content_create_status_modal from './content_create_status_modal';


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
            icon: "fa-light fa-camera-retro",
            id: "blue",
            text: "Video",
        },
        {
            icon: "fa-light fa-face-awesome",
            id: "yellow",
            text: "Feeling",
        },
        {
            icon: "fa-duotone fa-graduation-cap",
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

    return (
        <>
            <div className="box__status">
                <div className="body__create--status">
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
                                    // loop={Infinity}
                                    wrapper="div"
                                    steps={[
                                        "What do you think?", 2000,
                                        // "Vi???t l??n c???m x??c c???a b???n ngay ????y nh?? !",3000
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
                        text_header="Create a post"
                        content_modal={<Content_create_status_modal />}
                    />}

                </AnimatePresence>
            </div>
            <div class="border--separation">
                <div className="border-inline"></div>
            </div>
        </>
    )

}
<ErrorComponent></ErrorComponent>

export default withErrorBoundary(Create_status_feed, {
    FallbackComponent: ErrorComponent,
});
