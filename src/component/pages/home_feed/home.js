import { Component, useState } from "react";
import Menu from "./layout-sidebar/menu";
import Complementary from "./layout-sidebar/complementary";
import ErrorComponent from "../../errorBoundary";
import { withErrorBoundary } from "react-error-boundary";

function Home() {

    return (
        <div>
            <Menu></Menu>
            <div className="body">
                <div className="body__row-flex">
                    <div className=" body__row-flex--main">
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
            </div>
            <Complementary></Complementary>
        </div>
    )
};
<ErrorComponent></ErrorComponent>
export default withErrorBoundary(Home, {
    FallbackComponent: ErrorComponent,
});