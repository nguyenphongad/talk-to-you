import { Component } from "react";
import Avatar from "../images/avatar_IU.jpg";
import {Link} from "react-router-dom"


class Option_bottom extends Component {
    render() {
        return (
            <div className="menu__column--block--item menu__column--my-account">
                <div className="menu__column--option_infomation">
                    <div className="background__option--information"></div>

                    <div className="box__content--information">
                        <Link to="#user" className="border__avatar--user">
                            <i class="fa-solid fa-comment"></i>
                            <img src={Avatar} alt="avatar" className="avatar__img"/>
                        </Link>
                        
                        <div className="content__name--user">
                            <Link to="#user">
                                <div className="text_name--user">Nguyễn Đình Thiên</div> 
                            </Link>
                        </div>
                        

                        <div className="content__story--user">
                            <div className="content__story">
                                Ngày hôm nay thật tệ, nhưng ngày mai, ngày kia rồi sẽ ổn thôi 😘
                                </div>
                        </div>

                        <div className="btn__edit--story">
                            <div className="text_btn--edit"><i class="fa-light fa-pencil"></i> Sửa tiểu sử</div>
                        </div>
                    </div>


                    
                </div>

            </div>
        )
    }
};

export default Option_bottom;