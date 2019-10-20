import React from 'react';

// since it is a non state component (pure component), we can use a pure function
/** 
 * params: 
 *  onRouteChange is a reference to the method created in App.js that updates state
 *  isSigned in is a reference to the state variable that is used to return p tags accordign to the current status
 * */ 
const Navigation = ({onRouteChange, isSignedIn}) =>{
        if(isSignedIn){
            return(
                <nav className='flex justify-end'>
                {/* when we are passing a jsx object we use brackets */}
                    <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
                </nav>
            ); 
        } else {
            return(
                <nav className='flex justify-end'>
                {/* when we are passing a jsx object we use brackets */}
                    <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
                </nav>
            );
        }
}
export default Navigation;