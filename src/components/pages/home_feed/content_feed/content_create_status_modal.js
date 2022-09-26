import React, { useEffect, useRef } from 'react'
import Avatar_user from '../../../images/avatar_IU.jpg';
import Typical from 'react-typical';

function Content_create_status_modal() {

    const searchInput = useRef(null);

    useEffect(() => {
        // current property is refered to input element
        searchInput.current.focus();
    }, [])

    return (
        <div className="box__create--status">
            <div className="container__create--dropdown-status">
                <div className="item__flex--create--status box__first--content">
                    <div className="item__flex__create-status flex__information__user">
                        <div className=" avatar_user">
                            <div className="align_item_center">
                                <div className="border__img--avatar-user">
                                    <img src={Avatar_user} />
                                </div>
                            </div>


                        </div>
                        <div className="name_user">
                            <div className="item__column_option name__user--cr">
                                <span>Nguyễn Đình Thiên</span>
                            </div>
                            <div className="item__column_option share__change-button">
                                <div className="btn__change--share">
                                    <i class="fa-solid fa-earth-americas"></i>
                                    Công khai
                                    <i class="fa-duotone fa-caret-right"></i>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div className="item__flex__create-status editor__content--status">
                        <div>
                            <textarea placeholder="What do you think?"
                                name=""
                                ref={searchInput} />
                        </div>
                    </div>
                </div>
                <div className="item__flex--create--status box__second--select-option">
                    icon
                </div>
            </div>
            <div className="text_warning">
                <span>
                    Chưa thể đăng bài viết trong lúc này.
                </span>
            </div>
            <button className="artdeco-button" >Đăng</button>


        </div>
    )
}

export default Content_create_status_modal;