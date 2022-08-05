import { Component } from "react";
import Avatar from "../images/avatar_test.jpg";

class Option_bottom extends Component {
    render() {
        return (
            <div className="menu__column--block--item menu__column--my-account">
                <div className="menu__column--option_infomation">

                    <div className="menu__column-item menu__column--my-account-user">
                        <div className="my__interactive my-account-user__avatar">
                            <div class="user__border-us">
                                <img src={Avatar} alt="avatar" id="id__avatar"/>
                            </div>
                        </div>
                        <div className="my__interactive my-account-user__name">
                            <div className="my__user_name--acty">
                                <div className="my_last_name">NV Phong</div>
                                <div className="my_activate">
                                    <i class="fa-solid fa-circle-small"></i>
                                    <div class="text_activate">Activate</div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className="menu__column-item menu__column--work">
                        <div className="my_item--work my__">
                            <i class="fa-regular fa-comment-dots" ></i>
                            </div>
                        <div className="my_item--work">
                            <i class="fa-regular fa-bell"></i>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
};
export default Option_bottom;