import React from "react";
import "./imagelinkform.scss"
const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className="">
            <p className="f3 white">
                {"This Brain will detect faces from the image"}
            </p>
            <div className="center">
            <input className="f4 pa2  w-20 center form"type="text" onChange={onInputChange}/>
                <button className="detect-button w-20 grow f4 link pv2 ph3 dib white bg-light-blue shadow-5" onClick={onButtonSubmit}>Detect</button>
            </div>
              
        </div>
    )
};
export default ImageLinkForm;