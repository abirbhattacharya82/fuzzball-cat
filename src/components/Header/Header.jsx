import React from "react";
import dp from './logo.png';
import './Header.css'
function Header()
{
    return(
        <div className="Header">
            <div className="DPArea">
                <img src={dp} alt="" />
            </div>
            <div className="NameArea">
                <div className="Texts">
                    <div className="Name">Fuzzball</div>
                    <div className="status" id="status">Online</div>
                </div>
            </div>
        </div>
    )
};
export default Header;