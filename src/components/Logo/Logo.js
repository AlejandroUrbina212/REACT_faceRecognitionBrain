import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css'


// since it is a non state component (pure component), we can use a pure function 

const Logo = () =>{
    return (
        <div className='ma4 mt0'>
            {/* class Tilt was imported with the react-tilt.js library */}
            <Tilt className='Tilt  br2 shadow-2' options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa4 center"> 
                    <img style={{paddingTop:'5px'}} alt='logo'src={brain}/>
                </div>
            </Tilt>
        </div>
    );
}
export default Logo;