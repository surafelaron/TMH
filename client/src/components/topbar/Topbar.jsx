import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../utils/x.svg";
import { ReactComponent as MenuIcon } from "../../utils/menu.svg";
import "./topbar.css"

const Topbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="header">
            <a href="/">
                <div className="topbarLeft">
                    <h1 className="logoName">TMH</h1>
                    <img className="logo" src="assets/dogali.JPEG" alt="logo-dogali bridge" />
                </div>
            </a>
            <div className="logo-nav">
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">ABOUT</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">CONTACT</a>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <a href="#">ARTICLES</a>
                    </li>
                    <li className="option mobile-option" onClick={closeMobileMenu}>
                        <a href="/signin">LOG-IN</a>
                    </li>
                    <li className="option mobile-option" onClick={closeMobileMenu}>
                        <a href="/register" className="sign-up">
                            REGISTER
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="signin-up">
                <li className="sign-in" onClick={closeMobileMenu}>
                    <a href="/signin">LOG-IN </a>
                </li>
                <li onClick={closeMobileMenu}>
                    <a href="/register" className="signup-btn">
                        REGISTER
                    </a>
                </li>
            </ul>
            <div className="mobile-menu" onClick={handleClick}>
                {click ? (
                    <CloseMenu className="menu-icon" />
                ) : (
                    <MenuIcon className="menu-icon" />
                )}
            </div>
        </div>
    );
};

export default Topbar;

