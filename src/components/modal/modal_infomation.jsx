import { motion } from "framer-motion";
import Backdrop from "./back_drop";
import Tippy from '@tippyjs/react';
const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration:0.2,
            type: "spring",
            damping: 40,
            stiffness: 700,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};


const Modal = ({ handleClose, text_header, content_modal }) => {
    return (
        <Backdrop onClick={handleClose} >
            <motion.div

                onClick={(e) => e.stopPropagation()}
                className="box_modal orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >

                <div className="modal__header" >
                    <div className="item_header header__text">
                        <div className="text_heading_header">
                            {text_header}
                        </div>
                    </div>
                    <div className="item_header modal__btn--close">
                        <Tippy
                            content="Close"
                            animation="shift-toward"
                            delay={500}
                            theme="light"
                            placement="left"

                        >
                            <div onClick={handleClose} className="btn__close--icon">
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </Tippy>
                    </div>
                </div>
                <div className="modal__body">
                    <div>{content_modal}</div>
                </div>


            </motion.div>
        </Backdrop>
    );
};


export default Modal;