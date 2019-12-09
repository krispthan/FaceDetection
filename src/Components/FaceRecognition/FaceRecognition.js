import React from "react";
import "./facerecognition.scss";
const FaceRecognition =({imageUrl, box}) => {
    return (
        <div className="center ma">
    <div className="relative mt2">
    <img id="inputImage" src={imageUrl} alt="face-recognition" width="500px" height="auto"/>
    <div className="bounding-box" style={{top:box.topRow, right:box.rightCol, bottom:box.bottomRow, left:box.leftCol}}></div>
    </div>
 </div>
    )
}
export default FaceRecognition;