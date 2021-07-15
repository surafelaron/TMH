import React from 'react'
import "./landing.css"
import background from "../../utils/axum2.png"
export default function Landing() {

    const backgroundSyle = {
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${background})`
    }
    return (
        <div>
            <div className="landingContainer" style={backgroundSyle}>
                <div className="landingcenterContainer">
                    <h1 className="landingCenter">Welcome to TMH Home Page</h1>
                    <h2 className="landingCenter2">Become a Member and Help The Cause!!</h2>
                </div>

            </div>
        </div>
    )
}
