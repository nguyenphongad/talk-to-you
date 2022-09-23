import { motion } from "framer-motion";
import "./style_modal_select.scss";

const Backdrop_modal_select = ({ children, onClick }) => {

    return (
        <motion.div
            onClick={onClick}
            className="backdrop_modal_select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
};

export default Backdrop_modal_select;