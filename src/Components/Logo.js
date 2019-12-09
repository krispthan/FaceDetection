import React from "react";
import Tilt from 'react-tilt'
import "./logo.scss";
import logoImage from "../Assets/brain.png"

const Logo = () => {
    return (
       <div className= "br2">
 <Tilt className="Tilt" options={{ max : 35 }} style={{ height: 250, width: 250 }} >
 <div className="Tilt-inner ps3">
     <img stlye={{paddingTop:"5px", width:"200px"}}src={logoImage} alt="logo"/></div>
</Tilt>
       </div>
    )
};
export default Logo;