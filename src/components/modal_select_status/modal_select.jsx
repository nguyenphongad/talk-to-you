import { motion } from "framer-motion";
import Backdrop_modal_select from "./back_drop_select";

const dropIn = {
    hidden: {
        y: "400vh",
        opacity: 0,
    },
    visible: {
        y: "0px",
        opacity: 1,
        transition: {
            type: "spring",
            damping: 60,
            stiffness: 1000,
        },
    },
    exit: {
        y: "400vh",
        opacity: 0,
    },
};


const Modal_select = ({ handleClose }) => {
    return (
        <Backdrop_modal_select onClick={handleClose} >
            <motion.div

                onClick={(e) => e.stopPropagation()}
                className="box__modal--select orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <div className="body__modal--select">
                    <div className="btn__nav-header_top">
                    </div>

                    <div className="container__content--select" >
                        <div className="column__option--select">
                            <div className="row__btn--task">
                                <button class="item_btn--task" onClick={handleClose}>
                                    <div>
                                        <i class="fa-regular fa-message-minus"></i>
                                        <span>Message</span>
                                    </div>

                                </button>
                                <button class="item_btn--task" onClick={handleClose} >
                                    <div>
                                        <i class="fa-regular fa-square-minus"></i>
                                        <span> Story</span>
                                    </div>
                                </button>
                                <button class="item_btn--task" onClick={handleClose}>
                                    <div>
                                        <i class="fa-regular fa-user-music"></i>
                                        <span>Music</span>
                                    </div>

                                </button>
                            </div>
                        </div>

                        <div className="column__option--select">
                            <div className="body_select_status--option" >
                                <div onClick={handleClose}>
                                    <i class="fa-regular fa-bookmark" ></i>
                                    <span>Lưu bài viết</span>
                                </div>
                                <div onClick={handleClose}>
                                    <i class="fa-regular fa-rectangle-xmark"></i>
                                    <span>Ẩn bài viết</span>
                                </div>
                                <div onClick={handleClose}>
                                    <i class="fa-regular fa-copy"></i>
                                    <span>Sao chép đường dẫn</span>
                                </div>
                                <div onClick={handleClose}>
                                    <i class="fa-regular fa-flag"></i>
                                    <span>Báo cáo bài viết</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


            </motion.div>
        </Backdrop_modal_select>
    );
};


export default Modal_select;