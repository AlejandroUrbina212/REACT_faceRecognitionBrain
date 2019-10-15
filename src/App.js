import React from 'react';
import Particles from 'react-particles-js';


import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';
import 'tachyons';



{/* used to determine Particles's class behavior */}
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

{/* since this is a state component, we export a class instead of a pure function */}
class App extends React.Component{
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm/>
    </div>
    );  
  }
}
export default App;
