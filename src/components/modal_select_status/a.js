import {  AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "../modal/modal_infomation";

function A() {

    const [a, a_close_a] = useState(true);
    const close_a = () => a_close_a(false);

    return (
        <div>
            
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {a && <Modal
                    modalOpen={a}
                    handleClose={close_a}
                    text_header="báo cáo"
                    content_modal="báo cáo"
                />}
            </AnimatePresence>
        </div>
    )
}

export default A;