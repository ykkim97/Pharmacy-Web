import React from "react";
import Header from "./Header";

const Templete = ({children}) => {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    )
}

export default Templete;