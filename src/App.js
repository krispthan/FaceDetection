import React, {Component} from 'react';
import Navigation from "./Components/Navigation"
import Logo from "./Components/Logo"
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm"
import Rank from "./Components/Rank/Rank"
import Particles from "react-particles-js";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import './App.css';
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";
import Clarifai from "clarifai";

const particlesOptions ={
 
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
  
const app = new Clarifai.App({
    apiKey:"c64322bd50844136ad5d494497077128"
  });
class App extends Component {
  constructor(props){
    super(props);
      this.state={
        input:"",
        imageUrl:"",
        box:{},
        route:"signin",
        isSignedIn:false
      }
    
  }
  onInputChange =e=> {
    this.setState({input:e.target.value})
  }
  calculateFaceLocation = (data) =>{
    console.log(data);
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image=document.getElementById("inputImage");
 const width = Number(image.width);
 const height= Number(image.height);
 console.log(width,height);
 return {
   //calculate the face detection box
   leftCol:clarifaiFace.left_col * width,
   topRow: (clarifaiFace.top_row && clarifaiFace.top_row === "0" ? height : clarifaiFace.top_row * height   ),
 
   rightCol: width -(clarifaiFace.right_col * width),
   bottomRow: height -(clarifaiFace.bottom_row * height)
 }
  }
  displayDetectionFaceBox = (box) => {
    console.log(box);
    this.setState({box: box})
  };
  onButtonSubmit = () => {
    console.log("clicked")
  this.setState({imageUrl:this.state.input})
    
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
   this.state.input)
      .then(response => this.displayDetectionFaceBox(this.calculateFaceLocation(response)))
      .catch(error => console.log(error))
  }
  onRouteChange =(route) => {
    if(route ==="signout"){
      this.setState({isSignedIn: false})
    } else if (route ==="home"){
      this.setState({isSignedIn: true})
    }
    this.setState({route:route})
  }
  render(){
    return (
      <div className="App">
         <Particles className="particles" params={particlesOptions}/>
       <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/> 
      {this.state.route === "home" 
      ? 
      <div>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
      : (
  this.state.route === "signin" 
  ?
  <SignIn onRouteChange={this.onRouteChange}/> 
  : <Register onRouteChange={this.onRouteChange}/> 
)
       } 
      </div>
    );
  }

}

export default App;
