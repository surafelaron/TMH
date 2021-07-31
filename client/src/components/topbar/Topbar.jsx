import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../actions/Context";
import { ReactComponent as CloseMenu } from "../../utils/x.svg";
import { ReactComponent as MenuIcon } from "../../utils/menu.svg";
import "./topbar.css"

const Topbar = () => {
    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <div className="header">
            <Link to="/">
                <div className="topbarLeft">
                    <h1 className="logoName">TMH</h1>
                    <img className="logo" src="assets/dogali.JPEG" alt="logo-dogali bridge" />
                </div>
            </Link>
            <div className="logo-nav">
                <ul className={click ? "nav-options active" : "nav-options"}>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="#">ABOUT</Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="#">CONTACT</Link>
                    </li>
                    <li className="option" onClick={closeMobileMenu}>
                        <Link to="/posts">ARTICLES</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                        {user ? (
                            <>
                            <Link to ="settings">Settings</Link>
                            <Link to="/settings">
                                <img className="topImg" src={PF + user.profilePic} alt="" />
                            </Link>
                            </>
                        ) : (
                            <div className="topList">
                                <li className="topListItem">
                                    <Link className="link" to="/login">
                                        LOGIN
                                    </Link>
                                </li>
                                <li className="topListItem">
                                    <Link className="link" to="/register">
                                        REGISTER
                                    </Link>
                                </li>
                            </div>
                        )}
                    
                </ul>

            </div>
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

