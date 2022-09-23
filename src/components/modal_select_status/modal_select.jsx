import { motion } from "framer-motion";
import Backdrop from "./back_drop";
import Tippy from '@tippyjs/react';
const dropIn = {
    hidden: {
        y: "400vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0,
            type: "spring",
            damping: 50,
            stiffness: 800,
        },
    },
    exit: {
        y: "400vh",
        opacity: 0,
    },
};


const Modal_select = ({ handleClose, text_header, content_modal }) => {
    return (
        <Backdrop onClick={handleClose} >
            <motion.div

                onClick={(e) => e.stopPropagation()}
                className="box_modal_a orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="modal__header" >
                    <div >
                        <div>
                            {text_header}
                        </div>
                    </div>
                    <div>
                        <div onClick={handleClose} >
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                </div>
                <div className="modal__body">
                    <div>{content_modal}</div>
                </div>


            </motion.div>
        </Backdrop>
    );
};


export default Modal_select;