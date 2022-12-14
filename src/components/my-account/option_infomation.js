import { Component } from "react";
import Avatar from "../images/avatar_IU.jpg";
import { Link } from "react-router-dom";

import Tippy from '@tippyjs/react';

class Option_infomation extends Component {
    render() {
        return (
            <div className="menu__column--block--item menu__column--my-account">
                <div className="menu__column--option_infomation">
                    <div className="background__option--information"></div>

                    <div className="box__content--information">

                        <Link to="#user" className="border__avatar--user">
                            <img src={Avatar} alt="avatar" className="avatar__img" />
                        </Link>

                        <div className="content__name--user">
                            <Link to="#user">
                                <div className="text_name--user">Nguyễn Đình Thiên</div>
                            </Link>
                        </div>

                        <div className="content__story--user">
                            <div className="content__story">
                                Hôm nay thật tệ, nhưng ngày mai, ngày kia rồi sẽ ổn thôi 😘
                            </div>
                        </div>
                        <div className="btn__stories--user">
                            <Tippy
                                content="Edit bio"
                                animation="shift-toward"
                                delay={200}
                                theme="translucent"
                            >
                                <div className="item__btn btn__edit--bio">
                                    <i class="fa-duotone fa-pen"></i>
                                </div>
                            </Tippy>
                            <Tippy
                                content="Next bio"
                                animation="shift-toward"
                                delay={200}
                                theme="translucent"
                            >
                                <div className="item__btn btn__next--slide">
                                    <i class="fa-regular fa-arrow-right-long"></i>
                                </div>
                            </Tippy>
                        </div>

                    </div>


                </div>

            </div>
        )
    }
};

export default Option_infomation;