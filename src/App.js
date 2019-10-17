import React from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import './App.css';
import 'tachyons';



/* used to determine Particles's class behavior */
const particlesOptions = {
  particles: {
    number:{
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
};
/* app declaration for clairifai model usage */
const app = new Clarifai.App({
  apiKey: '6959e8b07d304cfdb32d2776b42752fe'
 });
/* since this is a state component, we export a class instead of a pure function */
class App extends React.Component{
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {}
    }
  };

  /** calculates the position where the face box will have its corners */
  /** params: data is the object of the Clairifai API response */
  /** return: an object whom the attributes are the four corners of the face */
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    // DOM manipulation
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width,height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  // changes the box state, 
  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box});
  }
  /** triggers the event when onInputChange is called in ImageLinkForm(that receives the methods as props)
   *  input is changed in this.state
  */
  onInputChange = (event) =>{
    this.setState({input: event.target.value})
  }

  /**  triggers the click when onButtonSubmit is called in ImageLinkForm(that receives the methods as props) 
   * imageUrl is changed in this.state, and then it is passed to the predict method that Clairifai provides 
  */

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        // URL
        this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
        /* sending the methods to the ImageLinkForm component as Props */
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition
        /* sending the box onject from this.state to FaceRecognition component as props*/
        box = {this.state.box}
        /* sending the imageUrl from this.state to FaceRecognitionComponent as props */
        imageUrl={this.state.imageUrl}/>
    </div>
    );  
  }
}
export default App;
