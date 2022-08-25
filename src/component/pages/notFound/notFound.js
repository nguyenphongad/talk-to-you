import { Component } from "react";
import {NavLink} from "react-router-dom"

class NotFound extends Component {
    render() {
        return (
            <div className="body">
                <div className="body__row-flex">
                    <div className=" body__row-flex--main">
                        <div className="body__notFound">
                            <div className="block__comlumn--notFound">
                                <div className="item__notification--notFound">
                                    <i class="fa-duotone fa-link-slash"></i>
                                    <div className="text_h2">404 - Not found !</div>
                                </div>
                                <div className="item__notification--notFound">
                                    <div className="text__notification--notFound">
                                        Trang bạn đang truy cập đã bị gỡ bỏ hoặc 
                                        đường dẫn không tồn tại
                                    </div>
                                </div>
                                <div className="item__notification--notFound">
                                    <NavLink to="/feed" className="text__go-home">
                                            <span> Trang chủ</span>
                                    </NavLink>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        )
    }
};
export default NotFound;