import "./topbar.css"
import React from 'react'

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <h1 className="logoName">TMH</h1>
                <img className="logo" src="assets/dogali.JPEG" alt="logo-dogali bridge" />

            </div>
            <div className="topbarRight">
                <div className="rigtbarLinkHome">
                    <a href="/"> Home </a>
                </div>
                <div className="rigtbarLinkAbout">
                    <a href="#about"> About </a>
                </div>
                <div className="rigtbarLinkContact">
                    <a href="#home"> Contact Us </a>
                </div>
                <div className="rigtbarLinkSignIn">
                    <a href="/register"> Become a Member </a>
                </div>
            </div>
        </div>
    )
}
