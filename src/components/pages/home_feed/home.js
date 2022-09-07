import { Component, useState } from "react";
import Menu from "./layout_sidebar/menu";
import Complementary from "./layout_sidebar/complementary";
import ErrorComponent from "../../errorBoundary";
import { withErrorBoundary } from "react-error-boundary";
import Create_status from "./content_feed/create_status-feed";
import Status_feed from "./content_feed/status_feed";

function Home() {

    return (
        <>
            <div className="body">
                <Menu></Menu>
                <div className="item_content--home body__row-flex">
                    <div className=" body__row-flex--main">
                        <Create_status></Create_status>
                        <Status_feed></Status_feed>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        <div className="hu">ok</div>

                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        home<br></br>
                        homed<br></br>

                    </div>
                </div>
                <Complementary></Complementary>
            </div>

        </>
    )
};
<ErrorComponent></ErrorComponent>
export default withErrorBoundary(Home, {
    FallbackComponent: ErrorComponent,
});